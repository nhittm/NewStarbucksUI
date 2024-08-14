import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StoresService,IStore } from '../stores.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css'
})
export class StoresComponent {
  tukhoa:string = '';
  constructor(private s: StoresService) { }
  listStore: IStore[] = [];
  listSearch: IStore[] = []
  ngOnInit(): void {
    this.s.getStore().subscribe(data => {
      this.listStore = data as IStore[];
      this.listSearch = data as IStore[];
      console.log("this.listStore=", this.listStore);
    });
  }
  search() {
    this.listSearch = this.listStore.filter(s => s.name.toLowerCase().includes(this.tukhoa.toLowerCase()));
    if (this.listStore.length === 0) {
      alert('Không tìm thấy cửa hàng!');
    }
  }
  
}
