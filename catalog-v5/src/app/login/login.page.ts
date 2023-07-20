import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  accounts: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    this.http.get('http://localhost/herb-e-list-v5/backend/getAccounts.php').subscribe((response) => {
      this.accounts = response;
    });
  }

}
