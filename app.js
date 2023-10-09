const timeSpend = document.querySelector('div');

// Create a label element
const label = document.createElement('label');
label.innerText = "Date of Birth: ";
label.setAttribute('for', 'dob'); 
label.classList.add('my-label-class');

// Create an input element for date of birth
const input = document.createElement('input');
input.setAttribute('type', 'date');
input.setAttribute('id', 'dob'); // Associate the input field with the label
input.classList.add('my-input');

const enterBtn = document.createElement('button');
enterBtn.textContent = "Enter";
enterBtn.classList.add('my-btn');
enterBtn.addEventListener('click', () => {
    const selectedDate = input.value; // Get the selected date value
    console.log(selectedDate);
    timeSpend.removeChild(label)
    timeSpend.removeChild(input)
    timeSpend.removeChild(enterBtn)
    displayTimeSpent(selectedDate)

});

function displayTimeSpent(date){
    const DateOfBirth = new Date(date);
    // console.log(DateOfBirth)
    const currentDate = new Date();
    const timeDifference = currentDate - DateOfBirth ;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const makeDate = document.createElement('p')
    makeDate.textContent= daysDifference
    timeSpend.appendChild(makeDate)
    console.log(`There are ${daysDifference} days between today and ${date}.`);
}



// Append the input and button elements to a container (e.g., a div)
const container = document.createElement('div');
container.appendChild(input);
container.appendChild(enterBtn);

// Append the container to the document body or another desired location
document.body.appendChild(container);


// Create a line break for better spacing
const lineBreak = document.createElement('br');

// Append the label, input, and line break to the 'timeSpend' div
timeSpend.appendChild(label);
timeSpend.appendChild(input);

timeSpend.appendChild(lineBreak);
timeSpend.appendChild(enterBtn)

