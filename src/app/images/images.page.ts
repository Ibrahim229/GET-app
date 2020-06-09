import { Component, OnInit } from '@angular/core';
import { image } from '../models/image.model';
import { Plugins, CameraResultType } from '@capacitor/core';
import { ModalController } from '@ionic/angular';
import { ImageModalComponent } from '../components/image-modal/image-modal.component';

const { Camera } = Plugins;
@Component({
  selector: 'app-images',
  templateUrl: './images.page.html',
  styleUrls: ['./images.page.scss'],
})

export class ImagesPage implements OnInit {
  userPhotos: image[] = [];

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }



  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    if (image.webPath != null) {
      this.presentModal(image.webPath);
    }

  }

  async presentModal(imageUrl: string) {
    const modal = await this.modalController.create({
      component: ImageModalComponent,
      componentProps: {
        imageUrl: imageUrl
      }
    });
    await modal.present();
    modal.onDidDismiss().then((imageObject) => {
      if (!imageObject.data.dismissed) {
        let newImage: image = {
          imagePath: imageObject.data.imageUrl,
          imageTitle: imageObject.data.title
        }
        this.userPhotos.push(newImage)
      }
    })
  }

}
