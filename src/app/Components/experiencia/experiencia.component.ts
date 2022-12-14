import {ChangeDetectionStrategy,Component, OnInit} from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { interval, Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { slider } from '../../slide-animation';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienciaComponent implements OnInit {
  
  images = ['assets/img/cacho.svg', 'assets/img/nusimi.jpg', 'assets/img/simidic.svg'];
  images1 = ['assets/img/certix.png', 'assets/img/certix2.png', 'assets/img/certix3.png'];
  images2 = ['assets/img/bancobisa.svg', 'assets/img/ehealth.svg', 'assets/img/boliviana.svg', 'assets/img/cliente4.svg', 'assets/img/cliente5.svg'];
  carouselBanner: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 2,
    speed: 800,
    interval: {
      timing: 5000,
      initialDelay: 1000
    },
    point: {
      visible: true
    },
    load: 2,
    custom: 'banner',
    loop: true,
    touch: true, // touch is not currently in active for vertical carousel, will enable it in future build
    vertical: {
      enabled: true,
      height: 300
    }
  };
  tempData: any[]=[];
  tempData1: any[]=[];
  tempData2: any[]=[];
  public carouselTileItems$!: Observable<number[]>;
  public carouselTileItems1$!: Observable<number[]>;
  public carouselTileItems2$!: Observable<number[]>;

  constructor(private elementRef: ElementRef) { }
  

  ngOnInit(): void {
    this.tempData = [];
    this.tempData1 = [];
    this.tempData2 = [];
    //PRIMER CARRUSEL
    this.carouselTileItems$ = interval(200).pipe(
      startWith(1),
      take(3),
      map(val => {
        const data = (this.tempData = [
          ...this.tempData,
          this.images[Math.floor(Math.random() * this.images.length)]
        ]);
        return data;
      })
    );
    //SEGUNDO CARRUSEL
    this.carouselTileItems1$ = interval(200).pipe(
      startWith(1),
      take(3),
      map(val => {
        const data1 = (this.tempData1 = [
          ...this.tempData1,
          this.images1[Math.floor(Math.random() * this.images1.length)]
        ]);
        return data1;
      })
    );
    //TERCERO CARRUSEL
    this.carouselTileItems2$ = interval(200).pipe(
      startWith(1),
      take(3),
      map(val => {
        const data2 = (this.tempData2 = [
          ...this.tempData2,
          this.images2[Math.floor(Math.random() * this.images2.length)]
        ]);
        return data2;
      })
    );
  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#00172A';
  }
}
