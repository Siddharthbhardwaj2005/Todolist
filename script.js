function add_todo(){
    var x = document.getElementById('task').value
    if(x===""){
        alert('Please Add the Task')
    }
    else{
    const node = document.createElement('div')
    node.className="list-group-item list-group-item-primary mb-2"
    const textnode = document.createTextNode(x)
    node.appendChild(textnode)
    var b = document.createElement('button')
    b.classname = "btn btn-danger ml-4"
    b.style = "float:right"
    b.textContent="Delete"
    b.onclick = delete_todo
    node.appendChild(b)
    var c = document.createElement('button')
    c.classname = "btn btn-warning mr-2"
    c.style = "float:right"
    c.textContent="Edit"
    c.onclick = edit_todo
    node.appendChild(c)
    document.getElementById('result').appendChild(node)
    document.getElementById('task').value=""
    }
}

function clear_todo(){
    document.getElementById('result').innerHTML = ""
}

function delete_todo(e){
    e.target.parentElement.remove()
}

function edit_todo(e){
    const newdiv = document.createElement('div')
    newdiv.className  = "container text-center"
    var i = document.createElement('input')
    i.className = "form-control"
    i.setAttribute("type", "text")
    newdiv.appendChild(i)
    var b1 = document.createElement('button')
    b1.className = "btn btn-success"
    b1.textContent = "Update"
    b1.onclick = close_box
    newdiv.appendChild(b1)
    
    var b12 = document.createElement('button')
    b12.className = "btn btn-danger"
    b12.textContent = "Close"
    b12.onclick = edit_text
    newdiv.appendChild(b12)
    e.target.parentElement.appendChild(newdiv)
}

function edit_text(e){
   y =  e.target.parentElement.firstChild.value
    const textnode1 = document.createTextNode(y)
    e.target.parentElement.parentElement.replaceChild(textnode1, e.target.parentElement.parentElement.firstChild)
    e.target.parentElement.remove()
}

function close_box(e){
    e.target.parentElement.remove()
}