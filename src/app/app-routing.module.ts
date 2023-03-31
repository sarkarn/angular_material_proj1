import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountsComponent} from './accounts/accounts.component'
import {ContactsComponent} from './contacts/contacts.component'
import {ActivityComponent} from './activity/activity.component'
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {FormtestComponent} from './formtest/formtest.component';
import {ChxboxtestComponent} from './chxboxtest/chxboxtest.component'
import {SnackbarComponent} from './snackbar/snackbar.component'
import {DialogComponent} from './dialog/dialog.component'
import {DatatableComponent} from './datatable/datatable.component'

const routes: Routes = [
	{path: 'accounts', component: AccountsComponent },
	{path: 'contacts', component: ContactsComponent },
	{path: 'activity', component: ActivityComponent },
	{path: 'login', component: LoginComponent},
	{path: 'logout', component: LoginComponent},
	{path: 'admin', component: AdminComponent},
	{path: 'formtest', component: FormtestComponent},
	{path: 'chxboxtest', component: ChxboxtestComponent},
	{path: 'snackbar', component: SnackbarComponent},
	{path: 'dialog', component: DialogComponent},
	{path: 'datatable', component: DatatableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
