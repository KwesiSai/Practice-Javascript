let input=prompt("Creating a todo list,type new to add a todo");
let todolist=['wash the bowl','study'];
while(input!=="quit"){
    if(input=="list"){
        console.log('**********************')
        for(let i=0;i<todolist.length;i++){
            console.log(`${i}: ${todolist[i]}`)
        }
     console.log('*********************')
    }
    else if(input=="new"){
        let todo=prompt("What do you gotta do?")
        todolist.push(todo)
        console.log(`${todo} added to the list`)
    }
    else if(input=="delete"){
        let index=prompt("Enter the index of the item you want to delete")
        todolist.splice(index,1)
        console.log(`You have deleted ${todolist[parseInt(index)]} from the list`)
    }
input=prompt("Creating a todo list,type new to add a todo")
}



