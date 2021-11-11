export default function equilateraltriangle(n) {
let str = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    str += " ";
  }
  
  for (let k = 0; k < i; k++) {
    str += "* ";
  }
  str += "\n";
}
console.log(str);
}
