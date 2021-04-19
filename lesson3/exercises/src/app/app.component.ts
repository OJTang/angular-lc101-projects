import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  takeOffEnabled: boolean = true;

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  handleTakeOff(rocketImage){
    let result = window.confirm("Are you sure the shuttle is ready for takeoff?");
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.takeOffEnabled = false;
    }
  }

  handleLand(rocketImage){
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.message = 'The shuttle has landed.';
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
    this.takeOffEnabled = true;
  }

handleAbort(rocketImage){
  let result = window.confirm('Are you sure you want to abort the mission?');
  if (result){
    this.message = 'Mission Aborted';
    this.color = 'red';
    this.height = 0;
    this.width = 0;
    rocketImage.style.bottom = '0px';
    rocketImage.style.left = '0px';
    this.takeOffEnabled = true;
  }
}

moveRocket(rocketImage, direction){
  if(direction === 'right') {
    let movement = parseInt(rocketImage.style.left) + 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width + 10000;
    console.log(this.width);
  }
  if(direction === 'left') {
    let movement = parseInt(rocketImage.style.left) - 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width - 10000;
    console.log(this.width);
  }
  if(direction === 'up') {
    let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height = this.height + 10000;
  }
  if(direction === 'down') {
    let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height = this.height - 10000;
  }
  this.sideCheck(this.width, this.height);
}

sideCheck(width, height){
  if (width > 420000 || width < 0 || height > 280000 || height < 0) {
    this.color = 'orange';
  } else {
    this.color = 'blue';
  }
}

}
