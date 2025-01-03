
import { Component, OnInit } from '@angular/core';
import { IArticoli } from '../../../models/Articoli';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { ItemsService } from '../../../services/items.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
  standalone: true,
  imports: [CurrencyPipe, DatePipe,CommonModule,RouterLink]
})
export class ItemsComponent implements OnInit {

  articoli: IArticoli[] = [];

  constructor(private itemsService: ItemsService) {
   }

  ngOnInit(): void {
    this.articoli = this.itemsService.getArticoli();
  }

}
