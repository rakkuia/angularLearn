import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: 'product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null,
    id: 0
  }


  something = "something";

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }

  doSomething(): void {
    console.log('a');
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Product created');
      this.router.navigate(['/brutalist']);
    });
   
  }

  cancelProduct(): void {
    this.router.navigate(['/brutalist']);
  }
}
