import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { ImageService } from '../../providers/image-service';
import { File } from '../../model/file';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public base64Image: string;
  public uploadStatus : string;

  constructor(public navCtrl: NavController, private imageService : ImageService) {
  }

  uploadPicture(){
    let file    = new File();
    file.data   = this.base64Image
    file.width  = 100;
    file.height = 100;

    this.imageService.upload(file).subscribe( res => {
       this.uploadStatus = 'uploaded successfully : ' + res;
    });

  }

  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 100,
        targetHeight: 100
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

}
