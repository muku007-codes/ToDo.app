let addtodobutton = document.getElementById("addtodos");
let todocontainer = document.getElementById("todocontainer");
let inputfield = document.getElementById("inputfiled");

addtodobutton.addEventListener('click',()=>{
    var paragraph = document.createElement('p');
    paragraph.innerHTML = inputfield.value;
    todocontainer.appendChild(paragraph);
    inputfield.value = "";

    paragraph.addEventListener('click',()=>{
        paragraph.style.textDecoration = "line-through";
        paragraph.style.background = "#FFAFAF";
    })

    paragraph.addEventListener('dblclick',()=>{
        todocontainer.removeChild(paragraph);
    })
})

function change()
{
    var moon = "https://img.icons8.com/cotton/32/000000/moon-satellite.png";
    var sun = "https://img.icons8.com/fluency/32/000000/sun.png";
    var image = document.getElementById('icon');
    if(image.src==moon)
    {
        image.src = sun;
        document.body.classList.remove("dark");
    }
    else
    {
        document.body.classList.add("dark");
        image.src = moon;
    }
}