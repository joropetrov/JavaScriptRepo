function solve() {

   let sendButton = document.getElementById('send');
   let input = document.getElementById('chat_input');
   let messageField = document.getElementById('chat_messages');

   sendButton.addEventListener('click', (e) => {
      let newEl = document.createElement('div');
      newEl.innerHTML = input.value;
      newEl.classList.add('message', 'my-message');
      messageField.appendChild(newEl);
      input.value = '';
   })
}


