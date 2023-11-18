import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { IFireBaseAuthRes, ILoginUser } from '../interfaces/user.interfaces';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
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
                tap(this.setToken) 
            )
    }

    public logout(): void {
        this.setToken(null);
    }

    public get isAuth(): boolean {
        return !!this.token;
    }

    private setToken(response: any): void {
        if (response) {
            const expDate = new Date(new Date().getTime() + +response.expiresIn);
            localStorage.setItem('fb-token', response.idToken);
            localStorage.setItem('fb-token-exp', expDate.toString())
        } else {
            localStorage.clear();
        }
        
    }
}
