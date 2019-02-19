import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { GoogleVisionService } from '../google-vision.service';
import { GoogleVision } from '../googleVision.model';
import { RequestsEntity } from '../requestsEntity.model';
import { Image } from '../Image.model';
import { Source } from '../Source.model';
import { FeaturesEntity } from '../featuresEntity.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-google-vision',
  templateUrl: './google-vision.component.html',
  styleUrls: ['./google-vision.component.css']
})
export class GoogleVisionComponent implements OnInit {
  googleVisionForm: FormGroup;
  constructor(private formBuilder:FormBuilder, private googleServiceService: GoogleVisionService) {
  }
  ngOnInit() {this.googleVisionForm = this.formBuilder.group({
    title: ['', [ Validators.required ] ]});   
    this.searchImage();  
  }

  onFormSubmit() {
    let Image = this.googleVisionForm.value;
    //this.searchImage();
  }

  get title() {
    return this.googleVisionForm.get('title');
 }
  
     
  searchImage() {
    let source = new Source();
    let image = new Image();
    
    source.imageUri = 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Gustav_chocolate.jpg';
    image.source = source;
    const featureentity : FeaturesEntity[] = [
      {maxResults: 1, type:'LABEL_DETECTION'}
    ];

    const requestentity : RequestsEntity[] = [
       {image: image, features: featureentity}
    ];

    const googleVision : GoogleVision[] = [
      {requests: requestentity}
    ];
    


      this.googleServiceService.postGoogleVision(googleVision[0]).subscribe(res => { 
          let artcl: GoogleVision = res.body;
          console.log(artcl.requests);
          console.log(res.headers.get('Content-Type'));	
            
        },
	      (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            //A client-side or network error occurred.				 
            console.log('An error occurred:', err.error.message);
          } else {
            //Backend returns unsuccessful response codes such as 404, 500 etc.				 
            console.log('Backend returned status code: ', err.status);
            console.log('Response body:', err.error);
          }
        }
     );
  }
}
