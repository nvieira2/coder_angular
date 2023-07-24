import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: 0,
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      //chamada para Produto.service - backend
      this.productService.showMessage('Produto incluído!'); // mostra mensagem
      this.router.navigate(['/products']); // opcional navegar para pagina inicial de produto
    });
  }
  cancel(): void {
    this.router.navigate(['/products']);
  }
}
