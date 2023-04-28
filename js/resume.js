 // var g = document.getElementsByTagName('body').innerHTML = "Anish Mandal";
 // document.write(g)
 // old process

 function addnewWEField(){
 	// document.write("Anish Clicked")

 	// create node 

 	let newNode = document.createElement('textarea');
 	newNode.classList.add('form-control');
 	newNode.classList.add('weField');
 	newNode.classList.add('mt-2');
 	newNode.setAttribute("rows",3);
 	newNode.setAttribute("placeholder","Enter Work Experience");

 	// insert reference add button
 	let weOb = document.getElementById('we');
 	let weAddButtonOb= document.getElementById('weAddButton');

 	// now adding fields in elements target

 	weOb.insertBefore(newNode,weAddButtonOb)

 }
 // es6 process
  addnewAQField = () =>{
  	 	// create node 

 	let newNode = document.createElement('textarea');
 	newNode.classList.add('form-control');
 	newNode.classList.add('aqField');
 	newNode.classList.add('mt-2');
 	newNode.setAttribute("rows",3);
 	newNode.setAttribute("placeholder","Enter Academic Qualification");

 	// insert reference add button
 	let aqOb = document.getElementById('aq');
 	let aqAddButtonOb= document.getElementById('aqAddButton');

 	// now adding fields in elements target

 	aqOb.insertBefore(newNode,aqAddButtonOb)
 }

 // creating generateCv fxn and printcv fxn

 generateCv = () => {
 	// alert('generating')


 	// picking data 
 	let nameField = document.getElementById("nameField").value;

 	let tName = document.getElementById('tName',);

 	// putting value
 	tName.innerHTML = nameField;


 	// direct

// name 
 	document.getElementById('tName2').innerHTML= nameField;
 	document.getElementById('tNumber').innerHTML= document.getElementById('contactField').value;
 	// address
 	document.getElementById('tAddress').innerHTML= document.getElementById('addressField').value;
 	// links
 	document.getElementById('tFb').innerHTML= document.getElementById("fbField").value;
 	document.getElementById('tInsta').innerHTML= document.getElementById("instaField").value;
 	document.getElementById('tLinked').innerHTML= document.getElementById("linkedField").value;
 	
 	// objective
 	document.getElementById('tObj').innerHTML= document.getElementById("objectiveField").value;
 	// Working Exp
 	 let wes = document.getElementsByClassName("weField");
 	 // create li's

 	 let str="";

 	 for(let e of wes){
 	 	str= str + `<li> ${e.value} </li>`;
 	 }
 	document.getElementById('weT').innerHTML = str;


 	// Academic Qualifications
 	 let aqs = document.getElementsByClassName("aqField");
 	 // create li's

 	 let aqstr="";

 	 for(let e of aqs){
 	 	aqstr= aqstr + `<li> ${e.value} </li>`;
 	 }
 	document.getElementById('aqT').innerHTML = str;

 	// for images dynamic 

 	// fetch

 	let file = document.getElementById("imageField").files[0];

// creating reader image
	let reader = new FileReader()

	// reading file data
	reader.readAsDataURL(file);

	// using reader rsult

	console.log(reader.result);

	reader.onloadend = () => {
	document.getElementById('imgT').src=reader.result;
		
	}

	// document.getElementById('imgT').src=reader.result;



 	// for images dynamic end

 	// hide and show form and template

 	document.getElementById("cv-form").style.display = "none";
 	document.getElementById("cv-template").style.display = "block";

 } 


// print cv
 printCV =()=>{
 	// alert('printing')
 	window.print()

 }