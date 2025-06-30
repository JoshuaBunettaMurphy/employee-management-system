class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `${this.name} manages a team of ${this.teamSize} people in the ${this.department} department.`;
    }
}

class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(emp => {
            console.log(emp.describe());
        });
    }
}

let emp1 = new Employee("Dwight Schrute", "Sales");
let mgr1 = new Manager("Michael Scott", "Sales", 15);
let emp2 = new Employee("Bob Vance", "Engineering");
let mgr2 = new Manager("Toby Flenderson", "Human Resources", 8);

let myCompany = new Company();

myCompany.addEmployee(emp1);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr2);

myCompany.listEmployees();

