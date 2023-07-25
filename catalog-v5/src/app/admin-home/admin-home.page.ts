import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.page.html',
  styleUrls: ['./admin-home.page.scss'],
})
export class AdminHomePage implements OnInit {

  products : any = [];
  currentAccount : any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProducts();
    const storedAccount = localStorage.getItem('currentAccount');
    if(storedAccount) {
      this.currentAccount = JSON.parse(storedAccount);
    };
  }

  getProducts(){
    this.http.get('http://localhost/herb-e-list-v5/backend/getProducts.php').subscribe((response)=>{
      this.products = response;
    });
  }

  navigateWithObj(currentProduct: any){
    localStorage.setItem('currentProduct', JSON.stringify(currentProduct));
    window.location.href = '/inventory-details';
  }

  addingProduct(as: string){
    window.location.href = '/add-product';
  }

  
}
  
