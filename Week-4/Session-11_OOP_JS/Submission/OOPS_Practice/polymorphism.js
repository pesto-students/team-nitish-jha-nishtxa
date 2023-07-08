class Shape{
    calculateArea(){
        return radius;
    }
}

class Rectange extends Shape {
    calculateArea(width, height) {
      return width * height;
    }
}

class Triangle extends Shape {
    calculateArea(base, height) {
        return (base * height) / 2;
    }
}

class Circle extends Shape {
    calculateArea(radius) {
        return Math.PI * radius * radius;
    }
}

//creating instance of rectangle, triangle, circle
const rectInstance = new Rectange();
console.log(rectInstance.calculateArea(10, 5));

const triInstance = new Triangle();
console.log(triInstance.calculateArea(3, 6));

const circleInstance = new Circle();
console.log(circleInstance.calculateArea(4));