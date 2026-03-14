let input=document.getElementById("taskInput")
let addBtn=document.getElementById("addBtn")
let tasklist=document.getElementById("tasklist")
let task=[]
addBtn.onclick=function(){
    let tasktext=input.value
    if (tasktext==""){
        return
    }
    task.push(tasktext)
    showtask()
    savetask()
    input.value=""
}
function showtask(){
    tasklist.innerHTML=""
    for (let i=0;i<task.length;i++){
        let li=document.createElement("li")
        li.innerHTML=task[i]
        let delBtn=document.createElement("button")
        delBtn.taskcontent="Delete"
        delBtn.onclick=function(){
            task.splice(i, 1)
            showtask()
            savetask()
        }
        li.appendChild(delBtn)
        tasklist.appendChild(li)
    }
}
 function savetask(){
    localStorage.setItem("tasks", JSON.stringify(task))
 }
 function loadtask(){
    let storedtask=localStorage.getItem("tasks")
    if (storedtask){
        task=JSON.parse(storedtask)
        showtask()
    }
 }
     loadtask()
