 document.getElementById('btn-update-title').addEventListener('click',function(){
            const pageTitleElement=document.getElementById('page-title');
            console.log(pageTitleElement);
            pageTitleElement.innerText="update page title text"
        })


        //text change when log in
         document.getElementById('btn-login').addEventListener('click',function(){
       const userInfoEl=document.getElementById('user-info');
       userInfoEl.innerText='user logged in successfully';
       })