//DOM title with the class wrapper
const div_with_wrapper = document.createElement('div');
div_with_wrapper.classList.add('wrapper');
document.body.appendChild(div_with_wrapper);

//List heading
const unordered_list = document.createElement('ul');
unordered_list.textContent = 'DOM-Cardio';
unordered_list.classList.add('list_header');

div_with_wrapper.appendChild(unordered_list);

//const stylise_the_header = `
//     <style>
//         .list_header {
//             color: blue;
//         }
//     </style>
// `;

// const body = document.querySelector('body');

// body.insertAdjacentElement('afterend', stylise_the_header);

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
