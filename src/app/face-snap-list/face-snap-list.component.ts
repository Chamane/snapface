import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../face-snap/face-snap.model';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  
  constructor() { }

  ngOnInit(): void {
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
