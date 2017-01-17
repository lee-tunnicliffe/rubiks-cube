import { Component, HostListener } from '@angular/core';
import { RubiksCube, Color } from '../RubiksCube';

@Component({
  selector: 'rubiks-cube',
  templateUrl: './rubiks-cube.component.html',
  styleUrls: ['./rubiks-cube.component.scss']
})
export class RubiksCubeComponent {

  private rubiksCube: RubiksCube;
  private yRotation: number;

  constructor() {
    this.rubiksCube = new RubiksCube();
    this.yRotation = 0;
  }

  @HostListener('window:keydown', ['$event'])
  private keyboardInput(event: any) : void {
    if (event.key === 'ArrowRight') {
      this.yRotation-=2;
    } else if (event.key === 'ArrowLeft') {
      this.yRotation+=2;
    }
  }

  public getClassesForPiece(piece: Color) {
    if (piece === Color.YELLOW) {
      return 'RubiksCube-yellowPiece';
    } else if (piece === Color.BLUE) {
      return 'RubiksCube-bluePiece';
    } else if (piece === Color.RED) {
      return 'RubiksCube-redPiece';
    } else if (piece === Color.GREEN) {
      return 'RubiksCube-greenPiece';
    } else if (piece === Color.ORANGE) {
      return 'RubiksCube-orangePiece';
    } else if (piece === Color.WHITE) {
      return 'RubiksCube-whitePiece';
    }
  }
}
