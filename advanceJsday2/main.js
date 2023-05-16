

// // task 1

class NumericalSequence {

    constructor(start, end, step) 
    {
        this.start=start
        this.end=end
        this.step=step
        // send this parameter to this function to initialize object of  list  
      this._list = this._madeList(start, end, step);


    }
  
    _madeList(start, end, step) {
      let list = [];
      for (let i = start; i <= end; i += step) {
        list.push(i);
      }
      //return to this._list in constructor
      return list;
    }
  //property to return my list
    get list() {
      return this._list;
    }
  //this to add value to last index of list 
    append(value) {
      let lastValue = this._list[this._list.length - 1];
        this._list.push(value);
    }
//   add to first element of list
    prepend(value) {
      let firstValue = this._list[0];
      value === firstValue - (this._list[1] - this._list[0])
      this._list.unshift(value);

    }
  //to remove first element of list
    dequeue() {
      return this._list.shift();
    }
//   remove last index
    pop() {
      return this._list.pop();
    }
  //use splice to remove one index from list [one step]
    delete(index) {
      this._list.splice(index, 1);
    }
  //to display list
    display() {
      console.log(this._list);
    }
  }

//make object of list and send my parameters
  let sequence = new NumericalSequence(1, 10, 2);


  sequence.append(11);
  sequence.prepend(0); // prepends 0 to the sequence false
  sequence.dequeue(); // removes the first value (0)
  sequence.pop(); // removes the last value (11)
  sequence.delete(2); // removes the value at index 2 (5)
  sequence.display(); // displays the current sequence




// // task 2


// ShapeName class

class ShapeName {
  constructor() {
    this.type = "Rectangule";
  }
}

// Rectangle class
class Rectangle extends ShapeName {
  //make static to be global for each object i create
  static count = 0;

  constructor(width, height) {
      // to inherite from father
    super();
    this.width = width;
    this.height = height;
  //   foeach object create by this class make cout ++
    Rectangle.count++;
  }

  // Area method for Rectangle
  getArea() {
    return this.width * this.height;
  }

  // Perimeter method for Rectangle
  getPerimeter() {
    return 2 * (this.width + this.height);
  }

  // Override toString method
  toString() {
    return `ShapeName: ${this.type}, Width: ${this.width}, Height: ${this.height}, Area: ${this.getArea()},Perimeter :${this.getPerimeter()}`;
  }
}

// MySquare class
//x is one side to square
class MySquare extends Rectangle {
  constructor(x) {
      //i'am here i inherite length and width but in square it is equal so i make only x
    super(x, x);
    this.type = "square";
  }
}

let rect = new Rectangle(1, 2);
let square = new MySquare(2);

console.log(rect.toString()); 
console.log(square.toString());


//to show count it ic static so i access it by class datatype
console.log(Rectangle.count);


//   task3

// Book class

class Book {
    constructor(title, numofChapters, author, numofPages, publisher, numofCopies) {
      this.title = title;
      this.numofChapters = numofChapters;
      this.author = author;
      this.numofPages = numofPages;
      this.publisher = publisher;
      this.numofCopies = numofCopies;
    }
  }
  
  // Box class
  class Box {
    constructor(height, width, length, material) {
      this.height = height;
      this.width = width;
      this.length = length;
      this.numOfBooks = 0;
      this.volume = height * width * length;
      this.material = material;
      this.content = [];
    }
  
    // Method to add a book to the box
    addBook(book) {
      this.content.push(book);
      this.numOfBooks++;
    }
  
    // Method to remove a book from the box
    removeBook(nameOrType) {
      for (let i = 0; i < this.content.length; i++) {
        let book = this.content[i];
        if (book.title === nameOrType || book.publisher === nameOrType) {
          this.content.splice(i, 1);
          this.numOfBooks--;
          break;
        }
      }
    }
  
    // Override toString method
    toString() {
      let bookList = "";
      for (let i = 0; i < this.content.length; i++) {
        let book = this.content[i];
        bookList += `\n${i+1}. Title: ${book.title}, Author: ${book.author}, Publisher: ${book.publisher}`;
      }
      return `Dimensions: ${this.height} x ${this.width} x ${this.length}, Material: ${this.material}, Volume: ${this.volume}, Number of Books: ${this.numOfBooks}, Books stored in the box:${bookList}`;
    }
  
    // Override valueOf method to count total books in multiple boxes
    valueOf() {
      let totalBooks = this.numOfBooks;
      for (let i = 1; i < arguments.length; i++) {
        totalBooks += arguments[i].numOfBooks;
      }
      return totalBooks;
    }
  }
  
  // Test code
  let book1 = new Book("The Great Gatsby", 9, "F. Scott Fitzgerald", 180, "Scribner", 100);
  let book2 = new Book("To Kill a Mockingbird", 31, "Harper Lee", 281, "J. B. Lippincott & Co.", 75);
  let book3 = new Book("The Catcher in the Rye", 26, "J. D. Salinger", 224, "Little, Brown and Company", 60);
  
  let box1 = new Box(10, 8, 12, "cardboard");
  box1.addBook(book1);
  box1.addBook(book2);
  console.log(box1.toString()); // Dimensions: 10 x 8 x 12, Material: cardboard, Volume: 960, Number of Books: 2, Books stored in the box:
                                  // 1. Title: The Great Gatsby, Author: F. Scott Fitzgerald, Publisher: Scribner
                                  // 2. Title: To Kill a Mockingbird, Author: Harper Lee, Publisher: J. B. Lippincott & Co.
  
  let box2 = new Box(8, 6, 10, "plastic");
  box2.addBook(book3);
  console.log(box2.toString()); // Dimensions: 8 x 6 x 10, Material: plastic, Volume: 480, Number of Books: 1, Books stored in the box:
                                  // 1. Title: The Catcher in the Rye, Author: J. D. Salinger, Publisher: Little, Brown and Company
  
  let totalBooks = box1.valueOf(box2);
  console.log(totalBooks); // 3
  
  box1.removeBook("Scribner");
  console.log(box1.toString());

//task 4

class Point3D
{
    constructor(x1, y1, z1)
    {
        this.x=x1
        this.y=y1
        this.z=z1
    }

    print3DPoint()
    {
        console.log(`3DPoint: X = ${this.x} , Y = ${this.y}, Z = ${this.z}`);
    }

    calculateDistance(p2) 
    {

        
        var a=p2.x-p1.x
        var b=p2.y-p1.y
        var c=p2.z-p1.z
        
        var result=Math.sqrt( a*a + b*b + c*c )

        return result;
    }
}

var p1=new Point3D(1,2,3)
var p2=new Point3D(2,4,6)

console.log(p1.print3DPoint());

console.log(p1.calculateDistance(p2));



// task 5


class  Course
{
    constructor(name,grade)
    {
        this.name=name
        this.grade=grade
    }
}

class student
{
    constructor(id,name)
    {
        this.id=id
        this.name=name
        this.coureses=[];
    }

    displayAlLCourses()
    {
    
        return this.coureses;
    } 
    computeAllGrades()
    {
        var totalgrade=0
        for (let i = 0; i < this.coureses.length; i++) {
            
            totalgrade +=this.coureses[i].grade 
        }

        return totalgrade
    } 
}
var couse1=new Course("php", 75)
var couse2=new Course("js", 85)


var student1=new student(1,"ahmed")
var student2=new student(2,"hany")

student1.coureses.push(couse1)
student1.coureses.push(couse2)

console.log(student1.displayAlLCourses());

console.log(student1.computeAllGrades());
