import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { UsernameComponent } from './username/username.component';

const routes: Routes = [
  {
    path: 'UserName',
    component: InfoComponent,
  },
  {
    path: '',
    component: UsernameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponent = [InfoComponent];
