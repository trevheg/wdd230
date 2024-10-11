const favChap = document.querySelector('#favchap');
const button = document.querySelector('button');
const theList = document.querySelector('#list');
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (favChap.value === '') { // run if input is empty
        favChap.focus();
    }
    else { // run if input is not empty
        displayList(favChap.value); 
        chaptersArray.push(favChap.value);
        setChapterList();
        favChap.value = '';
        favChap.focus();   
    }
});

function displayList (item) {
    let newList = document.createElement('li');
    let newButton = document.createElement('button');
    newList.textContent = item;
    newButton.textContent = "❌";
    newButton.classList.add('delete');
    newList.appendChild(newButton);
    theList.appendChild(newList);
    favChap.focus();
    newButton.addEventListener("click", () => {
        theList.removeChild(newList);
        deleteChapter(newList.textContent);
        favChap.focus();
    })
    // newList.textContent = favChap.value;
    // favChap.value = '';
}
    
function setChapterList() {
    localStorage.setItem('myScriptureList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myScriptureList'))
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}