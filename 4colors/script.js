var forms = document.forms;
var myForm = forms.myForm;
const colorAdding = document.querySelector('#ColorAdd');
let divField;
let divColorField;
let text;
let colorFieldText;

function isValidRGBValue(value) {
    return value != "" && Number.isInteger(+value) && value >= 0 && value <= 255;
}

function validate() {
    if (isValidRGBValue(myForm.R.value) && isValidRGBValue(myForm.G.value) && isValidRGBValue(myForm.B.value)) {
    return true;
}
    alert('wrong RGB numbers, try with 0-255');
    return false;
}

function colorAdd() {
    divField = document.createElement('div');
    divColorField = document.createElement('div');
    
    divField.classList.add('newField');
    divColorField.classList.add('newColorField');

    divField.appendChild(divColorField);
    
    divColorField.style.backgroundColor = `rgb(${myForm.R.value}, ${myForm.G.value}, ${myForm.B.value})`;
    myForm.after(divField);
}

colorAdding.addEventListener('click', function() {
    text = `R = ${myForm.R.value}, G = ${myForm.G.value}, B = ${myForm.B.value}`;
    colorFieldText = document.createTextNode(text);
    divField.appendChild(colorFieldText);
});




