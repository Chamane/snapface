import { Component, Inject, Input } from '@angular/core';
import { FaceSnap } from './face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent{
  @Input() faceSnap!:FaceSnap;
 
  onSnap(): void{
    if(this.faceSnap.buttonText === 'Oh Snap'){
      this.faceSnap.snaps++;
      this.faceSnap.buttonText = 'Oops, unsnap';
    }else{
      this.faceSnap.snaps--;
      this.faceSnap.buttonText = 'Oh Snap';
    }

    
  }
}
