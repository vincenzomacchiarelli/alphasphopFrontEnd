import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IArticoli } from '../../../../models/Articoli';

@Component({
  selector: 'app-items-card',
  templateUrl: './items-card.component.html',
  styleUrl: './items-card.component.css'
})
export class ItemsCardComponent implements OnInit {

  @Input('item-card') item: IArticoli = {
    codart: '',
    descrizione: '',
    um: '',
    pzcart: 0,
    peso: 0,
    prezzo: 0,
    active: false,
    data: new Date(),
    imageUrl: ''
  };

  @Output('elimina-card') delete = new EventEmitter<IArticoli>();
  @Output('modifica-card') edit = new EventEmitter<IArticoli>();
  @Output('acquista-pezzi') sendValue = new EventEmitter<number>();
  qtaArt: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  editArt = () => {
    this.edit.emit(this.item);
  }

  deleteArt = () => {
    this.delete.emit(this.item);
  }

  getValue = () => {
    this.sendValue.emit(this.qtaArt);
  }

}
