import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://i.imgur.com/2DMpkJ3.gif';
  image3 = 'https://www.nme.com/wp-content/uploads/2019/04/SPINAL_TAP_2_2000-1392x884.jpg';

  constructor() { }

  ngOnInit() {
  }

}