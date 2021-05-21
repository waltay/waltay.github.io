const input = document.querySelector('favchap');
const button = document.querySelector('button');
const ulist = document.querySelector('list');

button.addEventListener('click', () => {
    let li = document.createElement('li');
    let deletebutton =document.createElement('button');
    li.textContent = input.nodeValue;
    deletebutton.textContent = '❌';

    li.append(deletebutton);

    ulist.append(li);

    deletebutton.addEventListener('click', function() {
        ulist.removeChild(li);
        input.focus();    
    });

    input.textContent = '';
    input.focus();
});