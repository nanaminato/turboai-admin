import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./pages/admin.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'accounts'
      },
      {
        path: 'accounts', loadChildren: () =>
          import('./pages/accounts/account.module').then(m => m.AccountModule)
      },
      {
        path: 'secrets', loadChildren: ()=>
          import('./pages/secrets/secret.module')
            .then(m=>m.SecretModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
