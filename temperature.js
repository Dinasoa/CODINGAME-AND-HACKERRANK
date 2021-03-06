// TEMPERATURE PUZZLE FROM CODINGAME 
const n = 10

let inputs = [-5 ,-4 , -2 , 12 , -40,  4 , 2 , 18 , 11 , 5]; // the number of temperatures to analyse
let closest = inputs[0]

// This function will find among the inputs the temperature closest to zero
const closestToZero = () => {

for (let i = 0; i < inputs.length ; i++) { //Cycle through the array
     const t = parseInt(inputs[i]); // a temperature expressed as an integer ranging from -273 to 5526
    if(n==0){
        return 0
    }
   if(inputs.length==1){
       return inputs[0]  
    }
   
   if(Math.abs(t) < Math.abs(closest)){ //Checking if the absolute value of t is less than the absolute value of closest 
       closest = t // if so , so the closest temperature is t
   } 
   if (Math.abs(t) == Math.abs(closest) && (t) > (closest)) { //Checking if the absolute value of t is same as the absolute value of closest and t is greater than closest
       closest = t //if so , so the closest temperature is t
   }
}

return closest 

}
console.log(closestToZero(n,inputs))
