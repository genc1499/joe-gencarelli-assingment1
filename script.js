// SLIDE Out Menu---------------------------------------------------------------------

// Query the hamburger menu button
const menuButton=document.querySelector('.menu-button');

// Query the exit button in the slide out nav
const exitButton=document.querySelector('.exit-button');
        
// Add an event listener to the hamburger menu button
menuButton.addEventListener('click', (event)=>{
    // prevent default
    event.preventDefault();
    // Query the slide out menu div
    const slideMenu=document.querySelector('.slide-out-menu');
    
    // Add a transition to the menu item and change it's width
    slideMenu.style.transition="width .3s ease-in";
    slideMenu.style.width="50vw";

        // Add an event listener to the exit button to close the menu
        exitButton.addEventListener('click', ()=>{
        
        // Set width of slide-out to 0
            slideMenu.style.width="0";
            });
    });


  // IMAGE CAROUSAL-------------------------------------------------------------------

// Decalre an array with image sources
const images = [
    {
        source:"./assets/gallery-image-1.jpg",
        altText:"Front view of chic bar",
    },
    {
        source:"./assets/gallery-image-2.jpg",
        altText:"Close up of a hamburger and fries",

    },
    {
        source:"./assets/gallery-image-3.jpg",
        altText:"Nicely-garnished-cocktail"

    }
    
];
        
// Query the image buttom
const buttonImg=document.querySelector(".image-gallery button");

// decalre a count = 1, which will be the index for the images object 
let x=1;
console.log("Hell o there");

// Declare varibales for the image source and alt text
let imageSrc;
let imageAlt;

// Add an event Listener to the buttton
buttonImg.addEventListener('click', (event)=>{
// Prevent the default
    event.preventDefault();
    const gallery=document.querySelector(".image-gallery ul");
    // Check if x is less than the array length
    
    if(x<images.length){
        console.log(x);
        // the imageSrc/altText varibales will hold the source based on x - the position in the arrat
        imageSrc=images[x].source;
        imageAlt=images[x].altText;

        // Query the image gallery ul
        // Set the innerHTML to that pf that img at source X
        gallery.innerHTML=(`<li><img src=${imageSrc} alt=${imageAlt}></li>`);

        // Add one to the count to display the next image on click
        x+=1;
    }
    else {
        imageSrc=images[0].source;
        imageAlt=images[0].altText;
        gallery.innerHTML=(`<li><img src=${imageSrc} alt=${imageAlt}></li>`);
        x=1;
    }
            
});

//COMMNENTS SECTION ON BLOG PAGE------------------------------------------------------
// Query Select the form in the comments section
const formInput = document.querySelector(".comments-container form");


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

