
function check_valid_move(pos){
    if(pos.innerHTML.length>0){
        return false
    }
    else{
        return true
    }
}






tags = document.getElementsByTagName('td')

function is_winning(character){
    for(let i=0; i<tags.length; i++){
        if(i==0){
            if(tags[0].innerHTML==character){
                if(tags[1]==character && tags[2].innerHTML==""){
                    return true
                }
                else if(tags[2]==character && tags[1].innerHTML==""){
                    return true
                }
                else{
                    return false
                }
            }
        }
        else if(i==1){
            if(tags[1].innerHTML==character){
                if(tags[0]==character && tags[2].innerHTML==""){
                    return true
                }
                else if(tags[2]==character && tags[0].innerHTML==""){
                    return true
                }
                else{
                    return false
                }
            }
        }
        else if(i==2){
            if(tags[2].innerHTML==character){
                if(tags[0]==character && tags[1].innerHTML==""){
                    return true
                }
                else if(tags[1]==character && tags[0].innerHTML==""){
                    return true
                }
                else{
                    return false
                }
            }
        }
        

    }
}


for(let i=0; i<tags.length; i++){
    tags[i].addEventListener('click', (event)=>{
        if(check_valid_move(tags[i])){
            console.log("This is a valid move")

            tags[i].innerHTML="X"

            computer_move()


        }
        else{
            alert("Invalid Move!!")
        }
    })
}

