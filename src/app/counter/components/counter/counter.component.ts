import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public counter: number = 0;

  addValue(value: number): void {
    this.counter += value;
  }
  resetear() {
    this.counter = 0;
  }
}
