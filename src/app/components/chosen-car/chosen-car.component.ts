import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../models/car';
import {ActivatedRoute} from '@angular/router';
import {cars} from '../../db/data';

@Component({
  selector: 'app-chosen-car',
  templateUrl: './chosen-car.component.html',
  styleUrls: ['./chosen-car.component.css']
})
export class ChosenCarComponent implements OnInit {
  @Input()
  car: any;
  cars = cars;

  constructor(private activatedRout: ActivatedRoute) {
    this.activatedRout.params.subscribe(value => this.car = value);
  }

  ngOnInit(): void {
  }

}
