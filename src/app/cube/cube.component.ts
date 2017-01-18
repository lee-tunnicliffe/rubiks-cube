import { Component, HostListener, style, state, trigger, animate, transition, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss'],
  animations: [
    trigger('rotate', [
      state('noRotation', style({})),
      state('y-90', style({
        transform: 'rotateY(-90deg)'
      })),
      state('y90', style({
        transform: 'rotateY(90deg)'
      })),
      state('x-90', style({
        transform: 'rotateX(-90deg)'
      })),
      state('x90', style({
        transform: 'rotateX(90deg)'
      })),
      transition('* => noRotation', animate('0s')),
      transition('* => *', animate('1s'))
    ])
  ]
})
export class CubeComponent {

  @Output('cubeRotated')
  cubeRotated = new EventEmitter<Array<number>>();

  private xRotation: number = 0;
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
    } else if (event.key === 'ArrowUp') {
      this.rotateUp();
    } else if (event.key === 'ArrowDown') {
      this.rotateDown();
    }
  }

  private updateRotateState() {
    if (this.xRotation !== 0) {
      this.rotateState = 'x' + this.xRotation;
    } else if (this.yRotation !== 0) {
      this.rotateState = 'y' + this.yRotation;
    } else {
      this.rotateState = 'noRotation';
    }
  }

  private rotateUp() {
    this.xRotation -= 90;
    this.updateRotateState();
  }

  private rotateDown() {
    this.xRotation += 90;
    this.updateRotateState();
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
    if ($event.toState !== 'noRotation') {
      this.cubeRotated.next([this.xRotation / 90, this.yRotation / 90]);
      this.xRotation = this.yRotation = 0;
      this.updateRotateState();
    }
    this.rotateInProgress = false;
  }
}
