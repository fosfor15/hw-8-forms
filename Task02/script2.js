
document.getElementById('button').addEventListener('click', function() {
    let result = 0;

    if (myForm.question1.elements[0].checked) {
        result++;
    }
    if (myForm.question2.elements[0].checked) {
        result++;
    }
    if (myForm.question3.elements[1].checked) {
        result++;
    }
    
    let node = document.createElement('h4');
    document.myForm.appendChild(node);
    document.getElementsByTagName('h4')[0].innerText = 'Result: ' + result + ' correct answers to 3 questions!'
    
});
