
                          space 

 const firstName="justin";
 const lastName="timberlake";
 const fullName= firstName + " " + lastName + "is a good girl";
  const fullName2= `${firstName} ${lastName} is a good boy `

 
 const multiline=`i love you 
 i need you
   i habijabi you`
 console.log(multiline);


                     function

  function doubleit(num){
     return num*2;

  }
 const result=doubleit(5);
 console.log(result); 
                       

                      function2 


  const doubleit=function (num){
     return num*2;

  }


                     Arrow function 3

   const doubleit=num =>num*2;    
   const doubleit=(x,y)=> x + y;    
  
   const vishal= (x,y)=>{
     const sum= x + y;
     const diff = x - y;
     const result= sum * diff;
        return result;
   }

    const result3=vishal(12,3);
    console.log(result3);

                  
           three dot (koikta array k akshathea dokano)

  const age=[ 23,34,54,34];
  const ages=[34,45,34];
  const age1=[34,34,5,64,3];


   2 ti array k akshatehe a korbo  
 const allAges =[... age, ...ages, ...age1];
 console.log(allAges);


                         class OBJECT
                       
                        
   class Student{
         constructor( name , id){
             this.id=id;
             this.name=name;
             this.school= "Bashia High School";

         }
   }                       

    Student1=new Student("Nazmul Hasan Shadin", 1610499711);
    Student2=new Student( "rabbani Hasan ", 130781);

    console.log(Student1 ,Student2);
                                     

                          class object 2 

    class Parent{
     constructor(){
         this.fatherName="Nazmul Hasan Shadin";

     }
    }


  class Child extends Parent{
     constructor(name){
         super();
         this.name=name;
     }
  }                         
                              
    const baby= new Child("Razzak Bin Yusuf");
    console.log(baby);
 



                            destructure ( boro objectgular moddea jkono akta value khoja)


 const person={ name:"shadin", age:165,job:'google',address:'mohakhali', friends:['shadin','rom','tom']}  
                     
 const { age, name}=person;
 console.log(age);

