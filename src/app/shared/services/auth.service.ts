import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginUser } from '../interfaces/user.interfaces';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public isAuth$ = new Subject<boolean>();

    constructor (private http: HttpClient) {}

    get token(): string | null {
        const expDate = new Date(localStorage.getItem('fb-token-exp') as string);

        if (new Date() > expDate) {
            this.logout();
            return null;
        }

        return localStorage.getItem('fb-token');
    }

    public login(user: ILoginUser): Observable<any> {
        user.returnSecureToken = true;        
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
            .pipe(
                tap((v) => {
                    this.setToken(v);
                }) 
            )
    }

    public logout(): void {
        this.setToken(null);
    }
    
    private setToken(response: any): any {
        if (response) {
            const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
            localStorage.setItem('fb-token', response.idToken);
            localStorage.setItem('fb-token-exp', expDate.toString());
            this.isAuth$.next(true);
        } else {
            localStorage.clear();
            this.isAuth$.next(false)
        }
    }
}
