import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { developersComponent } from './Components/developers/developers.component';
import { blockchainComponent } from './Components/blockchain/blockchain.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { HomeComponent } from './Components/home/home.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { MarketingComponent } from './Components/marketing/marketing.component';
import { ProduccionComponent } from './Components/produccion/produccion.component';
import { AppsComponent } from './Components/apps/apps.component';
import { ServicesComponent } from './Components/services/services.component';
import { ComerceComponent } from './Components/comerce/comerce.component';
import { DappsComponent } from './Components/dapps/dapps.component';
import { CoachingComponent } from './Components/coaching/coaching.component';
import { ArteComponent } from './Components/arte/arte.component';
import { TurismoComponent } from './Components/turismo/turismo.component';
import { NosotrosComponent } from './Components/nosotros/nosotros.component';
import { AliadosComponent } from './Components/aliados/aliados.component';
import { ExperienciaComponent } from './Components/experiencia/experiencia.component';
import { footerComponent } from './Components/footer/footer.component';
import { NguCarouselModule } from '@ngu/carousel';
import { NavComponent } from './Components/nav/nav.component';
import { ChatComponent} from './Components/chat/chat.component';
import { ConfirmacionComponent } from './Components/confirmacion/confirmacion.component';
import { FormularioComponent } from './Components/formulario/formulario.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    footerComponent,
    blockchainComponent,
    developersComponent,
    HomeComponent,
    InicioComponent,
    MarketingComponent,
    ProduccionComponent,
    AppsComponent,
    ServicesComponent,
    ComerceComponent,
    DappsComponent,
    CoachingComponent,
    ArteComponent,
    TurismoComponent,
    NosotrosComponent,
    AliadosComponent,
    ExperienciaComponent,
    NavComponent,
    ChatComponent,
    ConfirmacionComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NguCarouselModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
