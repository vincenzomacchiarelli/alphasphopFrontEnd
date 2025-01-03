import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemsCardComponent } from '../../components/items-card/items-card.component';
import { ItemsModule } from '../../items.module';
import { ItemsService } from '../../../../services/items.service';
import { IArticoli } from '../../../../models/Articoli';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrl: './items-grid.component.css',
  standalone: true,
  imports: [ItemsModule,CommonModule]
})
export class ItemsGridComponent implements OnInit {
   @ViewChild('gridView') child:any;
   items$: IArticoli[] = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit(): void {
    this.items$ = this.itemsService.getArticoli();
  }

  handleDelete = (item: IArticoli  ) => {
    console.log('Delete item with code: ', item.codart);
    this.items$.splice(this.items$.findIndex((itemSelected) => itemSelected.codart === item.codart), 1);
  }

  handleEdit = (item: IArticoli) => {
    console.log('Edit item with code: ', item.codart);
    this.child.getValue();
  }

  handleBuy = (qta: number) => {
    console.log('Buy ', qta, ' items');
  }

}
