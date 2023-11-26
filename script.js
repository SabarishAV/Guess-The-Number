a=Math.floor(Math.random()*100)

let guess
chance = 0

    function clicked(){
        guess = document.getElementById("guess").value;
        guess = Number.parseInt(guess)
        if(guess<a){
            chance++
        document.getElementById('smaller').style.opacity = 1;
        setTimeout(()=>{
            document.getElementById("smaller").style.opacity = 0;
        },2000)
    }else if(guess>a){
        chance++
        document.getElementById('bigger').style.opacity = 1;
        setTimeout(()=>{
            document.getElementById("bigger").style.opacity = 0;
        },2000)
    }
    if(guess === a){
        let h4Element = document.createElement('h4');
        h4Element.textContent = 'Congratulations';
        let pElement = document.createElement('p');
        pElement.textContent = 'Your score is '+ (100-chance);

        let contentElement = document.getElementById('score');
        contentElement.appendChild(h4Element);
        contentElement.appendChild(pElement);
        setTimeout(()=>{
            location.reload()
        },3000)
     }
    
    }