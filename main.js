import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    student = [];
    addStudent(obj) {
        this.student.push(obj);
    }
}
const person = new Person();
const programStart = async (person) => {
    do {
        console.log("Welcome!!!!");
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "Whom would you like to interact with?",
            choices: ["Staff", "Student", "Exit"]
        });
        if (ans.select == "Staff") {
            console.log("Hello ,welcome now you can feel free to ask any question");
        }
        else if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                name: "student",
                type: "input",
                message: "Enter the student name you wish to engage with",
            });
            const student = person.student.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                person.addStudent(name);
                console.log(`Hello i am ${name.name}.Nice to meet you`);
                console.log("New student added");
                console.log("Current student list:");
                console.log(person.student);
            }
            else {
                console.log(`Hello i am ${student.name} happy to see you again`);
                console.log("Existing student list");
                console.log(person.student);
            }
        }
        else if (ans.select == "Exit") {
            console.log("Exiting the program");
            process.exit();
        }
    } while (true);
};
programStart(person);
