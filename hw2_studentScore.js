/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

let scr = 95;

function calculateGrade(scr){

    switch(scr){
        case (scr==95):
            
            console.log("Outstanding");
        
        break;
        case 2:  if(scr>90)console.log("First grade"); break;
        case 3: if (scr>70 && scr <90) console.log("Second grade"); break;
        case 4 : if (scr>50 && scr <70)console.log("Third grade"); break;
        default: console.log("Yet to try "); break;
    }

}
calculateGrade(scr);