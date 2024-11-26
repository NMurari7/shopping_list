const itemInput = document.querySelector('#item-input')
const itemList = document.querySelector('#item-list')
const itemForm = document.querySelector('#item-form')



function addItem(e) {
    e.preventDefault()

    if (itemInput.value === '') {
        alert("Please enter the element")
        return 
    }
    else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(itemInput.value))

        const button = createButton("remove-item btn-link text-red");

        li.appendChild(button)

        console.log(li)
        itemList.appendChild(li)
    }

    function createButton(classes) {
        const button = document.createElement('button')
        button.className = classes
        const icon = createIcon("fa-solid fa-xmark");
        button.appendChild(icon)
        return button
    }
    function createIcon(classes) { 
        const icon = document.createElement('i')
        icon.className = classes
        return icon
    }
}


//event listeners
itemForm.addEventListener('submit', addItem)
