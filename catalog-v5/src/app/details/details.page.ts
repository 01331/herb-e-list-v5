import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  id: any;
  branch: any;
  name: any;
  brand: any;
  dosage: any;
  type: any;
  desc: any;
  price: any;
  tags: any;
  avail: any;
  pic: any;

  constructor(public nav: NavController) {
    this.id = sessionStorage.getItem("id");
    this.branch = sessionStorage.getItem("branch");
    this.name = sessionStorage.getItem("name");
    this.brand = sessionStorage.getItem("brand");
    this.dosage = sessionStorage.getItem("dosage");
    this.type = sessionStorage.getItem("type");
    this.desc = sessionStorage.getItem("desc");
    this.price = sessionStorage.getItem("price");
    this.tags = sessionStorage.getItem("tags");
    this.avail = sessionStorage.getItem("avail");
    this.pic = sessionStorage.getItem("pic");
  }

  ngOnInit() {
  }

  selectProduct(id: any, branch:any, name: any, brand: any, dosage: any, type: any, desc: any, price: any, tags: any, avail: any, pic: any) {
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("branch", branch);
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("brand", brand);
    sessionStorage.setItem("dosage", dosage);
    sessionStorage.setItem("type", type);
    sessionStorage.setItem("desc", desc);
    sessionStorage.setItem("price", price);
    sessionStorage.setItem("tags", tags);
    sessionStorage.setItem("avail", avail);
    sessionStorage.setItem("pic", pic);
    this.nav.navigateForward("/details");

  }
}