import { Injectable } from "@angular/core";
import { FaceSnap } from "../face-snap/face-snap.model";

@Injectable({
    providedIn:'root'
})
export class FaceSnapService {
    faceSnaps: FaceSnap[] = [
        {
            id:0,
            title: 'Archibald',
            description: 'Archibald is my friend',
            createdDate: new Date(),
            snaps: 0,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            buttonText:'Oh Snap'
        },
        {
            id:1,
            title:'Test',
            description:'test',
            createdDate:new Date(),
            imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            snaps:6,
            buttonText:'Oh Snap'
        }
    ];

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId:number):FaceSnap{
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(faceSnap) return faceSnap;
        else throw new Error("FaceSnap not found !");
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap'|'unsnap'):void{
       const faceSnap = this.getFaceSnapById(faceSnapId);
       snapType === 'snap' ? faceSnap.snaps++: faceSnap.snaps--;
       snapType === 'snap' ? faceSnap.buttonText='Oops, unsnap':faceSnap.buttonText='Oh Snap';
    }

}