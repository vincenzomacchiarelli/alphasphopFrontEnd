import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  standalone: false,
  templateUrl: './jumbotron.component.html',
  styleUrl: './jumbotron.component.css'
})
export class JumbotronComponent implements OnInit {
  @Input()
  Titolo: string = "";
  @Input()
  SottoTitolo: string = "";
  @Input()
  Show: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
}
