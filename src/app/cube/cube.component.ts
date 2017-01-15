import { Component, HostListener, style, state, trigger, animate, transition } from '@angular/core';

@Component({
  selector: 'cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss'],
  animations: [
    trigger('rotate', [
      state('y-90', style({
        transform: 'rotateY(-90deg)'
      })),
      state('y0', style({
        transform: 'rotateY(0deg)'
      })),
      state('y90', style({
        transform: 'rotateY(90deg)'
      })),
      state('y180', style({
        transform: 'rotateY(180deg)'
      })),
      state('y270', style({
        transform: 'rotateY(270deg)'
      })),
      state('y360', style({
        transform: 'rotateY(360deg)'
      })),
      transition('y360 => y0', animate('0s')),
      transition('y-90 => y270', animate('0s')),
      transition('* => *', animate('1s'))
    ])
  ]
})
export class CubeComponent {

  private yRotation: number = 0;
  private rotateState: string;
  private rotateInProgress: boolean = false;

  constructor() {
    this.updateRotateState();
  }

  @HostListener('window:keydown', ['$event'])
  private keyboardInput(event: any) : void {
    if (this.rotateInProgress) {
      return;
    }
    if (event.key === 'ArrowRight') {
      this.rotateRight();
    } else if (event.key === 'ArrowLeft') {
      this.rotateLeft();
    }
  }

  private updateRotateState() {
    this.rotateState = 'y' + this.yRotation;
  }

  private rotateRight() {
    this.yRotation += 90;
    this.updateRotateState();
  }

  private rotateLeft() {
    this.yRotation -= 90;
    this.updateRotateState();
  }

  protected rotateStart() {
    this.rotateInProgress = true;
  }

  protected rotateDone($event) {
    if ($event.toState === 'y360') {
      this.yRotation = 0;
      this.updateRotateState();
    } else if ($event.toState === 'y-90') {
      this.yRotation = 270;
      this.updateRotateState();
    }
    this.rotateInProgress = false;
  }
}
