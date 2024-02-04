// Modelo de tarefa
const tasks = [];

// Função para adicionar uma tarefa
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = "";
        renderTasks();
    }
}

// Função para marcar uma tarefa como concluída
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Função para remover uma tarefa
function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Função para renderizar as tarefas na lista
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="toggleTask(${i})">${task.completed ? 'Desfazer' : 'Concluir'}</button>
            <button onclick="removeTask(${i})">Remover</button>
        `;
        taskList.appendChild(taskItem);
    }
}

// Vincule a função addTask ao botão "Adicionar"
document.getElementById("addTask").addEventListener("click", addTask);

// Renderize as tarefas iniciais
renderTasks();
