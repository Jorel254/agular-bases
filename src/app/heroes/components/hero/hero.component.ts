import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public name: string = 'Windstorm';
  public age: number = 20;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old`;
  }
  changeHeroName(): void {
    this.name = 'Superman';
  }
  changeHeroAge(): void {
    this.age = 30;
  }
  limpiar(): void {
    this.name = 'Windstorm';
    this.age = 20;
  }
}
