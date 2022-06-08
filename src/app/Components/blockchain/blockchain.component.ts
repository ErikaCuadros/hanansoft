import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class blockchainComponent implements OnInit {

  constructor() { 
    this.estado = true;
  }

  ngOnInit(): void {
  }

  estado: boolean;
}
