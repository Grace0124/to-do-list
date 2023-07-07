//add task when pressing "Add""
document.querySelector('#push').onclick = function(){
    add_task();
}

//add task when pressing "Enter" button
var input_box = document.getElementById("input");
input_box.addEventListener("keydown", function(e){
    if (e.code == "Enter") {
        add_task();
    }
})

// function for adding and removing tasks
function add_task() {
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}