

top_left = document.getElementById('tp-lf')
top_middle = document.getElementById('tp-md')
top_right = document.getElementById('tp-rt')


middle_left = document.getElementById('md-lf')
middle_middle = document.getElementById('md-md')
middle_right = document.getElementById('md-rt')


bottom_left = document.getElementById('bt-lf')
bottom_middle = document.getElementById('bt-md')
bottom_right = document.getElementById('bt-rt')



function check_valid_move(pos){
    if(pos.innerHTML.length>0){
        return false
    }
    else{
        return true
    }
}

function move(event){
    event.preventDefault()
    console.log('this is a test')
}


top_left.addEventListener('click', move)