export default function EquilateralTriangle(size) {
let triangle = "";
for ( let rows = 1; rows <= size; rows++ ) {
  for ( let cols = 1; cols <= size - rows; cols++ ) {
    triangle += " ";
  }
  
  for ( let star = 0; star < rows; star++ ) {
    triangle += "* ";
  }
  triangle += "\n";
}
console.log(triangle);
}
