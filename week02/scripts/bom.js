const favChap = document.querySelector('#favchap');
const button = document.querySelector('button');
const theList = document.querySelector('#list');

button.addEventListener('click', () => {
    if (favChap.value === '') {
        favChap.focus();
    }
    else {
        const newList = document.createElement('li');
        let newButton = document.createElement('button');
        newButton.textContent = "❌";
        newButton.addEventListener("click", () => {
            theList.removeChild(newList);
            favChap.focus();
        })

        newList.textContent = favChap.value;
        newList.appendChild(newButton);
        theList.appendChild(newList);
        favChap.focus();
        favChap.value = '';
    }
});

    
