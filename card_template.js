 // JavaScript to handle image input
 const imageInput = document.getElementById('image-input');
 const monsterImage = document.getElementById('monster-image');
 const createCardButton = document.getElementById('create-card');
 const cardList = document.getElementById('card-list');

 imageInput.addEventListener('change', (event) => {
     const file = event.target.files[0];
     if (file) {
         const reader = new FileReader();
         reader.onload = (e) => {
             monsterImage.src = e.target.result;
         };
         reader.readAsDataURL(file);
     }
 });

 createCardButton.addEventListener('click', () => {
     // Collect input values
     const name = document.querySelector('.card-header').innerText;
     const imageSrc = monsterImage.src;
     const hp = document.querySelector('#hp span').innerText;
     const ac = document.querySelector('#ac span').innerText;
     const statBlock = document.getElementById('stat-block').value;
     const actionsText = document.getElementById('action-text').value;

     // Create new card element
     const cardItem = document.createElement('li');
     const newCard = document.createElement('div');
     newCard.classList.add('generated-card');

     newCard.innerHTML = `
         <div class="name-header">${name}</div>
         <div class="image">
             <img src="${imageSrc}" alt="Monster Picture">
         </div>
         <div class="card-info-output-area">
            <div class="stats">
                <div class="init-div">IN:<span contenteditable="true">+1</span> </div>
                <div class="hp-div">HP: <span contenteditable="true">${hp}</span>/${hp}</div>
                <div class="ac-div">AC: ${ac}</div>
            </div>
            <div class="description">
                <p>
                <span style="font-weight: bold">Stats ---</span> <span contenteditable="true">${statBlock}</span><br>
                <span style="font-weight: bold">Actions-</span> <span contenteditable="true">${actionsText}</span><br>
                <span style="font-weight: bold">Other --</span> <span contenteditable="true">(status goes here)</span>
                </p>
            </div>
          </div>
     `;

     cardItem.appendChild(newCard);
     cardList.appendChild(cardItem);

     // For Clearing Inputs
     document.querySelector('.card-header').innerText = 'Monster Name';
     monsterImage.src = '';
     imageInput.value = '';
 });
