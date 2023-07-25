import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  accounts: any = [];
  currentAccount: any = {};

  public formData: FormGroup;
  public adminData: FormGroup;

  public EmailAdmin: string = '';
  public PassAdmin: string = '';

  constructor(private http: HttpClient, private readonly fb: FormBuilder) {
    
    this.getAccounts();

    this.formData = this.fb.group({
      email: [null, [Validators.required, Validators.email, this.validateEmail.bind(this)]],
      password: [null, [Validators.required, this.validatePassword.bind(this)]],
    });
    this.formData.valueChanges.subscribe((value) => {
      if (this.formData.valid) {
        this.onFormValid();
      }
    });    

    this.adminData = this.fb.group({
      email: ['', this.validateAdminEmail],
      password: ['', this.validateAdminPass],
    });
    this.adminData.valueChanges.subscribe((value) => {
      if (this.adminData.valid) {
        console.log('is admin');
      }
    });

  }

  ngOnInit() {
  }

  getAccounts() {
    this.http.get('http://localhost/herb-e-list-v5/backend/getAccounts.php').subscribe((response) => {
      this.accounts = response;
    });
  }

  onSubmit() {
  }

  validateEmail(fc: FormControl) {
    const value = fc.value as string;
    const emailExists = this.accounts.some((account: { Email: string }) => account.Email === value);
    return emailExists ? null : { emailExists: true };
  }

  validatePassword(fc: FormControl) {
    const value = fc.value as string;
    const passMatches = this.accounts.some((account: { Password: string }) => account.Password === value);
    return passMatches ? null : { passMatches: true };
  }

  validateAdminEmail(fc: FormControl) {
    const value = fc.value as string;
    const isAdmin = 'admin' === value;
    return isAdmin ? { isAdmin: true} : '';
  }
  validateAdminPass(fc: FormControl) {
    const value = fc.value as string;
    const isAdmin = 'password' === value;
    return isAdmin ? { isAdmin: true} : '';
  }

  onFormValid() {
    const account = this.accounts.find((account: { Email: string;}) => account.Email === this.formData.value.email);
    return account ? localStorage.setItem('currentAccount', JSON.stringify(account)) : null;

  }

}