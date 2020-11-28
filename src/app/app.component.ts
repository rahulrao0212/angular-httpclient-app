import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repos } from './Model/repo.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  userName: string = "tektutorialshub"
  baseURL: string = "https://api.github.com/";
  repos: Repos[] = [];


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getRepos()
  }


  public getRepos() {

    return this.http.get<Repos[]>(this.baseURL + 'users/' + this.userName + '/repos')
      .subscribe(
        (response) => {                           //Next callback
          console.log('response received')
          console.log(response);
          this.repos = response;
        },
        (error) => {                              //Error callback
          console.error('Request failed with error')
          alert(error);
        },
        () => {                                   //Complete callback
          console.log('Request completed')
        })
  }
}