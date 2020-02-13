import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../git-hub.service';

@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.css']
})
export class UserRepositoriesComponent implements OnInit {

  gitUsersRepo:any;

  constructor(private gitService:GitHubService) { }

  ngOnInit() {
    this.fetchUserRepo();
  }

  //Fetch git user repositories list from the API in GitHubService
  fetchUserRepo(){
    this.gitService.getUserRepo(this.gitService.gitUser).subscribe(data => {
      this.gitUsersRepo = data;
      console.log(this.gitUsersRepo);
    }, err =>{
      console.log(err);
    }, () =>{
      console.log("Repositories fetched successfuly")
    })
  }

}
