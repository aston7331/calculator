let result = document.getElementById("inputext");
let val = "";
let error = false;
function calculate(input) {
    if (error == true) {
        result.value = '';
        error = false;
    }
    if (input == 'clear' ) {
        document.getElementById("inputext").value = '';

    }else if(input =='del'){
        let length = result.value.length;
        result.value.substr(0, length-1)
    } 
    else {
        result.value += input;
    }
}
function results() {
    try {
        if (error == true) {
            result.value = '';
            error = false;
        }
        if (result.value != '') {
            let resultData = eval(result.value);
            document.getElementById("inputext").value = resultData;
            // alert(result.value)
            // console.log(resultData);
        }
    }
    catch (err) {
        error = true;
        document.getElementById("inputext").value = "error";
        // result.value='';
    }
}



