import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../git-hub.service';

@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.css']
})
export class GitUsersComponent implements OnInit {

  gitUsers:any;

  constructor(private gitService:GitHubService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  //Fetch git user list from the API in GitHubService
  fetchUsers(){
    this.gitService.getGitUsers().subscribe(data => {
      this.gitUsers = data;
      console.log(this.gitUsers);
    }, err =>{
      console.log(err);
    }, () =>{
      console.log("Users fetched successfuly")
    })
  }

  // set username to GitHubService variable to share with the UserRepositoriesComponent
  setGitUserName(user){
    this.gitService.gitUser = user.login;
  }

}
