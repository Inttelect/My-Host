function CalculateSum(){
    let firstNumber = document.getElementById("FirstNumber").value;
    let secondNumber = document.getElementById("SecondNumber").value;
    let result = Number(firstNumber) + Number(secondNumber);
    alert("Atbilde ir " + result);
}

function SwitchMode() {
    let element = document.body;
    let button = document.getElementById("DarkModeSwitcher");

    element.classList.toggle("dark-mode");

    if(button.value == "Dark mode"){
        button.value = "Light mode";
    } else {
        button.value = "Dark mode";
    }
  }