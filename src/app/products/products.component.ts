import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'; // Adjust the path if needed
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  product: any;
  filteredProducts: any;
  searchTerm: string = '';
  sortColumn: string = '';
  sortDirection: string = 'asc'; // Initial sorting direction

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data: any) => {
        this.products = data.products; // Assuming the API response structure
        this.filteredProducts = [...this.products];
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  filterProducts() {
    this.filteredProducts = this.products.filter((product: { title: string; description: string; }) =>
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(this.searchTerm.toLowerCase())
      // Add more fields to filter if needed
    );
  }

  sortProducts(column: string) {
    if (this.sortColumn === column) {
      // Toggle sort direction if the same column is clicked
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.filteredProducts.sort((a:any, b:any) => {
      const aValue = a[column];
      const bValue = b[column];

      if (aValue < bValue) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
