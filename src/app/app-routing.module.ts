import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitUsersComponent } from './git-users/git-users.component';
import { UserRepositoriesComponent } from './user-repositories/user-repositories.component';


const routes: Routes = [
  { path:'',redirectTo:'user-list',pathMatch:'full' },
  { path:'user-list', component: GitUsersComponent },
  { path:'user-repositories', component: UserRepositoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
