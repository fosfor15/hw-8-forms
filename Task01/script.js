
document.getElementById('button').addEventListener('click', function() {
    const date = new Date();

    const cloneBlock = document.getElementsByClassName('table')[0].cloneNode(true);
    
    const dateNow = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
    const myBlock = cloneBlock.childNodes[1].childNodes[0];
    const newMessage = document.myForm.message.value;
    const newName = document.myForm.name.value;

    cloneBlock.getElementsByClassName('name')[0].innerText =  newName;
    cloneBlock.getElementsByClassName('message')[0].innerText =  newMessage;
    const node = document.createElement('span');
    
    document.myForm.insertBefore(cloneBlock, document.getElementsByTagName('h5')[0]);
    
    myBlock.childNodes[1].appendChild(node, myBlock);
    myBlock.getElementsByTagName('span')[0].innerText = dateNow;
    myBlock.getElementsByTagName('span')[0].classList.add('date-time');
});
