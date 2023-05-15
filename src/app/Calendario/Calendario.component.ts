import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Calendario',
  templateUrl: './Calendario.component.html',
  styleUrls: ['./Calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  rangeDates: Date[] | undefined;

  constructor() { }
  ngOnInit(): void {

  }


}
