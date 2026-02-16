//parent node
const mainContainer=document.getElementById("main-container");
// console.log(mainContainer);

//child node
const placeSection=document.createElement('section');

//create h1
const h1=document.createElement('h1');
h1.innerText="place that I want to visit";
placeSection.appendChild(h1);



const ul=document.createElement('ul');
const li1=document.createElement('li');
li1.innerText='bandorban';
ul.appendChild(li1);

const li2=document.createElement('li');
li2.innerText="sundarban";
ul.appendChild(li2);
placeSection.appendChild(ul);


//append placesection to the main container
mainContainer.appendChild(placeSection);


//easier to create HTML
const bookSection=document.createElement('section');
bookSection.innerHTML=`
<h1>I want to read books</h1>
<ul>
<li>physics</li>
<li>chemistry</li>
<li>Biology</li>
<li>math</li>
</ul> 
`
mainContainer.appendChild(bookSection);