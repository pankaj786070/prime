function palindrome(palin){
 // let palin="madam";
let bag="";
for(let i=palin.length-1; i>=0; i--){
bag+=palin[i]
}if(palin==bag){
	return true;
}
  return false;
}
let ans=palindrome("madam");
console.log(ans)