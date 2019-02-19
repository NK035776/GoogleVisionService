import {Image} from './Image.model';
import {FeaturesEntity} from './featuresEntity.model';


export class RequestsEntity {
    image: Image;
    features?: (FeaturesEntity)[] | null;
    constructor(){

    }
  
}