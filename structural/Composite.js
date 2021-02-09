class Unit {
    getName(start) {}
    getSalary() {}
}

class Employee extends Unit {
    constructor(name, salary) {
        super();
        this.name = name;
        this.salary = salary;
    }

    getName(start) { return start + this.name; }
    getSalary() { return this.salary; }
}

class Group extends Unit {
    constructor(name) {
        super();
        this.name = name;
        this.units = [];
    }

    getName(start) {
        let unitsName = this.units
            .map(item => item.getName(start + "    ") + ",\n")
            .join("");

        return `${start}${this.name}: {\n${unitsName}${start}}`;
    }

    getSalary() {
        let unitsSalary = this.units
            .map(item => item.getSalary())    
            .reduce((prev, cur) => prev + cur);

        return unitsSalary;
    }

    add(unit) {
        this.units.push(unit);
    }
}

let employee1 = new Employee("John", 3000);
let employee2 = new Employee("Bill", 1350);
let employee3 = new Employee("Samantha", 2700);
let employee4 = new Employee("Genry", 15000);
let employee5 = new Employee("Fill", 500);
let employee6 = new Employee("Amanda", 1950);
let employee7 = new Employee("Gavin", 2200);

let frontend = new Group("Frontend");
let backend = new Group("Backend");
let designers = new Group("Designers");
let employees = new Group("Employees");

frontend.add(employee1);
frontend.add(employee2);

backend.add(employee3);
backend.add(employee4);
backend.add(employee5);
backend.add(employee6);

designers.add(employee7);

employees.add(frontend);
employees.add(backend);
employees.add(designers);

console.log(employees.getName(""));
console.log("Total salary: " + employees.getSalary());