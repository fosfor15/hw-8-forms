
function check() {

    // Ключевое слово var является устаревшим и должно быть заменено на слова let или const
    var q1 = document.questions.q1.value;
    var q2 = document.questions.q2.value;
    var q3 = document.questions.q3.value;
    var count = 0;

    if (q1 == "b") {
        count++;
    }

    if (q2 == 'a') {
        count++;
    }

    if (q3 == 'c') {
        count++;
    }

    // Почему бы сразу не внести в HTML-разметку необходимый элемент?
    let div = document.createElement('div');
    div.id = "result";

    div.innerHTML = `Your results is ${count} from 3 questions`;
    document.body.after(div);

}
