import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './face-snap/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  mySnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Archibald is my friend',
      new Date(),
      6,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      'Oh Snap'
    );
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Archibald is my friend',
        createdDate: new Date(),
        snaps: 0,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        buttonText:'Oh Snap'
      },
      {
        title:'Test',
        description:'test',
        createdDate:new Date(),
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        snaps:6,
        buttonText:'Oh Snap'
      }
    ]
  }
}