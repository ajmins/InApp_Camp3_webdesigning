function insert(input)
{
    document.getElementById("display").value =  document.getElementById("display").value + input;
}
function equal()
{
    var expression =  document.getElementById("display").value;
    if(expression)
    {
        document.getElementById("display").value = eval(expression)
    }
}
function clearScreen()
{
    var expression =  document.getElementById("display").value;
    document.getElementById("display").value = ''
}


/*

html
//one
            <tr>
                <td><input class="btn" id="clear" type="button" value="C" onclick="clearScreen()"></td>

function insert(input)
{
    document.getElementById("display").value =  document.getElementById("display").value + input;
}
function equal()
{
    var expression =  document.getElementById("display").value;
    if(expression)
    {
        document.getElementById("display").value = eval(expression)
    }
}


//try
//<button id="btn1" class="btn">Justbutton</button> 
var handleClick = function(event){
    //getting the textbox value and printing it
    alert(document.getElementById("mytxtbox").value);
    //assigning a new vlaue to the textbox
    document.getElementById("mytxtbox").value = "The new value";

}
var mybtn =  document.getElementById("btn1");
mybtn.addEventListener('click',handleClick);


//two

var clearScreen = function (event)
{
    var expression =  document.getElementById("display").value;
    document.getElementById("display").value = ''
}
var mybtn =  document.getElementById("clear");
mybtn.addEventListener('click',clearScreen);



//try2
var clearScreen = function(event){
    var expression =  document.getElementById("display").value;
    document.getElementById("display").value = ''

}
var f1 =  document.getElementById("clearV");
f1.addEventListener('click',clearScreen);





*/