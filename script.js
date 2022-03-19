let addtodobutton = document.getElementById("addtodos");
let input = document.getElementById("input");
let todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if(todos)
{
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

addtodobutton.addEventListener('click',(e) => {
    e.preventDefault();
    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement("p");
        if (todo && todo.completed) {
            todoEl.classList.add("completed");
        }

        todoEl.innerText = todoText;

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");

            updateLS();
        });

        todoEl.addEventListener("dblclick", (e) => {
            e.preventDefault();

            todoEl.remove();

            updateLS();
        });

        todosUL.appendChild(todoEl);

        input.value = "";

        updateLS();
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll("p");

    const todos = [];

    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed"),
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}


//old code

// addtodobutton.addEventListener('click',()=>{
    //     var paragraph = document.createElement('p');
//     paragraph.innerHTML = inputfield.value;

//     let str = inputfield.value;
//     localStorage.setItem(str,str);

//     todocontainer.appendChild(paragraph);
//     inputfield.value = "";
//forEach() to loop an array and save to localStorage and whenever page is loaded all items automaticaly created

    // paragraph.addEventListener('click',()=>{  
    //     paragraph.style.textDecoration = "line-through";
    //     paragraph.style.background = "#FFAFAF";
    // })

    // paragraph.addEventListener('dblclick',()=>{
    //     let removestr = paragraph.innerText;
    //     localStorage.removeItem(removestr);
    //     todocontainer.removeChild(paragraph);
    // })

// })

//for dark/light mode

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