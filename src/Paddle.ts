export class Paddle {
  private x: 0;
  private y: 0;
  private width: 0;
  private height: 0;
  private xSpeed: 0;
  private ySpeed: 0;
  private context: CanvasRenderingContext2D = null;

  constructor(options: PaddleOptions) {
    for (let key in options) {
      if (options.hasOwnProperty(key) && typeof this[key] !== 'undefined') {
        this[key] = options[key];
      }
    }
  }

  render(): void {
    this.context.fillStyle = "#0000FF";
    this.context.fillRect(this.x, this.y, this.width, this.height);
  }
}

export interface PaddleOptions {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  xSpeed?: number;
  ySpeed?: number;
  context: CanvasRenderingContext2D;
}