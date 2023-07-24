import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public isdelete: boolean = false;

  public selectedHero?: string = '';
  public heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitan America',
  ];
  deleteHero() {
    this.selectedHero = this.heroes.pop();
    this.isdelete = true;
  }
  addHero() {
    this.heroes.push('Black Panther');
  }
}
