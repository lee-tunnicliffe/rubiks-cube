import * as _ from 'lodash';

export enum Color {
  YELLOW,
  BLUE,
  RED,
  GREEN,
  ORANGE,
  WHITE
}

export class RubiksCube {
  private readonly solvedCube = [
    _.fill(Array(9), Color.YELLOW),
    _.fill(Array(9), Color.BLUE),
    _.fill(Array(9), Color.RED),
    _.fill(Array(9), Color.GREEN),
    _.fill(Array(9), Color.ORANGE),
    _.fill(Array(9), Color.WHITE)
  ];

  private yellowFace: Array<Color>;
  private blueFace: Array<Color>;
  private redFace: Array<Color>;
  private greenFace: Array<Color>;
  private orangeFace: Array<Color>;
  private whiteFace: Array<Color>;

  constructor(faces?: Array<Array<Color>>) {
    if (!faces) {
      faces = _.clone(this.solvedCube);
    }

    let centerPiece: Color;

    _.forEach(faces, (face) => {
      centerPiece = face[4];
      if (centerPiece === Color.YELLOW) {
        if (this.yellowFace) {
          console.log('Error: two yellow faces');
        }
        this.yellowFace = face;
      } else if (centerPiece === Color.BLUE) {
        if (this.blueFace) {
          console.log('Error: two blue faces');
        }
        this.blueFace = face;
      } else if (centerPiece === Color.RED) {
        if (this.redFace) {
          console.log('Error: two red faces');
        }
        this.redFace = face;
      } else if (centerPiece === Color.GREEN) {
        if (this.greenFace) {
          console.log('Error: two green faces');
        }
        this.greenFace = face;
      } else if (centerPiece === Color.ORANGE) {
        if (this.orangeFace) {
          console.log('Error: two orange faces');
        }
        this.orangeFace = face;
      } else if (centerPiece === Color.WHITE) {
        if (this.whiteFace) {
          console.log('Error: two white faces');
        }
        this.whiteFace = face;
      }
    });
  }

  public getYellowFace() : Array<Color> {
    return this.yellowFace;
  }

  public getBlueFace() : Array<Color> {
    return this.blueFace;
  }

  public getRedFace() : Array<Color> {
    return this.redFace;
  }

  public getGreenFace() : Array<Color> {
    return this.greenFace;
  }

  public getOrangeFace() : Array<Color> {
    return this.orangeFace;
  }

  public getWhiteFace() : Array<Color> {
    return this.whiteFace;
  }
}
