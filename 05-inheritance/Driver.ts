import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircl = new Circle(10, 15, 20);
console.log(myCircl.getInfo());

let myRectangle = new Rectangle(10, 15, 20, 25);
console.log(myRectangle.getInfo());
