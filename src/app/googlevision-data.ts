import { InMemoryDbService } from 'angular-in-memory-web-api';
import { GoogleVision } from './googleVision.model';
import { RequestsEntity } from './requestsEntity.model';
import { Image } from './Image.model';
import { Source } from './Source.model';
import { FeaturesEntity } from './featuresEntity.model';

export class GoogleVisionData {
  
  constructor(){

  }
  getData(){
    let source = new Source();
    let image = new Image();
    let featureentity = new FeaturesEntity();
    let requestentity = new RequestsEntity();
    let googleVision = new GoogleVision();

    source.imageUri = "";
    image.source = source;
    featureentity.maxResults = 1;
    featureentity.type = 'LABEL_DETECTION';
    requestentity.image = image;
    requestentity.features[0] =  featureentity;
    googleVision.requests[0] = requestentity;

    return { googleVisions: googleVision };
  }

  
}
