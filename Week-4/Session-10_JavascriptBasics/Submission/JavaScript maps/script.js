function calcWordFrequencies() {
   let inputString = prompt("Enter string:")
   let words = inputString.split(" ")
   
   let count = {}
   words.forEach(e => count[e] ? count[e]++ : count[e] = 1 );

   for(let word in count){
    console.log(`${word} ${count[word]}`)
   }

}