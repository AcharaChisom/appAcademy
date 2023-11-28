const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager) {
        super(name, salary, title, manager);
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    _totalSubSalary() {
        let total = 0;
        this.employees.forEach(employee => {
            if (employee instanceof Manager) {
                total += employee.salary + employee._totalSubSalary();
            } else {
                total += employee.salary;
            }
        });
        return total;
    }

    calculateBonus(percent) {
        return (this.salary + this._totalSubSalary()) * percent;
    }
}

module.exports = Manager;