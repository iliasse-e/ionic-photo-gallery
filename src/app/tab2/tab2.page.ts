import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';
import { PhotoService } from '../services/photo.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [NgFor, IonRow, IonCol, IonImg, IonGrid, IonFab, IonFabButton, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent]
})
export class Tab2Page {

  constructor(public photoService: PhotoService) {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({camera})
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
