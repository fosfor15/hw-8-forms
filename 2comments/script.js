
let comments = [];
loadComments();

document.getElementById('comment-add').onclick = function(){
   let commentName = document.getElementById('comment-name');
   let commentBody = document.getElementById('comment-body');

   let comment = {
      name : commentName.value,
      body : commentBody.value,
      time : Math.floor(Date.now() / 1000)
   }

   commentName.value = '';
   commentBody.value = '';

   comments.push(comment);
   saveComments();
   showComments();
}

function saveComments(){
   localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments(){
   if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
   showComments();
}

function showComments (){
   let commentField = document.getElementById('comment-field');
   let out = '';
   comments.forEach(function(item){
      out += `<p class="text-date">${timeConverter(item.time)}</p>`;
      out += `<p class="text-name" role="name">${item.name}</p>`;
      out += `<p class="text-comment" role="comment">${item.body}</p> <hr>`;
   });
   commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp){
   let a = new Date(UNIX_timestamp * 1000);
   let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
   let year = a.getFullYear();
   let month = months[a.getMonth()];
   let date = a.getDate();
   let hour = a.getHours();
   let min = a.getMinutes();
   let sec = a.getSeconds();
   let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
   return time;
}

