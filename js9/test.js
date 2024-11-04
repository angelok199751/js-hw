
class Employee {
    #salary; // Приватное поле salary

    constructor(firstName, lastName, profession, salary) {
        this.firstName = firstName; // Используем сеттер
        this.lastName = lastName; // Используем сеттер
        this.profession = profession; // Используем сеттер
        this.#salary = salary; // Прямое присвоение в приватное поле
    }

    // Геттер для firstName
    get firstName() {
        return this._firstName;
    }

    // Сеттер для firstName
    set firstName(value) {
        if (typeof value !== "string") {
            throw new Error("Invalid firstName");
        }
        this._firstName = value;
    }

    // Геттер для lastName
    get lastName() {
        return this._lastName;
    }

    // Сеттер для lastName
    set lastName(value) {
        if (typeof value !== "string") {
            throw new Error("Invalid lastName");
        }
        this._lastName = value;
    }

    // Геттер для profession
    get profession() {
        return this._profession;
    }

    // Сеттер для profession
    set profession(value) {
        if (typeof value !== "string") {
            throw new Error("Invalid profession");
        }
        this._profession = value;
    }

    // Геттер для salary
    get salary() {
        return this.#salary;
    }

    // Сеттер для salary
    set salary(value) {
        if (typeof value !== "number") {
            throw new Error("Invalid salary");
        }
        this.#salary = value;
    }

    // Метод для получения полного имени
    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}

// Класс Company
class Company {
    #employees = []; // Приватное поле employees

    constructor(title, phone, address) {
        this.title = title; // Используем сеттер
        this.phone = phone; // Используем сеттер
        this.address = address; // Используем сеттер
    }

    // Геттер для title
    get title() {
        return this._title;
    }

    // Сеттер для title
    set title(value) {
        if (typeof value !== "string") {
            throw new Error("Invalid title");
        }
        this._title = value;
    }

    // Геттер для phone
    get phone() {
        return this._phone;
    }

    // Сеттер для phone
    set phone(value) {
        if (typeof value !== "string") { // Изменил на 'string' для телефонов
            throw new Error("Invalid phone");
        }
        this._phone = value;
    }

    // Геттер для address
    get address() {
        return this._address;
    }

    // Сеттер для address
    set address(value) {
        if (typeof value !== "string") {
            throw new Error("Invalid address");
        }
        this._address = value;
    }

    // Метод для добавления сотрудника
    addEmployee(employee) {
        if (!(employee instanceof Employee)) {
            throw new Error("Invalid Employee");
        }
        this.#employees.push(employee);
    }

    // Метод для получения сотрудников
    getEmployees() {
        return this.#employees;
    }

    // Метод для получения информации о компании
    getInfo() {
        return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
    }
}

// Проверка
const emp1 = new Employee("John", "Doe", "Developer", 3000);
console.log(emp1.firstName); // "John"
emp1.salary = 3100;
console.log(emp1.salary); // 3100
console.log(emp1.getFullName()); // "John Doe"

const company = new Company("Tech Corp", "123-456", "Main Street");
const emp2 = new Employee("Barbara", "Johnson", "QA", 2500);
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees()); // [Employee, Employee]
console.log(company.getInfo()); // Информация о компании
