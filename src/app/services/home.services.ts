import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IOffering } from '../model/offering';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
        
    constructor( private fs: AngularFirestore ) {}

    public saveOffer(data: IOffering) {
        this.fs.collection('offering').add(data);
    }

    public getOffer(){
        return this.fs.collection('offering', ref => ref.orderBy('name'));
    }
}