import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {

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

  
}
