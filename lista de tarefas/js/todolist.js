;(function (){

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

  

    function createli(obj){
        const li = document.createElement('li')
        const p = document.createElement('p')
        const checkbutton = document.createElement('button')
        const editbutton = document.createElement('i')
        const deletebutton = document.createElement('i')
        const icheck = document.createElement('i')
        const editContainer = document.createElement('div')
        const editInput = document.createElement("input")
        const d_editbutton = document.createElement('button')
        const d_cancelbutton = document.createElement('button')


        li.classList.add('todo-item')

        checkbutton.className = "button-check"
        checkbutton.setAttribute("data-action", 'checkbutton')
        icheck.className = "fas fa-check displayNone"
        checkbutton.appendChild(icheck)
        li.appendChild(checkbutton)

        p.classList.add('task-name')
        p.textContent = obj.name
        li.appendChild(p)

        editbutton.className = "fas fa-edit"
        editbutton.setAttribute("data-action", "editbutton")
        li.appendChild(editbutton)

        editContainer.className = "editContainer"

        editInput.className = "editInput"
        editInput.setAttribute("type", "text")
        editContainer.appendChild(editInput)

        d_editbutton.className = "editButton"
        d_editbutton.setAttribute("data-action", "d_editbutton")
        d_editbutton.textContent = "Edit"
        editContainer.appendChild(d_editbutton)

        d_cancelbutton.className = "cancelButton"
        d_cancelbutton.setAttribute("data-action", "d_cancelbutton")
        d_cancelbutton.textContent = "Cancel"
        editContainer.appendChild(d_cancelbutton)

        li.appendChild(editContainer)

        deletebutton.className = "fas fa-trash-alt"
        deletebutton.setAttribute('data-action', 'deletebutton')
        li.appendChild(deletebutton)


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