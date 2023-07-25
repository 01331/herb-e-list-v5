import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  currentAccount : any;

  constructor() { }

  ngOnInit() {
    const storedAccount = localStorage.getItem('currentAccount');
    if(storedAccount) {
      this.currentAccount = JSON.parse(storedAccount);
    };
  }

}
