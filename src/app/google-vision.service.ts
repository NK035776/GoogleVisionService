import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GoogleVision } from './googleVision.model';

@Injectable({
    providedIn: 'root',
  })
export class GoogleVisionService {
    url = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyD99oBxYtyjdrmn0uqrOWvsjGTyMLKNkZc";
    constructor(private http: HttpClient) { }

    postGoogleVision(googleVision: GoogleVision): Observable<HttpResponse<GoogleVision>> {
        let httpHeaders = new HttpHeaders({
             'Content-Type' : 'application/json'
        });    
        return this.http.post<GoogleVision>(this.url, googleVision,
            {
              headers: httpHeaders,
              observe: 'response'
            }
        );
    }       
}