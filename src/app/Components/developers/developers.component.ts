import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class developersComponent implements OnInit {

  constructor() { 
    this.estado = true
  }

  ngOnInit(): void {
  }

  estado: boolean;
}