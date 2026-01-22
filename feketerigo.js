

function agy(){
    document.getElementById("agy").innerHTML = document.getElementById("matekrange").value;
}


var helyes = 0;
function sub(){
    if (document.getElementById("anyad").value.trim().toLowerCase() === "anyad")
    {
        document.getElementById("1").innerHTML = "Helyes!";
        helyes += 1;
    }
    else
    {
        document.getElementById("1").innerHTML = "Rossz válasz!"
    }
}