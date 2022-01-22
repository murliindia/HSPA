import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor() { }

  PropertyList:any[]=[
      {
      "ID":1,
      "Name":"Birla House",
      "Type":"House",
      "Price":5000
    },
    {
      "ID":2,
      "Name":"Erose House",
      "Type":"Villas",
      "Price":12000
    },
    {
      "ID":3,
      "Name":"Super House",
      "Type":"Super",
      "Price":15000
    },
    {
      "ID":4,
      "Name":"Super Big House",
      "Type":"Super Big",
      "Price":10000
    },
    {
      "ID":5,
      "Name":"Middle House",
      "Type":"Middle",
      "Price":2000
    },
    {
      "ID":6,
      "Name":"Standard House",
      "Type":"Standard Vilas",
      "Price":14000
    },
    {
      "ID":7,
      "Name":"Deli House",
      "Type":"Deli",
      "Price":20000
    },
    {
      "ID":8,
      "Name":"Noida House",
      "Type":"Noida",
      "Price":10000
    },
    {
      "ID":9,
      "Name":"Gurgaon House",
      "Type":"Gurgaon",
      "Price":12000
    }

];


  ngOnInit() {
  }

}
