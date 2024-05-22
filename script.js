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

    //cria um novo item de lista (li)
    const newTask = document.createElement('li');

    //cria um span (task adicionada) para o li 
    const taskSpan = document.createElement('p');
    taskSpan.innerText = inputTask.value;


    //sgv icon (para o botão de marcação)
    let IconMarcar = `
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi-check" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
        </svg> `


    //sgv icon (para o botão de exlusão)
    let IconExcluir = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg>`


    //opção de marcar tarefa
    const MarcarTask = document.createElement('button');
    MarcarTask.innerHTML = IconMarcar;

    newTask.style.backgroundColor = 'rgb(255, 255, 255)'

    MarcarTask.addEventListener('click', function(){

        taskSpan.classList.toggle('completed');
            // condição necessária para alternar entre as cores quando se clica na opção de marcar
        var currentColor = newTask.style.backgroundColor;
        newTask.style.backgroundColor = currentColor === 'rgb(255, 255, 255)' ? 'rgb(41, 164, 108)' : 'rgb(255, 255, 255)';
    });

    //opção de excluir tarefa
    const ExcluirTask = document.createElement('button');
    ExcluirTask.innerHTML = IconExcluir;
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

