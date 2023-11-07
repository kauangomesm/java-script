;(function () {
 "use strict"
    const botaoAdicionar = document.querySelector('#todo-add')
    const nomeAdicionar = document.querySelector('#item-input')
    const listaDeTarefas = document.querySelector('#todo-list')
    const lis = listaDeTarefas.getElementsByTagName('li')

    let arrTask = getSavedData()
        
    function getSavedData() {

        let tasksData = localStorage.getItem('tasks')
        tasksData = JSON.parse(tasksData)
        console.log(tasksData)


        return tasksData && tasksData.length ? tasksData : [
                {
                    name: 'task 1',
                    createAt: Date.now(),
                    completed: true
                }
            ]
        
        
        
    }

    function setNewData() {
        localStorage.setItem('tasks', JSON.stringify(arrTask))
    }
    setNewData()


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

        icheck.className = `fas fa-check ${obj.completed ? '' : 'displayNone'}`

        icheck.setAttribute("data-action", "checkbutton")

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
        editInput.value = obj.name
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
        setNewData()
    }
    
    function renderTask(){
        listaDeTarefas.innerHTML = ''
        arrTask.forEach((obj) =>{
            listaDeTarefas.appendChild(createli(obj))
        })
    }


    function clickedUl(e){
        const dataAction = e.target.getAttribute(`data-action`)
        if(!e.target.getAttribute('data-action')){
            return
        }
        let currentLi  = e.target
        while(currentLi.nodeName !== 'LI'){
            currentLi = currentLi.parentElement
        }

        const currentLiindex = [...lis].indexOf(currentLi)
        console.log(currentLiindex)
        console.log(e.target)

        const actions = {
            editbutton: function() {
                    const editContainer =currentLi.querySelector('.editContainer');

                    [...listaDeTarefas.querySelectorAll('.editContainer')].forEach(container => {
                        container.removeAttribute('style')
                    })

                    editContainer.style.display = 'flex'
            },

            deletebutton: function(){
                arrTask.splice(currentLiindex, 1)
                renderTask()
                setNewData()
                
            },

            d_editbutton: function(){
                const val = currentLi.querySelector('.editInput').value
                
                arrTask[currentLiindex].name = val
                renderTask()
                setNewData()
            },

            d_cancelbutton: function(){
                currentLi.querySelector('.editContainer').removeAttribute('style')
                currentLi.querySelector('d_editbutton').value = arrTask[currentLiindex].name
            },

            checkbutton: function(){
                arrTask[currentLiindex].completed = !arrTask[currentLiindex].completed
                setNewData()
                renderTask()
            }
        }

        if (actions[dataAction]){
            actions[dataAction]()
        }




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

    listaDeTarefas.addEventListener("click", clickedUl)


    renderTask()





})()