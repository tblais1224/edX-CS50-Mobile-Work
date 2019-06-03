const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  //gets input value
  let todoText = document.getElementById("todo-input").value
  //check if todo is empty
  if (!todoText) {
    return
  }
  //add to todocount
  let count = (parseInt(itemCountSpan.innerHTML) + 1).toString()
  itemCountSpan.innerHTML = count
  //add to unchecked count
  let uncheckedCount = (parseInt(uncheckedCountSpan.innerHTML) + 1).toString()
  uncheckedCountSpan.innerHTML = uncheckedCount
  // create random id
  let id = Math.random().toString()
  //create li with unique id
  let li = document.createElement('li')
  //set id to li
  li.setAttribute("id", id)
  //create checkbox
  let checkbox = document.createElement('input')
  checkbox.setAttribute("type", "checkbox")
  checkbox.setAttribute("id", "checkbox" + id)
  checkbox.setAttribute("class", "todo-checkbox")
  checkbox.setAttribute("onClick", "unCheckCounter(this.id)")
  //add checkbox to li
  li.appendChild(checkbox)
  //add text node to li
  li.appendChild(document.createTextNode(todoText));
  //create delete button
  let deleteBtn = document.createElement('button')
  deleteBtn.innerHTML = "DELETE"
  deleteBtn.setAttribute("onClick", "deleteToDo(this.id)")
  deleteBtn.setAttribute("id", id)
  deleteBtn.setAttribute("class", "todo-delete button")
  //add deletebtn to li
  li.appendChild(deleteBtn)
  //add li to ul
  list.appendChild(li)
}

function deleteToDo(id) {
  //check if checkbox checked if not remove from uncheck count
  if (!document.getElementById("checkbox" + id).checked) {
    //remove from unchecked count
    let uncheckedCount = (parseInt(uncheckedCountSpan.innerHTML) - 1).toString()
    uncheckedCountSpan.innerHTML = uncheckedCount
  }
  let li = document.getElementById(id)
  //remove li
  li.parentNode.removeChild(li)
  //remove 1 from item count
  let count = (parseInt(itemCountSpan.innerHTML) - 1).toString()
  itemCountSpan.innerHTML = count
}


function unCheckCounter(id) {
  if (document.getElementById(id).checked === true) {
    //remove from unchecked count
    let uncheckedCount = (parseInt(uncheckedCountSpan.innerHTML) - 1).toString()
    uncheckedCountSpan.innerHTML = uncheckedCount
  } else {
    //add to unchecked count
    let uncheckedCount = (parseInt(uncheckedCountSpan.innerHTML) + 1).toString()
    uncheckedCountSpan.innerHTML = uncheckedCount
  }
}