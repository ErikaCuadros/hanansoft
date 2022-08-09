import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-comerce',
  templateUrl: './comerce.component.html',
  styleUrls: ['./comerce.component.css']
})
export class ComerceComponent implements OnInit {

  constructor(private elementRef: ElementRef) { 
    this.estado = true;
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#00172A';
  }
  estado: boolean;
}
