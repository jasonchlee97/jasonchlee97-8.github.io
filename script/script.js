function addValue() {
    // get the operands value
    var num1 = document.getElementById('input_a').value;
    var num2 = document.getElementById('input_b').value;
    // parse to integer. You can use: parseInt(input, 10);
    var val1 = parseInt(num1, 10);
    var val2 = parseInt(num2, 10);
    // perform operation
    var results = val1 + val2;
    // creating the text output
    text = val1 + ' + ' + val2 + ' = ' + results;
    // (if you want to check) print out in console
    console.log(results);
    // change the text area
    document.mycalculator.output.value = text;
}


function mulValue() {
    // get the operands value
    var num1 = document.getElementById('input_a').value;
    var num2 = document.getElementById('input_b').value;
    // parse to integer. You can use: parseInt(input, 10);
    var val1 = parseInt(num1, 10);
    var val2 = parseInt(num2, 10);
    // perform operation
    var results = val1 * val2;
    // creating the text output
    text = val1 + ' * ' + val2 + ' = ' + results;
    // (if you want to check) print out in console
    console.log(results);
    // change the text area
    document.mycalculator.output.value = text;
}

function divValue() {
    // get the operands value
    var num1 = document.getElementById('input_a').value;
    var num2 = document.getElementById('input_b').value;
    // parse to integer. You can use: parseInt(input, 10);
    var val1 = parseInt(num1, 10);
    var val2 = parseInt(num2, 10);
    // perform operation
    var results = val1 / val2;
    // creating the text output
    text = val1 + ' / ' + val2 + ' = ' + results;
    // (if you want to check) print out in console
    console.log(results);
    // change the text area
    document.mycalculator.output.value = text;
}
