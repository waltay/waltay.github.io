const input = document.querySelector('input');
const button = document.querySelector('button');
const ulist = document.querySelector('.list');

button.addEventListener('click', () => {
    let li = document.createElement('li');
    let deletebutton =document.createElement('button');
    li.textContent = input.value;
    deletebutton.textContent = '❌';

    li.append(deletebutton);

    ulist.append(li);

    deletebutton.addEventListener('click', function() {
        ulist.removeChild(li);
        input.focus();    
    });

    input.value = '';
    input.focus();
});