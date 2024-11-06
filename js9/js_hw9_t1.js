// t1
class Employee {
    #salary;
  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }

// t2

get firstName() {
    return this._firstName;
  }

set firstName(firstName) {
  if (typeof firstName !== "string") {
    throw new Error("Invalid firstName");
  }
   this._firstName = firstName;
} 

get lastName() {
    return this._lastName;
  }

set lastName(lastName) {
    if (typeof lastName !== "string") {
      throw new Error("Invalid lastName");
    } 
      this._lastName = lastName;
  }

get profession() {
    return this._profession;
  }

set profession(profession) {
    if (typeof profession !== "string") {
      throw new Error("Invalid profession");
    }
    this._profession = profession;
    
  }

get salary() {
    return this.#salary;
  }

set salary(salary) {
    if (typeof salary !== "number") {
        throw new Error ("Invalid salary")
    }  this.#salary = salary;
}

//t3
getFullName() {
    return `${this.firstName} ${this.lastName}`;
}

}

// t4
// const emp1 = new Employee("John", "Doe", "Developer", 3000);
// console.log(emp1.getFullName());
// emp1.salary = 3100;
// console.log(emp1.salary);

// t5

class Company {
    #employees = [];
  constructor(title, phone, address, employees = []) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = employees;
  }

// t6

get title() {
    return this._title;
  }

set title(title) {
    if (typeof title !== "string") {
      throw new Error("Invalid firstName");
    } 
    this._title = title;
  }

get phone() {
    return this._phone;
  }

set phone(phone) {
    if (typeof phone !== "number") {
      throw new Error("Invalid phone");
    }
     this._phone = phone;
  }

get address() {
    return this._address;
  }

set address(address) {
    if (typeof address !== "string") {
      throw new Error("Invalid profession");
    } 
      this._address = address;
  }

// t7

addEmployee(employee) {
  if (!(employee instanceof Employee)) {
      throw new Error("Employee must be an instance of the Employee class")
  }
  this.#employees.push(employee)
}

getEmployees() {
    return this.#employees
}

// t9

getInfo() {
  return `Компания: ${this._title} \n Адрес: ${this._address} \n Количество сотрудников: ${this.#employees.length}`;
}
};

//t8
const company = new Company("Tech Corp", 123-456, "Main Street");
const emp1 = new Employee("John", "Doe", "Developer", 3000);
const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees()); // [Employee, Employee] 
console.log(company.getInfo());


