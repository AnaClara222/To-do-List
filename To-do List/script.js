// Seleciona os elementos do DOM
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Função para adicionar uma nova tarefa
function addTask() {
    const taskText = taskInput.value.trim();

    // Verifica se o campo de input está vazio
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Cria um novo item de lista (li)
    const li = document.createElement('li');

    // Cria a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Função para riscar a tarefa quando marcada
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            li.classList.add('checked');
        } else {
            li.classList.remove('checked');
        }
    });

    // Cria o botão de delete
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // Adiciona a checkbox e o texto da tarefa ao item da lista
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskText));
    li.appendChild(deleteBtn);

    // Adiciona o item à lista de tarefas
    taskList.appendChild(li);

    // Limpa o campo de input
    taskInput.value = "";
}

// Evento de clique no botão "Add"
addBtn.addEventListener('click', addTask);

// Permite adicionar a tarefa pressionando "Enter"
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
