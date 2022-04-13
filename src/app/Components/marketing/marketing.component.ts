import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
@Component({
selector: 'app-marketing',
templateUrl: './marketing.component.html',
styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {

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
