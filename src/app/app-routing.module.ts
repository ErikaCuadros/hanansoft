import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { PruebaComponent } from './Components/prueba/prueba.component';
import { NavComponent } from './Components/nav/nav.component';
import { developersComponent } from './Components/developers/developers.component';
import { blockchainComponent } from './Components/blockchain/blockchain.component';
const routes: Routes = [

  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'marketing', component:MarketingComponent},
  {path: 'produccion', component:ProduccionComponent},
  {path: 'apps', component:AppsComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'commerce', component:ComerceComponent},
  {path: 'dapps', component:DappsComponent},
  {path: 'coaching', component:CoachingComponent},
  {path: 'arte', component:ArteComponent},
  {path: 'turismo', component:TurismoComponent},
  {path: 'nosotros', component:NosotrosComponent},
  {path: 'aliados', component:AliadosComponent},
  {path: 'experiencia', component:ExperienciaComponent},
  {path: 'prueba', component:PruebaComponent},
  {path: 'nav', component:NavComponent},
  {path: 'developers', component:developersComponent},
  {path: 'blockchain', component:blockchainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
