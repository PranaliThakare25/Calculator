(function(){
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let clear=document.querySelector('.btn-clear');
    let equal=document.querySelector('.btn-equal');
    
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value=e.target.dataset.num;
            screen.value += value;
        })
    });
    equal.addEventListener('click',function(e){
        // try{
        //     screen.value=eval(screen.value)
        // }catch(error){
        //     screen.value='Error';
        // }

        
        if(screen.value ==='') {
          screen.value ="please enter";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
         }
    });
    clear.addEventListener('click',function(e){
        screen.value = "";
    });
})();
