const body = document.querySelector('body');

//DOM title with the class wrapper
const div_with_wrapper = document.createElement('div');
div_with_wrapper.classList.add('wrapper');
document.body.appendChild(div_with_wrapper);

//List heading
const unordered_list = document.createElement('ul');
const span_for_list_header = document.createElement('span');
span_for_list_header.textContent = 'DOM-Cardio';
span_for_list_header.classList.add('list_header');

div_with_wrapper.appendChild(unordered_list);
unordered_list.insertAdjacentElement('afterbegin', span_for_list_header);

const stylise_the_header = `
    <style>
        .list_header {
            color: blue;
            text-shadow: 1px 1px grey;
        }
    </style>
`;

const myFragment = document.createRange().createContextualFragment(stylise_the_header);

document.body.appendChild(myFragment);

// const body = document.querySelector('body');

// body.appendChild(stylise_the_header);

//Creating list items
const li_one = document.createElement('li');
li_one.textContent = 'One';
const li_two = document.createElement('li');
li_two.textContent = 'Two';
const li_three = document.createElement('li');
li_three.textContent = 'Three';

unordered_list.appendChild(li_two);
li_two.insertAdjacentElement('beforebegin', li_one);
li_two.insertAdjacentElement('afterend', li_three);

//creating image
const img = document.createElement('img');
const img_size = 250;
img.src = `https://picsum.photos/${img_size}`;
img.classList.add('nice');
img.alt = 'nice picture';

body.appendChild(img);

//creating an html string with a div containing two paragraphs
const div_w_para = `
        <div>
            <p>
            Both phones have industry leading cameras but if you're looking for an exceptional Telephoto lens opt for the Galaxy S21 with its 64-megapixels. However if selfies are more your thing the 32-megapixel camera on the Galaxy S21 FE is what you need.</p>

            <p>
            Both phones have industry leading cameras but if you're looking for an exceptional Telephoto lens opt for the Galaxy S21 with its 64-megapixels. However if selfies are more your thing the 32-megapixel camera on the Galaxy S21 FE is what you need.Both phones have industry leading cameras but if you're looking for an exceptional Telephoto lens opt for the Galaxy S21 with its 64-megapixels. However if selfies are more your thing the 32-megapixel camera on the Galaxy S21 FE is what you need.</p>
        </div>
`;

unordered_list.insertAdjacentHTML('beforebegin', div_w_para);


//adding a class 'warning' to the second paragraph and removing the first paragraph.

div_with_wrapper.children[0].children[1].classList.add('warning')

div_with_wrapper.children[0].children[0].remove();


//creating a function called generatePlayerCard

function generatePlayerCard(name, age, height) {

    const Dog_Sentence = `
        <div class="playerCard">
            <h2>${name} — ${age}</h2>
            <p>Their height is ${height} and ${age} years old. In Dog years this person would be ${age * 10}. That would be a tall dog!</p>
            <button class="delete" type="button">&times; Delete</button>
        </div>
    `;

    return Dog_Sentence
}

// make a new div with a class of cards
const cards_div = document.createElement('div');

cards_div.classList.add('cards');

// make 4 player cards using generatePlayerCard
let cardGenerating = generatePlayerCard('A', 24, 125);
cardGenerating += generatePlayerCard('B', 26, 125);
cardGenerating += generatePlayerCard('I', 28, 125);
cardGenerating += generatePlayerCard('D', 30, 125);

// append those cards to the div
cards_div.innerHTML = cardGenerating;

// put the div into the DOM just before the wrapper element
div_with_wrapper.insertAdjacentElement('beforebegin', cards_div);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const delete_button = document.querySelectorAll('.delete');

//make the delete function
function deleteCard(event) {
    const clickedButton = event.currentTarget;
    clickedButton.parentElement.remove();
}

// loop over them and attach a listener
delete_button.forEach(button => button.addEventListener('click', deleteCard))