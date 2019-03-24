
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
                if(tags[1].innerHTML==character && tags[2].innerHTML==""){
                    return true
                }
                else if(tags[2].innerHTML==character && tags[1].innerHTML==""){
                    return true
                }
                else if(tags[3].innerHTML==character && tags[6].innerHTML==""){
                    return true
                }
                else if(tags[6].innerHTML==character && tags[3].innerHTML==""){
                    return true
                }
                else if(tags[4].innerHTML==character && tags[8].innerHTML==""){
                    return true
                }
                else if(tags[8].innerHTML==character && tags[4].innerHTML==""){
                    return true
                }
                else{
                    return false
                }
            }
            else{
                if(tags[1].innerHTML==character && tags[2].innerHTML==character){
                    return true
                }
                else if(tags[3].innerHTML==character && tags[6].innerHTML==character){
                    return true
                }
                else if(tags[4].innerHTML==character && tags[8].innerHTML==character){
                    return true
                }
            }
        }
        else if(i==1){
            if(tags[1].innerHTML==character){
                if(tags[0].innerHTML==character && tags[2].innerHTML==""){
                    return true
                }
                else if(tags[2].innerHTML==character && tags[0].innerHTML==""){
                    return true
                }
                else if(tags[4].innerHTML==character && tags[7].innerHTML==""){
                    return true
                }
                else if(tags[7].innerHTML==character && tags[4].innerHTML==""){
                    return true
                }
                else{
                    return false
                }
            }
            else{
                if(tags[0].innerHTML==character && tags[2].innerHTML==character){
                    return true
                }
                else if(tags[4].innerHTML==character && tags[7].innerHTML==character){
                    return true
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
                else if(tags[5]==character && tags[8].innerHTML==""){
                    return true
                }
                else if(tags[8]==character && tags[5].innerHTML==""){
                    return true
                }
                else if(tags[4]==character && tags[6].innerHTML==""){
                    return true
                }
                else if(tags[6]==character && tags[4].innerHTML==""){
                    return true
                }
                else{
                    return false
                }
            }
            else{
                if(tags[5].innerHTML==character && tags[8].innerHTML==character){
                    return true
                }
                else if(tags[0].innerHTML==character && tags[1].innerHTML==character){
                    return true
                }
                else if(tags[4].innerHTML==character && tags[6].innerHTML==character){
                    return true
                }
            }
        }
        // else if(i==3){
        //     if(tags[3]==character && tags[])
        // }
        

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

