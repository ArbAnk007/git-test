let container = document.body.querySelector(".container");
let addedContainer = document.body.querySelector(".added-container")
let htmlContent = `<div class="container">
    <h1>This is version 3.0</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio nobis ex tempora nihil ipsa, quo eligendi
        est natus iure, vero laborum explicabo sit culpa qui.</p>
    </div>`
displayContent = ""



function repeatContainer(){
    displayContent += htmlContent
}

container.addEventListener("click", ()=>{repeatContainer(); addedContainer.innerHTML = displayContent;})
