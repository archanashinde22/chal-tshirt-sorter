// Write your solution below:
const  tshirtSorter = (str) =>  (str.toLowerCase().split("").filter(char => char==='s').join('')+str.toLowerCase().split("").filter(char => char==='m').join('')+str.toLowerCase().split("").filter(char => char==='l').join(''))
//const  tshirtSorter = (str) =>  str.toLowerCase().split("").sort().reverse().join('')
console.log(tshirtSorter('slsmmsllsmsmlmsls'))

