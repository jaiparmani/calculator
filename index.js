function valuePressed(a) {

    var operator = document.getElementById("operatorInput").value
    console.log(a)
    if (operator == " ") {
        let val = document.getElementById("val1").value;
        val = parseInt(val) * 10 + parseInt(a);
        document.getElementById("val1").value = val;
    }
    else {
        let val = document.getElementById("val2").value;
        val = parseInt(val) * 10 + parseInt(a);
        document.getElementById("val2").value = val;

    }
}
function operatorPressed(a) {
    // let val = document.getElementById("operatorInput").value;
    // val=parseInt(val)*10+parseInt(a);
    document.getElementById("operatorInput").value = a;

}
function displayOutput() {
    let exp = `${document.getElementById("val1").value}${document.getElementById("operatorInput").value}${document.getElementById("val2").value}`;
    console.log("RESYLT" + eval(exp));
    document.getElementById("result").value = eval(exp)
}
function CLEAR() {
    document.getElementById("val1").value = 0
    document.getElementById("operatorInput").value = ' '
    document.getElementById("val2").value = 0
    document.getElementById("result").value = ''


}
function darkModeToggle() {
    var body = document.getElementById("body");
    body.classList.toggle("body-light-mode")
    console.log(body)
    var calcTable = document.querySelector("#calcTable")
    calcTable.classList.toggle("table-light-mode")

    var textInput = document.querySelectorAll(".rowOfOutput")
    for (let i in textInput) {
        try {
            textInput[i].classList.toggle("text-light-mode")
            // console.log(textInput[i])
        }
        catch (Exception) {
            // console.log(textInput[i])
            continue;

        }
    }

    var contents = document.querySelectorAll("#button")
    for (let i in contents) {
        // console.log(contents[i] )
        try {
            contents[i].classList.toggle("button-dark-mode")
        }
        catch (Exception) { }
    }

}    