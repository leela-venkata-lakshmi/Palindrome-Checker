
const result=document.querySelector("#result");
const btn=document.querySelector("#check-btn");


btn.addEventListener("click",()=>{
const textInput=document.getElementById("text-input").value;
  if(textInput==="")
  {
    console.log(textInput.value);
    alert("Please input a value");
    
  }
else 
{
   const cleanInput = textInput.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
   const rev=cleanInput.split('').reverse().join('');
   if(rev===cleanInput){
     result.innerHTML=`<b>${textInput}</b>  is a palindrome.`;
   }else{
          result.innerHTML=`<b>${textInput}</b> is not a palindrome.`;

   }
   
  
}
});
 
