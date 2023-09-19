(function (){

    const botaoAdicionar = document.querySelector('#todo-add')
    const nomeAdicionar = document.querySelector('#item-input')
    const listaDeTarefas = document.querySelector('#todo-list')

    let arrTask = [
        {
            name: 'task 1',
            createAt: Date.now(),
            completed: false
        }
    ]

    function addEventLi(li){
        li.addEventListener('click', function () {
            console.log(this)
        })
    }

    function createli(obj){
        const li = document.createElement('li')
        li.classList.add('todo-item')
        const p = document.createElement('p')
        p.classList.add('task-name')
        p.textContent = obj.name
        li.appendChild(p)
        addEventLi(li)
        return li
    }

    function addtask(task){
        arrTask.push({
            name: task,
            createAt: Date.now(),
            completed: false
        })
    }
    
    function renderTask(){
        listaDeTarefas.innerHTML = ''
        arrTask.forEach((obj) =>{
            listaDeTarefas.appendChild(createli(obj))
        })
    }

    botaoAdicionar.addEventListener('submit', (e) => {

        e.preventDefault()
            if(nomeAdicionar.value != ''){
                addtask(nomeAdicionar.value)
                nomeAdicionar.value = ''
                nomeAdicionar.focus()

            }
        renderTask()

        
    })
    renderTask()





})()