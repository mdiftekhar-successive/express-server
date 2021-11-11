export default function diamond(n) {
let str = "";
for (let i = 1; i <= n; i++) {
  for (let j = n; j > i; j--) {
    str += " ";
  }
  for (let k = 0; k < i; k++) {
    str += "* ";
  }
  str += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < i; j++) {
    str += " ";
  }
  for (let k = (n - i); k > 0; k--) {
    str += "* ";
  }
  str += "\n";
}
console.log(str);
}
