 //option2 for button click option 2
 function makeYellow(){
            document.body.style.backgroundColor='yellow';
        }
        function makeRed(){
            document.body.style.backgroundColor='red';
        }
    //onclick by id option 3
    const btnMakeBlue= document.getElementById('btn-make-blue');
       //console.log(btnMakeBlue);
       btnMakeBlue.onclick = function(){
        document.body.style.backgroundColor='blue';
       }
//option 4
    const btnMakePurple=document.getElementById('btn-make-purple');
       btnMakePurple.onclick=makePurple;
       function makePurple(){
        document.body.style.backgroundColor="purple";
       }