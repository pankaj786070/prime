let a=13;
function number (argument) {
	let counter=0;
for(let i=0; i<a.length; i++){
  if(a%i==0){
  	counter++;
  }
}if(counter==2){
	return true;
}else{
	return false;
}
}
if(counter==true){
	console.log("yes it is prime")
}else{
	console.log("no it is not prime")
}