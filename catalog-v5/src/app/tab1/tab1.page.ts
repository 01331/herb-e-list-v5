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
    console.log(this.products);
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

  navigateWithObj(currentProduct: any){
    localStorage.setItem('currentProduct', JSON.stringify(currentProduct));
    window.location.href = '/details';
  }


}
