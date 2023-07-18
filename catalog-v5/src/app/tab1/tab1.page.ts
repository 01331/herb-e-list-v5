import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  products : any = [];
  branches : any = [];

  constructor(private http: HttpClient, public nav: NavController) {}

  ngOnInit() {
    this.getProducts();
    this.getBranches();
  }

  getProducts(){
    this.http.get('http://localhost/herb-e-list-v5/backend/getProducts.php').subscribe((response)=>{
      this.products = response;
    });
  }

  getBranches(){
    this.http.get('http://localhost/herb-e-list-v5/backend/getBranches.php').subscribe((response)=>{
      this.branches = response;
    });
  }

  getBranchName(branchId: number): string {
    const branch = this.branches.find((branch: { BranchID: number; }) => branch.BranchID === branchId);
    return branch ? branch.BranchName : '';
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
    this.nav.navigateForward("/details")
  }

}
