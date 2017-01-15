import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent {

  private cubeStyle: Object;
  private yRotation: number = 0;

  constructor() { }

  @HostListener('window:keydown', ['$event'])
  private keyboardInput(event: any) : void {
    if (event.key === 'ArrowRight') {
      this.rotateRight();
    } else if (event.key === 'ArrowLeft') {
      this.rotateLeft();
    }
  }

  private updateCubeStyle() {
    this.cubeStyle = {
      transform: 'rotateY(' + this.yRotation + 'deg)'
    };
  }

  private rotateRight() {
    this.yRotation += 90;
    this.updateCubeStyle();
  }

  private rotateLeft() {
    this.yRotation -= 90;
    this.updateCubeStyle();
  }
}
