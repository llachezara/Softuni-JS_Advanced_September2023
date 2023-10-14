class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        const validateInput = function (name, salary, position, department) {
            if (
                name == "" ||
                salary == "" ||
                position == "" ||
                department == ""
            ) {
                throw new Error("Invalid input!");
            }
            if (
                name == null ||
                salary == null ||
                position == null ||
                department == null
            ) {
                throw new Error("Invalid input!");
            }

            if (salary < 0) {
                throw new Error("Invalid input!");
            }
        };

        validateInput(name, salary, position, department);

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = [];
        }

        this.departments[department].push({
            name,
            salary,
            position
        });

        return (`New employee is hired. Name: ${name}. Position: ${position}`);
    }

    bestDepartment() {
        let highestAverageSalary = 0;
        let bestDepartmentName = "";
        const allDepartments = Object.entries(this.departments);

        for (const [currDepartmentName, arrayOfEmployees] of allDepartments) {

            let employeesCount = 0;
            let sumOfAllSalaries = 0;
            for (const employeeObj of arrayOfEmployees) {
                const { salary } = employeeObj;
                sumOfAllSalaries += Number(salary);
                employeesCount++;
            }

            const averageSalaryOfCurrDepartment = sumOfAllSalaries / employeesCount;

            if (averageSalaryOfCurrDepartment > highestAverageSalary) {
                highestAverageSalary = averageSalaryOfCurrDepartment;

                bestDepartmentName = currDepartmentName;
            }
        }
        let result = `Best Department is: ${bestDepartmentName}\nAverage salary: ${highestAverageSalary.toFixed(2)}\n`;

        const arrayOfEmployeesFromBestDepartment = this.departments[bestDepartmentName];
        const sortedArrayOfEmployeesFromBestDepartment = arrayOfEmployeesFromBestDepartment.sort((employeeObj1, employeeObj2) => {
            return employeeObj2.salary - employeeObj1.salary || employeeObj1.name.localeCompare(employeeObj2.name)
        });

        for (const {
            name,
            salary,
            position
        } of sortedArrayOfEmployeesFromBestDepartment) {
            result += `${name} ${salary} ${position}\n`
        }

        return result.trim();
    }
}

let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Human resources"));
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");

// console.log(c.bestDepartment());