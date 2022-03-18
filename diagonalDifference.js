let matrix = [
    [1, 2, 3 ,4],
    [4 ,5 ,6 ,5],   
    [9, 8, 9 ,7],
    [9, 8, 9 ,7]
]

/**
In this function we are going to calculate te sum of each matrix's diagonal and then, 
substract the 2 sums obtained 

NB : Just decomment the version you'd like to use 
*/  

//This is the first way to do it
const diagonalDifference = (matrix=[]) => {
    let resultat = [0,0]

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
        if(i==j){ // Checking the condition of the first diagonal and calculate its sum
            resultat[0] += matrix[i][j] 
        }
        if(i+j==matrix.length-1){// Checking the condition of the second diagonal and calculate its sum
            resultat[1] += matrix[i][j]
        }    
        }        
    }
    return Math.abs(resultat[0] - resultat[1]) //Calculate the difference between the two diagonals 
}
//And this is a second and shorter way to do it 

// const diagonalDifference = (matrix=[]) => {
//     let resultat=[0,0]
//     for (let i = 0; i < matrix.length; i++) {
//         resultat[0] += matrix[i][i]   //Sum of the first diagonal
//         resultat[1] += matrix[matrix.length-i-1][i] //Sum of the second diagonal
//     }
//     return Math.abs(resultat[0] - resultat[1]) // Substract the two sums obtained 
// }

console.log(diagonalDifference(matrix));
