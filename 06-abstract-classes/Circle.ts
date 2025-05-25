import { Shape } from "./Shape";

export class Circle extends Shape {
  private _radius: number;
  calculatedArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  constructor(theX: number, theY: number, _radius: number) {
    super(theX, theY);
    this._radius = _radius;
  }
  public get radius(): number {
    return this._radius;
  }
  public set radius(value: number) {
    this._radius = value;
  }

  getInfo(): string {
    return super.getInfo() + `, radius = ${this._radius}`;
  }
}
