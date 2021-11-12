export default function diamond(n) {
let diamond = "";
for ( let rows = 1; rows <= n; rows++ ) {
  for ( let cols = n; cols > rows; cols-- ) {
    diamond += " ";
  }
  for ( let star = 0; star < rows; star++ ) {
    diamond += "* ";
  }
  diamond += "\n";
}
for ( let rows = 1; rows <= n - 1; rows++ ) {
  for ( let cols = 0; cols < rows; cols++ ) {
    diamond += " ";
  }
  for ( let star = (n - rows); star > 0; star-- ) {
    diamond += "* ";
  }
  diamond += "\n";
}
console.log(diamond);
}
