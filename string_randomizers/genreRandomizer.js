const genres = {
    'sci-fi': ['Dune', 'Foundation', 'Neuromancer', 'Snow Crash', 'Hyperion'],
    'fantasy': ['The Hobbit', 'Harry Potter', 'The Name of the Wind', 'Game of Thrones', 'The Witcher'],
    'mystery': ['The Hound of the Baskervilles', 'Gone Girl', 'Big Little Lies', 'The Girl with the Dragon Tattoo', 'In the Woods'],
    'political': ['1984', 'Animal Farm', 'Brave New World', 'Fahrenheit 451', 'The Handmaid’s Tale'],
    'romance': ['Pride and Prejudice', 'Jane Eyre', 'The Notebook', 'Outlander', 'Me Before You'],
    'self-help': ['Atomic Habits', 'The Power of Habit', 'How to Win Friends and Influence People', 'Think and Grow Rich', 'The Subtle Art of Not Giving a F*ck']
};

function randomizeGenre(genre) {
    const titles = genres[genre];
    // select a random item from the array related to the title-leyword
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    document.getElementById(`${genre}-title`).innerText = randomTitle;
    updateAllGenres();
    enableSaveButton();
}

function randomizeAll() {
    for (const genre in genres) {
        randomizeGenre(genre);
    }
}

// Function to enable the "Save String" button; needs to be above updateAllGenres
function enableSaveButton() {
    const saveButton = document.getElementById('save-button');
    saveButton.disabled = false;
}

function updateAllGenres() {
// tricky way to get the elment by the id, which is the same as the variable we're using to identify the genre
    const combinedTitles = Object.keys(genres).map(genre => {
        const title = document.getElementById(`${genre}-title`).innerText || genres[genre][0];
        return `<span class="${genre}-span">${title}</span>`;
    });
    // get the tail, which is the manual input string to add to the end
    const strTail = document.getElementById("string-tail").innerText;
    let outString = combinedTitles.join(', ')
// could also manually put something here to add, but we're doing it via HTML
    outString += (`<span class="string-tail-span">, ${strTail}</span>`)
    document.getElementById('output-string').innerHTML = outString;
    enableSaveButton();
}

function saveToLocalStorage(string) {
    let savedStrings = JSON.parse(localStorage.getItem('savedStrings')) || [];
    savedStrings.push(string);
    localStorage.setItem('savedStrings', JSON.stringify(savedStrings));
}

function saveString() {
    const currentString = document.getElementById('output-string').innerHTML;
    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = currentString + '<span class="delete-btn" onclick="deleteString(this)">x</span>';
    // Append the list item
    // document.getElementById('saved-strings').appendChild(li);
    var savedStrings = document.getElementById('saved-strings');
    savedStrings.insertBefore(li, savedStrings.firstChild);
    // Save to local storage without the delete button
    saveToLocalStorage(currentString);
    // Disable the save button
    document.getElementById('save-button').disabled = true;
}

function deleteString(deleteButton) {
    const li = deleteButton.parentElement;
    const stringToDelete = li.innerHTML.replace(/<span.*<\/span>/, '').trim(); // Remove the delete button part
    // Extract the full string including spans, before the delete button
    const fullStringToDelete = li.innerHTML.split('<span class="delete-btn"')[0].trim();
    li.remove(); // Remove from DOM, then local storage
    let savedStrings = JSON.parse(localStorage.getItem('savedStrings')) || [];
    savedStrings = savedStrings.filter(string => string.trim() !== fullStringToDelete.trim());
    localStorage.setItem('savedStrings', JSON.stringify(savedStrings));

    // Re-enable the save button
    document.getElementById('save-button').disabled = false;
}

window.onload = function() {
    const savedStrings = JSON.parse(localStorage.getItem('savedStrings')) || [];
    const savedStringsUl = document.getElementById('saved-strings');
    savedStrings.forEach(string => {
        const li = document.createElement('li');
        li.innerHTML = string + '<span class="delete-btn" onclick="deleteString(this)">x</span>';
        savedStringsUl.appendChild(li);
    });
};

function loadNavbar() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'navbarModule.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById('navbarContainer').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
  
window.addEventListener('DOMContentLoaded', loadNavbar);
