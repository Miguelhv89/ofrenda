import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public frmHome = new FormGroup({
    name: new FormControl('', Validators.required),
    money: new FormControl('', [Validators.required, Validators.min(0.2)])
  });

  constructor() { }
  
  ngOnInit(): void {
    
  }

  onClick(e:Event){
    if (this.frmHome.valid) {
      console.log(e)
    }
    console.log(this.frmHome)
    e.preventDefault();
  }
}
