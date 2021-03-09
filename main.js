'use strict';


const contanirt = document.getElementById('contanier');
const mainTable =document.createElement('table');
contanirt.appendChild(mainTable);


const email = document.getElementById('Email');
const mobile =  document.getElementById('number');
const tuition =  document.getElementById('tuition');

let id = 1;
function Student (email , mobile , tuition){
    this.email = email;
    this.mobile = mobile;
    this.tuition = tuition;
    this.id = id;
    this.name = email.split('@',[1]);
     this.age = getRandomInt(18, 24);
    Student.all.push(this)

}
this.id +=1;
Student.all =[];

const button = document.querySelector('button')
button.addEventListener('click', saveData());

Student.prototype.saveData= function(){
let studentData = JSON.parse(localStorage.getItem('Student.all'));


}
Student.prototype.getData= function(){
    JSON.stringify('studentData',localStorage.getItem('Student.all'))

}


function tableHead (){
const tableHead = document.createElement('th');
mainTable.appendChild(tableHead);

const tdEl1 = document.createElement('td');
tableHead.appendChild(tdEl1);
tdEl1.textContent = 'id';

const tdEl2 = document.createElement('td');
tableHead.appendChild(tdEl2);
tdEl2.textContent = 'Name';

const tdEl3 = document.createElement('td');
tableHead.appendChild(tdEl3);
tdEl3.textContent = 'Email';

const tdEl4 = document.createElement('td');
tableHead.appendChild(tdEl4);
tdEl4.textContent = 'Mobile';

const tdEl5 = document.createElement('td');
tableHead.appendChild(tdEl5);
tdEl5.textContent = 'Age';

const tdEl6 = document.createElement('td');
tableHead.appendChild(tdEl6);
tdEl6.textContent = 'Tuition';
}


Student.prototype.render = function(){
    const contanirt = document.getElementById(contanier);

}



tableHead ();





function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

 const amna = new Student('amna@yahoo.com' ,'07777777' , '200' );
 const allll = new Student('alll@yahoo.com' ,'07777755577' , '2000' );
 console.log(amna);
 console.log(amna.name);
 console.log(allll);
 console.log(allll.name);
 console.log(allll.age);


