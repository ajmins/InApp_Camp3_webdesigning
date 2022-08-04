class Student {
    constructor(std_name, std_class, std_age, std_gender, std_location) {
        this.std_name = std_name,
        this.std_class = std_class,
        this.std_age = std_age,
        this.std_gender = std_gender,
        this.std_location = std_location
    }
    getAlert()
    {
        
        alert("Empty Values Entered!")
    }
    addstudent(){
        this.std_name = prompt("Enter your name: ");
        if(this.std_name.length === 0){
            this.getAlert();
        }
        this.std_class = prompt("Enter the class: ");
        if(this.std_name.length === 0){
            this.getAlert();
        }
        this.std_age = prompt("Enter the age: ");
        if(this.std_name.length === 0){
            this.getAlert();
        }
        this.std_gender = prompt("Enter the gender: ");

        this.std_location = prompt("Enter the location: ")
    }
    editStudent(){

    }
    deleteStudent(){

    }
    showStudent(){

    }
}

var p1 = new Student();
p1.addstudent();