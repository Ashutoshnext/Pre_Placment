let TaskInput = document.getElementById('TaskInput');
let AddTaskBtn = document.getElementById('AddTaskBtn');
let RemoveAllTaskBtn = document.getElementById('RemoveAllTaskBtn');
let SearchTaskInput = document.getElementById('SearchTaskInput');
let Task = document.querySelector('.task');



let data = JSON.parse(localStorage.getItem('tasks')) || []

AddTaskBtn.addEventListener('click', () => {
    if (TaskInput.value) {
        data.push({
            text: TaskInput.value,
            completed: false
        })
        localStorage.setItem('tasks', JSON.stringify(data))
        window.location.reload()
    } else {
        alert('Plese fill input task field!')
    }

})

RemoveAllTaskBtn.addEventListener("click", () => {
    localStorage.removeItem('tasks')
    window.location.reload()
})

function TaskRender() {
    Task.innerHTML = ''; 
    data.map((item,index) => {
        Task.insertAdjacentHTML(
            'beforeend',
            `
        <div class="taskbox" style="${item.completed ? 'text-decoration: line-through;' : ''}">
                <p>${item.text}</p>
                <div class="taskaction">
                    <button onclick="togglecomplete(${index})">✔️</button>
                    <button onclick="DeleteTask(${index})">🗑️</button>
                </div>
        </div>
      `
        );
    });
}
TaskRender()


function togglecomplete(index){
    data[index].completed = !data[index].completed;
    localStorage.setItem('tasks', JSON.stringify(data));
    window.location.reload();
}


// function DeleteTask(index){
//     data.splice(index, 1);
//     localStorage.setItem('tasks', JSON.stringify(data));
//     window.location.reload();
// }

function DeleteTask(index){
    data = data.filter((_, i) => i !== index); 
    localStorage.setItem('tasks', JSON.stringify(data));
    window.location.reload();
}

