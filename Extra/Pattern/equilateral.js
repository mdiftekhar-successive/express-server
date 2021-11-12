export default function equilateraltriangle(n) {
let triangle = "";
for ( let rows = 1; rows <= n; rows++ ) {
  for ( let cols = 1; cols <= n - rows; cols++ ) {
    triangle += " ";
  }
  
  for ( let star = 0; star < rows; star++ ) {
    triangle += "* ";
  }
  triangle += "\n";
}
console.log(triangle);
}
