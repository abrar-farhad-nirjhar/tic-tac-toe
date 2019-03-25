
function check_valid_move(pos){
    if(pos.innerHTML.length>0){
        return false
    }
    else{
        return true
    }
}






tags = document.getElementsByTagName('td')



function is_winner(character){
    for(let i=0; i<tags.length; i++){
        if(i==0){
            if(tags[0].innerHTML==character){
                if(tags[1].innerHTML==character && tags[2].innerHTML==character){
                    return true
                }
                
                else if(tags[3].innerHTML==character && tags[6].innerHTML==character){
                    return true
                }
                
                else if(tags[4].innerHTML==character && tags[8].innerHTML==character){
                    return true
                }
                
                else{
                    return false
                }
            }
            
            
        }
        else if(i==1){
            if(tags[1].innerHTML==character){
                if(tags[0].innerHTML==character && tags[2].innerHTML==character){
                    return true
                }
                
                else if(tags[4].innerHTML==character && tags[7].innerHTML==character){
                    return true
                }
              
                else{
                    return false
                }
            }
            
        }
        else if(i==2){
            if(tags[2].innerHTML==character){
                if(tags[0].innerHTML==character && tags[1].innerHTML==character){
                    return true
                }
                
                
                else if(tags[8].innerHTML==character && tags[5].innerHTML==character){
                    return true
                }
            
                else if(tags[6].innerHTML==character && tags[4].innerHTML==character){
                    return true
                }
                else{
                    return false
                }
            }
            
        }
        else if(i==3){
            if(tags[3].innerHTML==character){
                if(tags[0].innerHTML==character && tags[6].innerHTML==character){
                    return true
                }
               
                else if(tags[5].innerHTML==character && tags[4].innerHTML==character){
                    return true
                }
                
                else{
                    return false
                }
                

            }
            
        }
        else if(i==4){
            if(tags[4].innerHTML==character){
                if(tags[0]==character && tags[8].innerHTML==character){
                    return true
                }
               
                else if(tags[5]==character && tags[3].innerHTML==character){
                    return true
                }
               
                if(tags[2]==character && tags[6].innerHTML==character){
                    return true
                }
                
                else if(tags[1]==character && tags[7].innerHTML==character){
                    return true
                }
                
                else{
                    return false
                }
                

            }
            

        }
        else if(i==5){
            if(tags[3].innerHTML==character){
                if(tags[2].innerHTML==character && tags[8].innerHTML==character){
                    return true
                }
                
                else if(tags[3].innerHTML==character && tags[4].innerHTML==character){
                    return true
                }
                
                else{
                    return false
                }
                

            }
            
        }
        else if(i==6){
            if(tags[6].innerHTML==character){
                if(tags[0].innerHTML==character && tags[3].innerHTML==character){
                    return true
                }
                
                else if(tags[7].innerHTML==character && tags[8].innerHTML==character){
                    return true
                }
                
                else if(tags[4].innerHTML==character && tags[2].innerHTML==character){
                    return true
                }
                
                else{
                    return false
                }
            }
            
        }
        else if(i==7){
            if(tags[7].innerHTML==character){
                if(tags[6].innerHTML==character && tags[8].innerHTML==character){
                    return true
                }
                
                else if(tags[4].innerHTML==character && tags[1].innerHTML==character){
                    return true
                }
                
                else{
                    return false
                }
            }
            
        }
        else if(i==8){
            if(tags[8].innerHTML==character){
                if(tags[5].innerHTML==character && tags[2].innerHTML==character){
                    return true
                }
               
                else if(tags[4].innerHTML==character && tags[0].innerHTML==character){
                    return true
                }
                
                else if(tags[7].innerHTML==character && tags[6].innerHTML==character){
                    return true
                }
                
                else{
                    return false
                }
            }
            
        }
        

    }
}







function is_winning(character){
    for(let i=0; i<tags.length; i++){
        if(i==0){
            if(tags[0].innerHTML==character){
                if(tags[1].innerHTML==character && tags[2].innerHTML==""){
                    return [true,2]
                }
                else if(tags[2].innerHTML==character && tags[1].innerHTML==""){
                    return [true,1]
                }
                else if(tags[3].innerHTML==character && tags[6].innerHTML==""){
                    return [true,6]
                }
                else if(tags[6].innerHTML==character && tags[3].innerHTML==""){
                    return [true,3]
                }
                else if(tags[4].innerHTML==character && tags[8].innerHTML==""){
                    return [true,8]
                }
                else if(tags[8].innerHTML==character && tags[4].innerHTML==""){
                    return [true,4]
                }
                else{
                    return [false]
                }
            }
            else{
                if(tags[1].innerHTML==character && tags[2].innerHTML==character){
                    return [true,0]
                }
                else if(tags[3].innerHTML==character && tags[6].innerHTML==character){
                    return [true,0]
                }
                else if(tags[4].innerHTML==character && tags[8].innerHTML==character){
                    return [true,0]
                }
                else{
                    return [false]
                }
            }
            
        }
        else if(i==1){
            if(tags[1].innerHTML==character){
                if(tags[0].innerHTML==character && tags[2].innerHTML==""){
                    return [true,2]
                }
                else if(tags[2].innerHTML==character && tags[0].innerHTML==""){
                    return [true,0]
                }
                else if(tags[4].innerHTML==character && tags[7].innerHTML==""){
                    return [true,7]
                }
                else if(tags[7].innerHTML==character && tags[4].innerHTML==""){
                    return [true,4]
                }
                else{
                    return [false]
                }
            }
            else{
                if(tags[0].innerHTML==character && tags[2].innerHTML==character){
                    return [true,1]
                }
                else if(tags[4].innerHTML==character && tags[7].innerHTML==character){
                    return [true,1]
                }
                else{
                    return [false]
                }
                
                
            }
        }
        else if(i==2){
            if(tags[2].innerHTML==character){
                if(tags[0].innerHTML==character && tags[1].innerHTML==""){
                    return [true,1]
                }
                else if(tags[1].innerHTML==character && tags[0].innerHTML==""){
                    return [true,0]
                }
                else if(tags[5].innerHTML==character && tags[8].innerHTML==""){
                    return [true,8]
                }
                else if(tags[8].innerHTML==character && tags[5].innerHTML==""){
                    return [true,5]
                }
                else if(tags[4].innerHTML==character && tags[6].innerHTML==""){
                    return [true,6]
                }
                else if(tags[6].innerHTML==character && tags[4].innerHTML==""){
                    return [true,4]
                }
                else{
                    return [false]
                }
            }
            else{
                if(tags[5].innerHTML==character && tags[8].innerHTML==character){
                    return [true,2]
                }
                else if(tags[0].innerHTML==character && tags[1].innerHTML==character){
                    return [true,2]
                }
                else if(tags[4].innerHTML==character && tags[6].innerHTML==character){
                    return [true,2]
                }
                else{
                    return [false]
                }
            }
        }
        else if(i==3){
            if(tags[3].innerHTML==character){
                if(tags[0].innerHTML==character && tags[6].innerHTML==""){
                    return [true,6]
                }
                else if(tags[6].innerHTML==character && tags[0].innerHTML==""){
                    return [true,0]
                }
                else if(tags[5].innerHTML==character && tags[4].innerHTML==""){
                    return [true,4]
                }
                else if(tags[4].innerHTML==character && tags[5].innerHTML==""){
                    return [true,5]
                }
                else{
                    return [false]
                }
                

            }
            else{
                if(tags[5].innerHTML==character && tags[4].innerHTML==character){
                    return [true,3]
                }
                else if(tags[0].innerHTML==character && tags[6].innerHTML==character){
                    return [true,3]
                }
                else{
                    return [false]
                }
    

            }
        }
        else if(i==4){
            if(tags[4].innerHTML==character){
                if(tags[0]==character && tags[8].innerHTML==""){
                    return [true,8]
                }
                else if(tags[8]==character && tags[0].innerHTML==""){
                    return [true,0]
                }
                else if(tags[5]==character && tags[3].innerHTML==""){
                    return [true,3]
                }
                else if(tags[3]==character && tags[5].innerHTML==""){
                    return [true,5]
                }
                if(tags[2]==character && tags[6].innerHTML==""){
                    return [true,6]
                }
                else if(tags[6]==character && tags[2].innerHTML==""){
                    return [true,2]
                }
                else if(tags[1]==character && tags[7].innerHTML==""){
                    return [true,7]
                }
                else if(tags[7]==character && tags[1].innerHTML==""){
                    return [true,1]
                }
                else{
                    return [false]
                }
                

            }
            else{
                if(tags[0].innerHTML==character && tags[8].innerHTML==character){
                    return [true,4]
                }
                else if(tags[1].innerHTML==character && tags[7].innerHTML==character){
                    return [true,4]
                }
                else if(tags[2].innerHTML==character && tags[6].innerHTML==character){
                    return [true,4]
                }
                else if(tags[3].innerHTML==character && tags[5].innerHTML==character){
                    return [true,4]
                }
                else{
                    return [false]
                }
            }

        }
        else if(i==5){
            if(tags[3].innerHTML==character){
                if(tags[2].innerHTML==character && tags[8].innerHTML==""){
                    return [true,8]
                }
                else if(tags[8].innerHTML==character && tags[2].innerHTML==""){
                    return [true,2]
                }
                else if(tags[3].innerHTML==character && tags[4].innerHTML==""){
                    return [true,4]
                }
                else if(tags[4].innerHTML==character && tags[3].innerHTML==""){
                    return [true,3]
                }
                else{
                    return [false]
                }
                

            }
            else{
                if(tags[3].innerHTML==character && tags[4].innerHTML==character){
                    return [true,5]
                }
                else if(tags[2].innerHTML==character && tags[8].innerHTML==character){
                    return [true,5]
                }
                else{
                    return [false]
                }
    

            }
        }
        else if(i==6){
            if(tags[6].innerHTML==character){
                if(tags[0].innerHTML==character && tags[3].innerHTML==""){
                    return [true,3]
                }
                else if(tags[3].innerHTML==character && tags[0].innerHTML==""){
                    return [true,0]
                }
                else if(tags[7].innerHTML==character && tags[8].innerHTML==""){
                    return [true,8]
                }
                else if(tags[8].innerHTML==character && tags[7].innerHTML==""){
                    return [true,7]
                }
                else if(tags[4].innerHTML==character && tags[2].innerHTML==""){
                    return [true,2]
                }
                else if(tags[2].innerHTML==character && tags[4].innerHTML==""){
                    return [true,4]
                }
                else{
                    return [false]
                }
            }
            else{
                if(tags[4].innerHTML==character && tags[2].innerHTML==character){
                    return [true,6]
                }
                else if(tags[8].innerHTML==character && tags[7].innerHTML==character){
                    return [true,6]
                }
                else if(tags[3].innerHTML==character && tags[0].innerHTML==character){
                    return [true,6]
                }
                else{
                    return [false]
                }
            }
        }
        else if(i==7){
            if(tags[7].innerHTML==character){
                if(tags[6].innerHTML==character && tags[8].innerHTML==""){
                    return [true,8]
                }
                else if(tags[8].innerHTML==character && tags[6].innerHTML==""){
                    return [true,6]
                }
                else if(tags[4].innerHTML==character && tags[1].innerHTML==""){
                    return [true,1]
                }
                else if(tags[1].innerHTML==character && tags[4].innerHTML==""){
                    return [true,4]
                }
                else{
                    return [false]
                }
            }
            else{
                if(tags[1].innerHTML==character && tags[4].innerHTML==character){
                    return [true,7]
                }
                else if(tags[6].innerHTML==character && tags[8].innerHTML==character){
                    return [true,7]
                }
                else{
                    return [false]
                }
                
                
            }
        }
        else if(i==8){
            if(tags[8].innerHTML==character){
                if(tags[5].innerHTML==character && tags[2].innerHTML==""){
                    return [true,2]
                }
                else if(tags[2].innerHTML==character && tags[5].innerHTML==""){
                    return [true,5]
                }
                else if(tags[4].innerHTML==character && tags[0].innerHTML==""){
                    return [true,0]
                }
                else if(tags[0].innerHTML==character && tags[4].innerHTML==""){
                    return [true,4]
                }
                else if(tags[7].innerHTML==character && tags[6].innerHTML==""){
                    return [true,6]
                }
                else if(tags[6].innerHTML==character && tags[7].innerHTML==""){
                    return [true,7]
                }
                else{
                    return [false]
                }
            }
            else{
                if(tags[6].innerHTML==character && tags[7].innerHTML==character){
                    return [true,8]
                }
                else if(tags[5].innerHTML==character && tags[2].innerHTML==character){
                    return [true,8]
                }
                else if(tags[0].innerHTML==character && tags[4].innerHTML==character){
                    return [true,8]
                }
                else{
                    return [false]
                }
            }
        }
        

    }
}

let count = 0

function computer_move(){
    

    
    if(is_winning('O')[0]==true){
        document.getElementById(`${is_winning('O')[1]}`).innerHTML = "O"
        
    }
    else if(is_winning('X')[0]==true){
        document.getElementById(`${is_winning('X')[1]}`).innerHTML = "O"
        
    }
    else{
        
        while(true){
            

            position = Math.floor(Math.random() * 9)
            
            doc = document.getElementById(`${position}`)
            
            if(check_valid_move(doc)){
                doc.innerHTML = "O"
                
                break;
            }
        }

    }
}


for(let i=0; i<tags.length; i++){
    tags[i].addEventListener('click', (event)=>{
        if(check_valid_move(tags[i])){
            
            count+=1
            tags[i].innerHTML="X"
            if(is_winner('X')){
                console.log("IS THIS WORKING")
                alert('Congratulations!! You Win!!')
                location.reload()
            }
            computer_move()
            if(is_winner('X')){
                alert('You Lose!! Try Again.')
                location.reload()
            }

            if(count==9){
                alert("The match is a draw")
                location.reload()
            }


        }
        else{
            alert("Invalid Move!!")
        }
    })
}

