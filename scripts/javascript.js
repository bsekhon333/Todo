var taskString = document.getElementById('taskString');  //// <----- saves the input/text box to variable

var list = document.getElementById('todoList'); /// <-------- saves <ul> to variable

var arr = [];  // empty array to push string from input into

list.addEventListener('click',function(event){     /////<----- EVENT LISTENER TO DELETE <li> tag and string from array
    list.removeChild(event.target);
    var ind = arr.indexOf(event.target.textContent);
    arr.splice(ind,1);
    console.log(arr);

});


document.getElementById('mainForm').addEventListener('submit', function(event){       // <---- This eventListener sends the string/value of the input to an array, then runs the "clear" function
    if(taskString.value){
        arr.push(taskString.value);
        clear();
        event.preventDefault();
    } else if(taskString.value === ''){
        alert('Nothing Was Typed');
        event.preventDefault();
    }

});

function clear(){                               ////<----- FUNCTION CLEARS THE <ul>,LOOPS OVER ARRAY PUTTING EACH ITEM IN A LI TAG AND SENDING IT TO THE UL
    list.innerHTML = '';
    for(var i = 0; i < arr.length; i++){
        var task = arr[i];
        var liTag = document.createElement('li');
        liTag.setAttribute('id',i);
        liTag.textContent = task;
        list.appendChild(liTag);
        taskString.value = '';

    }

}
