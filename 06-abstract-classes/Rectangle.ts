import { Shape } from "./Shape";

export class Rectangle extends Shape {
  calculatedArea(): number {
    return this.width * this.height;
  }
  private _width: number;
  private _height: number;

  constructor(theX: number, theY: number, width: number, height: number) {
    super(theX, theY);
    this._width = width;
    this._height = height;
  }

  public get width(): number {
    return this._width;
  }
  public set width(value: number) {
    this._width = value;
  }

  public get height(): number {
    return this._height;
  }
  public set height(value: number) {
    this._height = value;
  }

  getInfo(): string {
    return super.getInfo() + `width = ${this._width}, height = ${this._height}`;
  }
}
