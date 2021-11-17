document.body.onload = render()


function render() {
    let listTasksEl = document.getElementById("listTasks")
    listTasksEl.innerHTML =''
    let rawTask = localStorage.getItem("arrTasks")
    let arrTasksKey = JSON.parse(rawTask)

    arrTasksKey.forEach((el, idx) => {
        listTasksEl.innerHTML +=
        `
        <tr class="align-middle">
            <td class="align-middle">
                <input
                    id="checkDone_${idx}"
                    class="form-check-input" 
                    type="checkbox" 
                    value="done"
                    oninput="markDone(${idx})" 
                    ${el.done ? "checked" : ""}
                >
            </td>
            <td id="taskName_${idx}" ${el.done ? "style='text-decoration:line-through'" : ""}>
                ${el.task}
            </td>
            <td>
                <button class="btn float-end" onclick="deleteTask(${idx})">
                    <span class="material-icons">
                        delete_sweep
                    </span>
                </button>
            </td>
        </tr>
        `
        idx+=1
    });

    
}


function save(e) {
    e.preventDefault()
    let taskEl = document.getElementById("inputTask")
    let tmp = {}
    tmp.task = taskEl.value
    tmp.done = false

    document.getElementById("makeTask").reset()
  
    saveToLocalStorage(tmp)
  
    render()
}

function saveToLocalStorage(objTask) {
    let arr = JSON.parse(localStorage.getItem("arrTasks"))
    if (!arr){
        arr = []
    }

    arr.push(objTask)
    localStorage.setItem("arrTasks", JSON.stringify(arr))
}

function markDone(idx){
    let checkEl = document.getElementById("checkDone_"+idx)
    let markEl = document.getElementById("taskName_"+idx)
    let arr = JSON.parse(localStorage.getItem("arrTasks"))

    if(checkEl.checked == true){
        markEl.style.textDecoration = "line-through"
        arr[idx].done = true
    } else {
        markEl.style.textDecoration = "initial"
        arr[idx].done = false
    }

    localStorage.setItem("arrTasks", JSON.stringify(arr))
    
}

function deleteTask(idx){
    let arr = JSON.parse(localStorage.getItem("arrTasks"))
    arr.splice(idx, 1)
    localStorage.setItem("arrTasks", JSON.stringify(arr))

    render()
}

