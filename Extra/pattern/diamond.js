export default  function diamond(size) {
let diamond = "";
for ( let rows = 1; rows <= size; rows++ ) {
  for ( let cols = size; cols > rows; cols-- ) {
    diamond += " ";
  }
  for ( let star = 0; star < rows; star++ ) {
    diamond += "* ";
  }
  diamond += "\n";
}
for ( let rows = 1; rows <= size - 1; rows++ ) {
  for ( let cols = 0; cols < rows; cols++ ) {
    diamond += " ";
  }
  for ( let star = (size - rows); star > 0; star-- ) {
    diamond += "* ";
  }
  diamond += "\n";
}
console.log(diamond);
}
