import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

  setEn(): void {
     localStorage.setItem('language', "en");
     this.translate.use("en");
  }

  setEs(): void {
     localStorage.setItem('language', "es");
     this.translate.use("es");
  }
}
