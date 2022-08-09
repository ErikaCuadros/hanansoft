import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-coaching',
  templateUrl: './coaching.component.html',
  styleUrls: ['./coaching.component.css']
})
export class CoachingComponent implements OnInit {

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
