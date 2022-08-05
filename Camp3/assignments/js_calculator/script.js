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