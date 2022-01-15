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
// Эта фигурная скобка выглядит как завершение функции validate

    alert('wrong RGB numbers, try with 0-255');
    return false;
}

function colorAdd() {
    divField = document.createElement('div');
    divColorField = document.createElement('div');
    
    divField.classList.add('newField');
    divColorField.classList.add('newColorField');

    // Метод appendChild является устаревшим и вместо него необходимо использовать методы append (или другие методы из его группы), подробнее в статье Изменение документа https://learn.javascript.ru/modifying-document#metody-vstavki
    divField.appendChild(divColorField);
    
    divColorField.style.backgroundColor = `rgb(${myForm.R.value}, ${myForm.G.value}, ${myForm.B.value})`;
    myForm.after(divField);
}

colorAdding.addEventListener('click', function() {
    text = `R = ${myForm.R.value}, G = ${myForm.G.value}, B = ${myForm.B.value}`;

    // Текст гораздо проще и быстрее вставить через свойства textContent или innerText
    colorFieldText = document.createTextNode(text);
    divField.appendChild(colorFieldText);
});




