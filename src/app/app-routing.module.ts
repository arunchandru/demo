import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChennaiinterviewComponent } from './chennaiinterview/chennaiinterview.component';
import { DigitinsuranceComponent } from './digitinsurance/digitinsurance.component';
import { NPSTComponent } from './npst/npst.component';
import { TibilsolutionsComponent } from './tibilsolutions/tibilsolutions.component';

const routes: Routes = [
  {path:"",component:ChennaiinterviewComponent},
  {path:"Npst",component:NPSTComponent},
  {path:"digit",component:DigitinsuranceComponent},
  {path:"chennaiinterview",component:ChennaiinterviewComponent},
  {path:"tibil",component:TibilsolutionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
