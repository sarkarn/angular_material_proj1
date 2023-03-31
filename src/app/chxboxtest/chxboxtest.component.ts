import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chxboxtest',
  templateUrl: './chxboxtest.component.html',
  styleUrls: ['./chxboxtest.component.css']
})
export class ChxboxtestComponent implements OnInit {

  minDate = new Date();
  maxDate = new Date(2023, 5, 12);

  constructor() { }

  ngOnInit(): void {
  }

  dateFilter = date => {
    const day = date.getDay();
    return day != 0 && day !=6;
  }

}
