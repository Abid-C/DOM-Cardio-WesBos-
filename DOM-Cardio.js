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
