 const student=[
     { id:21, name:'Omar Sani'  },
     { id:31, name:'Maannaaaaa'  },
     { id:32, name:'Moyouri'  },
     { id:36, name:'Depjol'  },
 ];  
   const shadin=[];
 for(let i=0;i<student.length;i++){
     let element=student[i];
      shadin.push(element);
 }
 console.log(shadin);



 
                                    break-continuou
                                   

  const nums=[ 1,2,3,4,5,6,7,8,9];
  for(let i=0; i<nums.length; i++){
   let element=nums[i];
    if(element>5){
     break;
    
   }
   console.log(element);
  }   
 



                       call-apply-in-ObjectMethod

     const normalPerson={
       firstName: 'Nazmul Hasan ',
       lastName:'Shadin',
       slalary:15000,
       getFullName:function(){
         console.log(this.firstName,this.lastName);

       },
       chargeBill:function(amount){
         console.log(this);
         this.slalary=this.slalary-amount;
         return this.slalary;

       }

     }     
 
     const heroPerson={
     
       firstName:'Hero',
       lastName: 'Balam',
       slalary:25000,

     }
     const friendlyPerson={
       firstName:'Hero',
       lastName: 'Golam',
       slalary:25000,
      
     }
       const heroBillcharge= normalPerson.chargeBill.bind(heroPerson);
       heroBillcharge(2000);
       console.log(heroPerson.slalary);

    
     normalPerson.chargeBill(1);

                                             shortcut

   normalPerson.chargeBill.call(heroPerson,300);
   console.log(heroPerson.slalary);                                          



                                  call as bind, apply,call

    const normalPerson={
       firstName:'Nazmul Hasan Shadin',
       lastName:'shadin',
       salary: 1255,
       getFullName: function (){
         console.log(this.firstName, this.lastName);

       },
     chargeBill:function(amount){
       console.log(this);  er object k represent korbea
       this.salary=this.salary-amount;
       return this.salary;
      
     }
 
    }                               
 
    const rabbani={
     firstName:'Anamul Hasan Rabbani',
     lastName:'Nai',
     salary:3445,
    
    
    }
    normalPerson.chargeBill.call(rabbani,522);
    console.log(rabbani.salary);
  




                class thekea onekgula object banano
               class theke a object bananor jonno NEW keward use kora hoyrt





 class Person{
     constructor(firstName,lastName,salary){
         this.firstName=firstName;
         this.lastName=lastName;
         this.salary=salary
     }
 }   
 const hero= new Person('Kamal','rakib','jamal');
 console.log(hero);           



                                      this


  const myObj={
    name: 'kuddus',
    getFullName: function(){
        console.log(this);  ata object k represent korbea

        return 'Mr ' +this.name;
    }

  }             

const anotherObj= {
    name:'Biddut Ali'
}                    
anotherObj.getFullName= myObj.getFullName;
console.log(anotherObj.getFullName);
anotherObj.getFullName();
myObj.getFullName();  


