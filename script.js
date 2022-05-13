// Javascript for comments <form> section on the Blog Page



// Query Select the form in the comments section
const formInput = document.querySelector(".comments form");


// // Add an event listener to the form
formInput.addEventListener('submit', (event)=>{

 // Prevent default behaviour 
    event.preventDefault();
    console.log(event);
// Query select the input fields and store values in variables

// Name input
    const nameInput=document.getElementById("name");
    const nameValue=nameInput.value;

// Email input
    const emailInput=document.getElementById("email");
    const emailValue=emailInput.value;

// Comment Input
    const messageInput=document.getElementById('message');
    const messageValue=messageInput.value;

// Check to make sure all inputs have been entered by user
    if(nameValue && emailValue && messageValue != ""){

// Creat elements for each input
        const newDiv=document.createElement("div");
        const nameDisplay=document.createElement("p");
        const emailDisplay=document.createElement("p");
        const messageDisplay=document.createElement("p");
        const userImage=document.createElement("img");

//Assign the textContent of each element to the corresponding input fields
        nameDisplay.textContent=nameValue;
        emailDisplay.textContent=emailValue;
        messageDisplay.textContent=messageValue;
        userImage.src="http://placekitten.com/100/100";
        

// Query select the comments section
        const commentsSection=document.querySelector(".user-comments");
        commentsSection.append(newDiv);
        commentsSection.style.display="flexcolumn";
     
        commentsSection.style.width="60%";
        commentsSection.style.margin="5% 0";


// Append the users information to the html
        newDiv.append(userImage,nameDisplay,emailDisplay,messageDisplay);
        
 
        
// Reset the fields
        nameInput.value='';
        emailInput.value='';
        messageInput.value='';
}

    // If the user doesnt' enter the input fields
    else{
        alert("Kindly fill out the whole form, Thanks!");
    }


});

// SLIDE Out Menu
const menuButton=document.querySelector('.menu-button');
console.log(menuButton);
menuButton.addEventListener('click', ()=>{
    const slideMenu=document.querySelector('.slide-out-menu');
    slideMenu.style.visibility="visible";
});