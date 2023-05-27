/**
 * Show tasks with DOM
 */

const trash = '<img src="images/trash-icon.svg" alt="trash task">'
const check = '<img src="images/check-icon.svg" alt="check done task">'
const checked = '<img src="images/checked-icon.svg" alt="uncheck undone task">'

export class createDOM {
    constructor(storage, fetch) {
        this.storage = storage
        this.fetch = fetch
    }

    displayTasks(tasks) {
        const tasksDOM = document.querySelector('#todo-tasks-list')
        tasksDOM.innerHTML = ''
        tasks.forEach(item => {
            tasksDOM.appendChild(this.createTaskDOM(item))
        })
        this.displayData()
    }

    displayData() {
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const date = document.getElementById("today-date")
        let d = new Date()
        var day = d.getDate();
        var today = days[d.getDay()];
        var month = months[d.getMonth()];
	    date.innerHTML = `${today}, ${month} ${day}`;
    }

    createTaskDOM(task) {
        const taskElement = document.createElement('li')
        const checkTask = document.createElement('button')
        const taskTitle = document.createElement('p')
        const trashTask = document.createElement('button')

        taskElement.setAttribute('class', 'items')
        checkTask.innerHTML = task.done ? checked : check
        taskTitle.setAttribute('class', `${task.done ? 'done-item' : 'undone-item'}`)
        taskTitle.textContent = task.title
        trashTask.innerHTML = trash

        checkTask.addEventListener('click', () => {
            this.storage.toggleTasks(task.id)
            this.displayTasks(this.fetch.getTasksFromLocalStorage())
        })
        trashTask.addEventListener('click', () => {
            this.storage.removeTasks(task.id)
            this.displayTasks(this.fetch.getTasksFromLocalStorage())
        })

        taskElement.appendChild(checkTask)
        taskElement.appendChild(taskTitle)
        taskElement.appendChild(trashTask)

        return taskElement
    }
}
