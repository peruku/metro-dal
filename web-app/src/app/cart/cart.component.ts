import { Component, OnInit } from '@angular/core';
import {  ViewChild } from '@angular/core';
import { DataTable, DataTableResource } from 'angular-2-data-table';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


    carResource = new DataTableResource([
    { year: 1997, maker: 'Ford', model: 'E350', desc: 'ac, abs, moon', price: 3000.00 },
    { year: 1999, maker: 'Chevy', model: 'Venture "Extended Edition"', price: 4900.00 },
    { year: 1999, maker: 'Checy', model: 'Venture "Extended Edition, Very Large"', price: 5000.00 },
    { year: 1996, maker: 'Jeep', model: 'Grand Cherokee', desc: 'air, moon roof, loaded', price: 4799.00 }
]);
    cars = [];
    carCount = 0;

    @ViewChild(DataTable) carsTable: DataTable;

    constructor() {
        this.rowColors = this.rowColors.bind(this);

        this.carResource.count().then(count => this.carCount = count);
    }

    reloadCars(params) {
        this.carResource.query(params).then(cars => this.cars = cars);
    }

    // custom features:

    carClicked(car) {
        alert(car.model);
    }

    yearLimit = 1999;

    rowColors(car) {
        if (car.year >= this.yearLimit) return 'rgb(255, 255, 197)';
    }

  ngOnInit() {
  }

}
