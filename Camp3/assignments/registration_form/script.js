function showElement() {
    element = document.querySelector('.space');
    element.style.visibility = 'visible';
}
function formValidation()
{

    var list = [];
    list = document.querySelectorAll('input');
    console.log(list)
    list.forEach(element => {
        console.log(element.value)
        var para = document.getElementById(element.name)
        if(element.value == null || element.value == ""){
            para.style.visibility = "visible";
        }
        else{
            para.style.visibility = "hidden";
        }
    });

}

/*
    var nam = document.querySelector('input[name= "Pname"]').value;
    var mail = document.querySelector('input[name= "email"]').value;
    var phone = document.querySelector('input[name= "phone"]').value;
    var pswd = document.querySelector('input[name= "pswd"]').value;
    var confirm = document.querySelector('input[name= "confirmpswd"]').value;
    */