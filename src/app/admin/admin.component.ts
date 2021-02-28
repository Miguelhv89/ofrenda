import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IOffering } from '../model/offering';
import { HomeService } from '../services/home.services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  items:Observable<any[]> = new Observable<any[]>();
  constructor(public serviceHome: HomeService) { }

  ngOnInit(): void {
    this.items =  this.serviceHome.getOffer().valueChanges();
  }

}
