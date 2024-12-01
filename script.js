const itemInput = document.querySelector('#item-input')
const itemList = document.querySelector('#item-list')
const itemForm = document.querySelector('#item-form')
const clearBtn = document.querySelector("#clear")
const filterItems = document.querySelector('.filter')

const items = itemList.querySelectorAll('li')



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
        checkUI()
        itemInput.value = ''
        
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


function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item') && (confirm('Are you sure')))
    {
            e.target.parentElement.parentElement.remove()
        
    }
    checkUI()
}

function clearAll(e) {
    
    // if(e.target.id)
    // itemList.innerHTML = ''

    // OR
    if (confirm('Are you sure deleting everything')) {
        while (itemList.firstChild ) {
            itemList.removeChild(itemList.firstChild)
        }
    }
    checkUI();
}

function filterFunc(e) {
    const items = itemList.querySelectorAll('li')
    const text = e.target.value.toLowerCase();
    items.forEach(item => {
        if (item.textContent.toLowerCase().includes(text)) {
            item.style.display = 'flex'
        }
        else {
            item.style.display = 'none'
        }
    } )
}

function checkUI() {
    const items = itemList.querySelectorAll("li");
    if (items.length === 0) {
        clearBtn.style.display = 'none'
        filterItems.style.display = "none";
    }
    else {
        clearBtn.style.display = 'block'
        // clearBtn.style.display = "block";
        filterItems.style.display = "block";
    }
}



//event listeners
itemForm.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
clearBtn.addEventListener("click", clearAll);
filterItems.addEventListener('input', filterFunc)

checkUI();

// localStorage.setItem("name", "murari");
// console.log(localStorage.getItem("name"));