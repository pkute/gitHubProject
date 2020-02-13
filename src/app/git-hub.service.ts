import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  gitUser:any;

  constructor(private http:HttpClient) { }

  // API to fetch the git users
  getGitUsers(){
    return this.http.get("https://api.github.com/users");
  }

  // API to fetch the repositories of user
  getUserRepo(gitUser){
    return this.http.get("https://api.github.com/users/"+gitUser+"/repos");
  }

}
