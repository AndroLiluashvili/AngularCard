import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

btnred : any = "redbtn";
btngun : any = "gunmetalbtn";
btnsilver : any = "silverbtn";

changeRedStyle() {
  this.btnred = "redbtnClick";
  if(true){
     this.btngun = "gunmetalbtn"
     this.btnsilver = "silverbtn"
  }
}

changeGunStyle() {
  this.btngun = "gunmetalbtnClick";
  if(true){
    this.btnred = "redbtn"
    this.btnsilver = "silverbtn"
 }
}

changeSilverStyle() {
  this.btnsilver = "silverbtnClick";
  if(true){
    this.btnred = "redbtn"
    this.btngun = "gunmetalbtn"
 }
}

image:any = "../assets/Headset_Red.jpg";

changeImgRed() {
   this.image = "../assets/Headset_Red.jpg";
}

changeImgSilver() {
  this.image = "../assets/Headset_GunMetal.jpg";
}

changeImgGun() {
  this.image = "../assets/Headset_Silver.jpg";
}







inpVal :number = 0;


onClick() {
  this.inpVal++;
}
  title = 'simpleCard';
}
