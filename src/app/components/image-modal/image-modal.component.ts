import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent implements OnInit {
  imageUrl: string
  title: string;
  constructor(public modalController: ModalController) { }
  dismiss() {

    this.modalController.dismiss({
      'dismissed': true
    });
  }
  change($event) {
    this.title = $event.target.value;
    console.log(this.title)
  }
  addImage() {
    this.modalController.dismiss({
      'dismissed': false,
      "imageUrl": this.imageUrl,
      "title": this.title
    });
  }

  ngOnInit() { console.log(this.imageUrl) }

}
