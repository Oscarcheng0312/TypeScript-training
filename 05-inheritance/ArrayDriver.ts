import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape: Shape = new Shape(10, 15);
let myCircle: Circle = new Circle(10, 15, 20);
let myRectangle: Rectangle = new Rectangle(10, 15, 25, 30);

let theShape: Shape[] = [];

theShape.push(myShape);
theShape.push(myCircle);
theShape.push(myRectangle);

for (let tempShape of theShape) {
  console.log(tempShape.getInfo());
}
