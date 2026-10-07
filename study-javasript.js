 function checkmark(){
            let mark=Number(document.getElementById('mark').value);
            let name=document.getElementById('name').value;
            if(mark>=0 && mark<=100){
               if(mark>=80){
                    document.getElementById('display').innerHTML=name +" you passed with grade A.";
                }else if(mark>=70){
                    document.getElementById('display').innerHTML=name +" you passed with grade B.";
                }else if(mark>=60){
                    document.getElementById('display').innerHTML=name +" you passed with grade C.";
                }else if(mark>=50){
                    document.getElementById('display').innerHTML=name +" you passed with grade D.";
                }else{
                    document.getElementById('display').innerHTML=name +" you failed";
                }
            }else{
                document.getElementById('display').innerHTML="Enter marks between 0 to 100"
            }
        }
        function display(){
            let name=document.getElementById('name1').value;
            alert(name +" welcome");
        }
        function console1(){
            let nam = document.getElementById('name2').value;
            let course = document.getElementById('name3').value;
            console.log(nam +" is a student how study " +course);
        }
        function writeone(){
            let name = document.getElementById('name4').value;
            let country = document.getElementById('country').value;
            let age = document.getElementById('age').value;
            let text="My name is " +name +"." + "<br>" + "I am " +age + " years old."
            + "<br>" + "I am from " +country + ".";
            document.write(text);
        }
        function checknumber(){
            let value = document.getElementById('number').value;
            let display = document.getElementById('dis');
            if(value%2===0){
                display.innerText=value +" is Even number";
            }else{
                display.innerText=value +" is Odd number";
            }
        }
        let number=0;
        function countnumber(){
            number++;
            document.getElementById('disp').innerHTML= number;
        }
         function decreasenumber(){
            number--;
            document.getElementById('disp').innerHTML= number;
        }
        function shownumber(){
            let num = "";
            if(number>=0){
                for(i=0; i<=number; i++){
                    num +=i +",";
                }
                document.getElementById('displ').innerHTML= num;
            }else{
                for(i=number; i<=0; i++){
                    num += i +",";
                }
                document.getElementById('displ').innerHTML= num;
            }
        }
        function logincheck(){
            let user1=document.getElementById('username').value;
            let pass1=document.getElementById('password').value;
            let user2="Admin";
            let pass2="1234";
            if(user1!==user2 || pass1!==pass2){
                document.getElementById('check').innerText="Invalid username or password.";
            }else{
                document.getElementById('check').innerHTML="Login successful.";
            }
        } 
        function multiplication(){
            let value="";
            let number=document.getElementById('num3').value
            let i,j;
            i=number;
            j=0;
            while (i<=number) {
                while (j<=12) {
                    value+=(i+ "x" + j +"="+ i*j +"<br>");
                    j++;
                }
                i++;
            } 
             document.getElementById('nest').innerHTML= value;
        }
        function loopcheck(){
            let mme=document.getElementById('num12').value;
            let text1, text2, text3;
            text1="";
            text2="";
            text3="";
            for(i=0; i<=mme; i++){
                text1+= i +", "; 
            }
            document.getElementById('hey').innerHTML="numbers:" +"<br>"+ text1;
            for(i=0; i<=mme; i++){
                if(i%2===0){
                    text2+= i +", ";
                }else{
                    text3+= i +", ";
                }
            }
            document.getElementById('her').innerHTML="Even:" +"<br>"+ text2;
            document.getElementById('him').innerHTML="Odd:" +"<br>"+ text3;
        }
function showname(){
    let name =["Rashidi", "Ally", "Shabani", "jumanne", "Layla"];
    let text ="";
    let i=0;
    do{
      text += name[i] +"<br>";
      i++;
    }while(i<name.length)
    document.getElementById('play').innerHTML = text;
}
function showarry(){
    let t, i, j;
     t = "";
       i=1;
    do{
        j=1;
        do{
            t += j +" ";
            j++;
        }while(j<=3)
            t += "<br>";
            i++;
    }while(i<=3)
    document.getElementById('plays').innerHTML = t;
}