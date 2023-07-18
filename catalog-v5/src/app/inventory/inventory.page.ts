import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.page.html',
  styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
  products : any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.http.get('http://localhost/herb-e-list-v5/backend/getProducts.php').subscribe((response)=>{
      console.log(response);
      this.products = response;
    });
  }

}
