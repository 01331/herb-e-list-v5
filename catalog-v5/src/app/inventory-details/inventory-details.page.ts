import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.page.html',
  styleUrls: ['./inventory-details.page.scss'],
})
export class InventoryDetailsPage implements OnInit {

  products: any = [];
  branches: any = [];
  currentProduct: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getProducts();
    this.getBranches();
    const storedProduct = localStorage.getItem('currentProduct');
    if(storedProduct) {
      this.currentProduct = JSON.parse(storedProduct);
    };
  }

  getProducts() {
    this.http.get('http://localhost/herb-e-list-v5/backend/getProducts.php').subscribe((response) => {
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

}
