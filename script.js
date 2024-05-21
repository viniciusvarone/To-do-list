const inputTask = document.getElementById('input-newTask')
const btnAdd = document.getElementById('btn-add')
const TodoList = document.getElementById('to-do-list')

const listaTasks = []

btnAdd.addEventListener('click', function(){

    //validações do input
    if (inputTask.value == ""){
        alert('Digite uma task para ser adicionada')
        inputTask.value = ""
        inputTask.focus()
        return
    } else if (listaTasks.includes(inputTask.value)){
        alert('Essa tarefa já foi adicionada')
        inputTask.value = ""
        inputTask.focus()
        return
    }

    console.log(listaTasks)

    //cria um novo item de lista (li)
    const newTask = document.createElement('li');

    //cria um span (task adicionada) para o li 
    const taskSpan = document.createElement('p');
    taskSpan.innerText = inputTask.value;

    //opção de marcar e excluir tarefa respectivamente
    const MarcarTask = document.createElement('button');
    MarcarTask.innerText = 'V'
    MarcarTask.addEventListener('click', function(){
        taskSpan.classList.toggle('completed');
    });

    const ExcluirTask = document.createElement('button');
    ExcluirTask.innerText = 'X'
    ExcluirTask.addEventListener('click', function(){
        TodoList.removeChild(newTask)
    });

    //cria uma div para os botões dentro da li
    const divBtnsTask = document.createElement('div')
    divBtnsTask.appendChild(MarcarTask);
    divBtnsTask.appendChild(ExcluirTask)


    //
    newTask.appendChild(taskSpan);
    newTask.appendChild(divBtnsTask);
    
    TodoList.appendChild(newTask);

    inputTask.value = '';
    inputTask.focus()
    
})

