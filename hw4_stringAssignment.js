/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/
/*
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/
let str ="";

function reverseString(str){
    let chars = str.toLowerCase().split("")
    let s="";// If we have not assinged null as s="" it gives {undefinedELGAEQ}

    for (let i = chars.length-1; i >= 0; i--) {
        s = s +chars[i]
    }
    console.log(s+"");
  //  console.log(typeof(s));
    //console.log(typeof(str));

    if(s.toLowerCase() === str.toLowerCase()){
        console.log(str+" is a  Palindorme")
    }else
        console.log(str+" is not a  Palindorme")

}
reverseString("Mam")
reverseString("Man")