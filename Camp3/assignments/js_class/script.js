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
    addStudent(){
        while(1){
            this.std_name = prompt("Enter your name: ");
            if(this.std_name.length === 0){
                this.getAlert();
            }
            else{
                this.std_class = prompt("Enter the class: ");
                if(this.std_class.length === 0){
                    this.getAlert();
                }
                else{
                    this.std_age = prompt("Enter the age: ");
                    if(this.std_age.length === 0){
                        this.getAlert();
                    }
                    else{
                        this.std_gender = prompt("Enter the gender: ");
                        if(this.std_gender.length === 0){
                            this.getAlert();
                        }
                        else{
                            this.std_location = prompt("Enter the location: ")
                            if(this.std_location.length === 0){
                            this.getAlert();
                            }
                            else{
                                alert("Entry confirmed!");
                                break;
                            }
                        }
                    }     
                }
            }
        }
    }
    editStudent(){

    }
    deleteStudent(){

    }
    viewStudentDetails(){

    }
    showStudent(){

    }
    getUserDetails(){
        while(1)
        {
            var flag = true;
            var ch = prompt("Enter your choice:\n1.Add Student \n2.Edit Student \n3.Delete Student \n4.View All Student \n5.Show details of a Student");
            alert(ch);
            switch(ch)
            {
                case 1: this.addStudent();
                        break;
                case 2: this.editStudent();
                        break;
                case 3: Student.deleteStudent();
                        break;
                case 4: Student.viewStudentDetails();
                        break;
                case 5: Student.showStudent();
                        break;
                default:alert("Invalid Input!");  
            }
        }
    }
}


Student.getUserDetails()
var p1 = new Student();
p1.addstudent();