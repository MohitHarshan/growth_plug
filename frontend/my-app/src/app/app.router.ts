import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsComponent } from './listings/listings.component';
import {UpdateComponent} from './listings/update/update.component'
const appRoutes: Routes = [
  {
    path: "listings",
    component: ListingsComponent
  },
  {
    path: "listing-edit",
    component: UpdateComponent
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}
