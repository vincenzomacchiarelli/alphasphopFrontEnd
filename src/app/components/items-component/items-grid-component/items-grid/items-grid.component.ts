import { Component, OnInit } from '@angular/core';
import { ItemsCardComponent } from '../../components/items-card/items-card.component';
import { ItemsModule } from '../../items.module';

@Component({
  selector: 'app-items-grid',
  templateUrl: './items-grid.component.html',
  styleUrl: './items-grid.component.css',
  standalone: true,
  imports: [ItemsModule]
})
export class ItemsGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
