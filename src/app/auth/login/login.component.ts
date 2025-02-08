import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AppRouteTokens } from 'src/app/app-routing.module';

function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value || '';

    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?/~`]/.test(value);
    const isValidLength = value.length >= 8;

    if (!isValidLength || !hasUpperCase || !hasNumber || !hasSpecialChar) {
      return {
        invalidPass:
          'Password must be at least 8 characters long and include an uppercase letter, a number, and a special character.',
      };
    }

    return null;
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  public loginForm = this.fb.group({
    username: this.fb.nonNullable.control<string>('', Validators.required),
    password: this.fb.nonNullable.control<string>('', [
      Validators.required,
      passwordValidator(),
    ]),
  });

  public getControl = (controlName: string): FormControl =>
    this.loginForm.get(controlName) as FormControl;

  public shouldDisplayError(controlName: string): boolean {
    const ctrl = this.getControl(controlName);
    return ctrl.invalid && ctrl.touched;
  }

  public submitForm(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this.router.navigateByUrl(AppRouteTokens.VEHICLES);
    }
  }
}
