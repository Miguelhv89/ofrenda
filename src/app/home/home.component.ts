import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../services/home.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public frmHome = new FormGroup({
    name: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.min(0.2)])
  });
  public loading: boolean = false;
  public saveSuccess: boolean = false;

  constructor( private serviceHome: HomeService) { }
  
  ngOnInit(): void {
   console.log(this.frmHome.controls['name']) 
  }

  onClick(e:Event){
    try{
      this.loading = true;
      if (this.frmHome.valid) {
        this.serviceHome.saveOffer( this.frmHome.value );
        this.saveSuccess = true;
      }
    } catch(e) {
      console.error(e);
    } finally {
      this.loading = false;
    }
    e.preventDefault();
  }
}
