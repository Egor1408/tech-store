import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ILoginUser } from '../../shared/interfaces/user.interfaces';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class LoginPageComponent implements OnInit {

    loginForm: FormGroup = new FormGroup({
        email: new FormControl(null, [Validators.email, Validators.required]),
        password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    submitted: boolean = false;

    constructor (
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {}

    submit() {
        if (this.loginForm.invalid) {
            return
        }
        this.submitted = true
        const user: ILoginUser = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password,
        }

        this.authService.login(user).subscribe(() => {
            this.loginForm.reset();
            this.router.navigate(['/']);
            this.submitted = false
        })
    }
}
