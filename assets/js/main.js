function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    
    if (todoInput.value.trim() === '') {
        alert('Veuillez entrer une tâche!');
        return;
    }
    const li = document.createElement('li');
    li.textContent = todoInput.value;

    li.addEventListener('click', function() {
        todoList.removeChild(li);
    });
    //retetr
    todoList.appendChild(li);
    todoInput.value = ''; 
}
  



  
  
  
    
      