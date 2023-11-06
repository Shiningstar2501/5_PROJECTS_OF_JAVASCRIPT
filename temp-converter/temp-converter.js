



function cel_to_fah(){
    var num =parseFloat(document.getElementById("temp_num").value);
    var fahrenheit = (num* 9/5) + 32;
    // console.log(+"CELCIUS");
    document.getElementById("hello").textContent=fahrenheit.toFixed(2)+" FAHRENHEIT";
    
}
function fah_to_cel(){
    var num =parseFloat(document.getElementById("temp_num").value);
    var celsius = (num - 32) * 5/9;
    // console.log(celsius+" CELSIUS");
    document.getElementById("hello").textContent=celsius.toFixed(2)+" CELSIUS";
    // num.textContent = celsius.toFixed(2);
    
}

