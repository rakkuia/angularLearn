import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: 'product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {

  something = "something";

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }

  doSomething(): void {
    console.log('a');
  }

  createProduct(): void {
    this.productService.showMessage('Product created');
  }

  cancelProduct(): void {
    this.router.navigate(['/brutalist']);
  }
}
