
 /* let writeDiv = document.querySelector('.write');
const createBtn=document.querySelector(".btn")


let notes=document.querySelectorAll(".input-box");

createBtn.addEventListener('click', function(event) {
    
        writeDiv.innerHTML=
        `<p contenteditable="true" class="input-box">
                <img id="img1"src="image/img1.jpg">
            </p>`;

let img1 = document.querySelector('#img1');
        
img1.addEventListener('click', function(event) {
    
        writeDiv.style.display = 'none';
    
});

writeDiv.style.display = 'block';
}
);


*/ 

const write= document.querySelector(".write");
const btn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");



btn.addEventListener("click", function()
{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src="image/img1.jpg";
    inputBox.innerHTML = '&#8203;';
    inputBox.appendChild(img);
    write.appendChild(inputBox);

})

write.addEventListener("click", function(e)
{  
    if (e.target.tagName ==="IMG"){
             e.target.parentElement.remove();
             
    }

        }


);


    