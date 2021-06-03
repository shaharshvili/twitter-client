import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http:HttpClient) { }
  accessPointUrl: string = 'https://localhost:44377/api/twitter';
  apiValues: Observable<Object>
  ngOnInit() {
    this.submitHashtag("Israel"); 
  }

  public getTweetsByLocation(lat,long,radius){
    this.apiValues=this.http.get(this.accessPointUrl+"/getByLocation/"+lat+"/"+long+"/"+radius);
  }
  public submitHashtag(hashtag){
    this.apiValues=this.http.get(this.accessPointUrl+"/"+hashtag);
    hashtag=''; 
  }
}
