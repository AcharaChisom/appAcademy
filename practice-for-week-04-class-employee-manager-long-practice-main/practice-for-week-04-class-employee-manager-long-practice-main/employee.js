class Employee {
    constructor(name, salary, title, manager) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        
        if (manager) {
            this.manager = manager;
            this.manager.addEmployee(this);
        } else {
            this.manager = null;
        }
    }

    calculateBonus(percent) {
        return this.salary * percent;
    }
 
}

module.exports = Employee;