import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl:'./product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product;


  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id : String | null;
    id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    })
  }

  updateProduct() : void {
    this.productService.update(this.product).subscribe( () => {
      this.productService.showMessage('Product updated successfully');
      this.router.navigate(['/brutalist']);
    })}

  cancelProduct(): void {
    this.router.navigate(['/brutalist']);
  }

}
