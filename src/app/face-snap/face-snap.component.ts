import { Component, Inject, Input } from '@angular/core';
import { FaceSnapService } from '../services/face-snaps.services';
import { FaceSnap } from './face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent{
  @Input() faceSnap!:FaceSnap;

  constructor(private faceSnapService:FaceSnapService){}
 
  onSnap(): void{
    if(this.faceSnap.buttonText === 'Oh Snap'){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    }else{
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    }  
  }

}
