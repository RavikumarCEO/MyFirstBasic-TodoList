let textArea = document.querySelector('#insertTodo')
let addBtn = document.querySelector('#addButton')
let uList = document.querySelector('#uList')



addBtn.addEventListener('click',function(){

     
    let textInput = textArea.value
    if(textInput.trim() === "")return

    let list = document.createElement('li');
    let button = document.createElement('button')
    button.style.backgroundColor = 'red'
    button.innerText = "Remove";

    button.addEventListener('click',function(){
        list.remove()
    })


    list.innerText = textInput
    list.append(button)


    uList.append(list)
    

    textArea.value = ""

})


