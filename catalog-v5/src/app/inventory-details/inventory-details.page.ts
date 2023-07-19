import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.page.html',
  styleUrls: ['./inventory-details.page.scss'],
})
export class InventoryDetailsPage implements OnInit {

  newdata: any = null;
  constructor(private router: Router) {
    this.newdata = this.router.getCurrentNavigation()?.extras?.state;
  }

  ngOnInit() {
  }

  checkWorking() {
    console.log(this.newdata);
  }

}
