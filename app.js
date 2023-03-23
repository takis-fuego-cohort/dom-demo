// // EVENT LISTENERS
// // 1. Grab the element that will listen for the event.
// const buttonToClick = document.querySelector("#button-to-click")
// // 2. Write the function you want to happen in response to the event.
// function changeHeadingColor(){
//     const h1 = document.querySelector('h1');
//     h1.style.color = "purple";
// }
// // 3. Combine the two above steps with an EVENT LISTENER
// buttonToClick.addEventListener("click", changeHeadingColor)

// Select the button
const btn = document.querySelector('button');
btn.addEventListener('click', addNewListItem);
function addNewListItem(){
    // 1. Grab the text from the input
    const inputField = document.querySelector('input')
    const inputFieldValue = inputField.value;
    // 2. Create a new list item with that text
    const newListItem = document.createElement('li')
    newListItem.innerText = inputFieldValue;
    // 3. Add that new list item to the bottom of the list
        // a. Grab the unordered list element!
        const ul = document.querySelector('ul');
        // b. Use the magic method of the unordered list that adds a new element to it
        ul.append(newListItem)
    // 4. Clear the input
    inputField.value = "";
}

const commentList = document.querySelector('ul')

function crossOutListItem(evt){
    evt.target.classList.toggle("crossed-out")
}

commentList.addEventListener("click", crossOutListItem)
