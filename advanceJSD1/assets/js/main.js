

///////////////////////// task 1

function person(name,age){
    this.name=name
    this.age=age
}

function Employee(id, email, workmood, salary, ismanager){
        this.id = id;
        this.email = email;
        this.workmood = workmood;
        this.salary = salary;
        this.ismanager = ismanager;
}

Employee.prototype.gethealthRate=function(){
    return this.healthrate;
}
Employee.prototype.sethealthRate=function(){
    if(value>=0 && value<=100){
        this.healthrate=value
    }else{
        alert("enter healthrate again");
    }
}

Employee.prototype.getSalary=function(){
    return this.salary;
}

Employee.prototype.SetSalary=function(value){
    if(value>=1000){
        this.salary=value

    }else{
        alert("enter salary again")
    }
}

// make employee  (child) inherite from person (parent)
Employee.prototype=Object.create(person.prototype)

var emp=new Employee(1,"hany@gmail","good",1500,true)


function Office(name){
    this.name=name;
    this.employees=[]
}


Office.prototype.getAllEmployees=function(){

    return this.employees;
}

Office.prototype.getEmployee=function(employeeid){
    var employee=this.employees.find(function(emp){
        return emp.id==employeeid;
    })
    if(employee==false){
        alert('employee not found')
    }
    if(employee.ismanager){
        document.write(this.id,this.name,this.email,this.age)
    }else{
        alert("this not a manager")
    }
}

Office.prototype.hire=function(Employee){
    this.employees.push(Employee);
}

Office.prototype.fire=function(employeeid){
    var index = this.employees.findIndex(function(emp) {
        return emp.id === employeeid;
      });
      if (index === -1) {
        alert('Employee not found.');
      }
      this.employees.splice(index, 1);
}



var office = new Office('My Office');
  
function hireEmployee() {
  var name = document.getElementById('nameInput').value;
  var age = parseInt(document.getElementById('ageInput').value);
  var id = document.getElementById('idInput').value;
  var email = document.getElementById('emailInput').value;
  var workMood = document.getElementById('workMoodInput').value;
  var salary = parseInt(document.getElementById('salaryInput').value);
  var isManager = document.querySelector('input[name="manager"]:checked').value === 'yes';
  
  var employee = new Employee(id, email, workMood, salary, isManager, name, age);
  office.hire(employee);
  
  alert('Employee hired!');
}

function getAllEmployees() {
  var employees = office.getAllEmployees();
  alert(JSON.stringify(employees));
}

function getEmployee() {
  var empId = document.getElementById('empIdInput').value;
  var employee = Office.getEmployee(empId);
  alert(JSON.stringify(employee));
}

function fireEmployee() {
  var empId = document.getElementById('empIdInput').value;
  office.fire(empId);
  
  alert('Employee fired!');
}
















//////////////////// task2/////////////////////

function person(name,age){
    this.name=name;
    this.age=age
}


person.prototype.PrintPerson=function(){
    document.write(this.name,this.age);
}

// student inherite from person
student.prototype=Object.create(person.prototype)

function student(Faculty,Total_mark){
    this.Faculty=Faculty
    this.Total_mark=Total_mark
}

student.prototype.checkSuccess=function(){
    if(this.Total_mark > 60){
        return "success";
    }else{
        return false;
    }
}

student.prototype.checkResult=function(){
    alert(`total mark :  ${this.Total_mark}`);
}

var std=new student("eng :mansoura",100)

console.log(std.checkSuccess());
console.log(std.checkResult());

