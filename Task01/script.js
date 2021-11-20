
document.getElementById('button').addEventListener('click', function() {
    const date = new Date();

    const cloneBlock = document.getElementsByClassName('table')[0].cloneNode(true);
    
    const dateNow = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
    // Вывести время и дату можно через методы toLocaleTimeString – https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString , и toLocaleDateString – https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

    // Не информативное имя для сущности важного узла-элемента
    const myBlock = cloneBlock.childNodes[1].childNodes[0];

    const newMessage = document.myForm.message.value;
    const newName = document.myForm.name.value;

    cloneBlock.getElementsByClassName('name')[0].innerText =  newName;
    cloneBlock.getElementsByClassName('message')[0].innerText =  newMessage;

    // Не информативное имя для сущности важного узла-элемента
    const node = document.createElement('span');
    
    // Метод insertBefore является устаревшим методом. Вместо него необходимо использовать метод before и другие из этого списка https://learn.javascript.ru/modifying-document#metody-vstavki
    document.myForm.insertBefore(cloneBlock, document.getElementsByTagName('h5')[0]);
    
    // То же касается метода appendChild
    // В этом методе вы вставляете относительно блока myBlock тот же блок myBlock, это уже путаница
    myBlock.childNodes[1].appendChild(node, myBlock);

    // Здесь вы ищите span, доступ к которому находится в сущности node
    myBlock.getElementsByTagName('span')[0].innerText = dateNow;
    myBlock.getElementsByTagName('span')[0].classList.add('date-time');


    // Всё, что здесь стоило сделать, это скопировать блок с сообщением выше, затем в копии найти необходимые узлы-элементы, затем записать в них новые значения полей формы и времени-даты, а затем вставить этот скопированный и изменённый блок через метод append, вызыванный на общем контейнере всех сообщений.

});
