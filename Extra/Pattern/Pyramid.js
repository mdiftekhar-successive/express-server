export default function Pyramid(type, rows) {
    let size = rows;
    let pyramid = '';
    if (type =='HalfPyramid') {
        for( let row = 1; row <= size; row++ ) {
            for( let col = 1; col <= row; col++ ) {
                pyramid += col+' ';
            }
            pyramid += '\n';
        }
        console.log(pyramid);
    }
    
else if ( type == 'FullPyramid' ) {

let pyramid = "";
for( let row = 1; row <= size; row++ ) {
    for( let space = 1; space <= size-row; space++) {
        pyramid += '  ';   
    }
    let SpaceRow = row;
    let SpaceCol = 2 * row - 2;
    for( let col = 1; col <= row; col++ ) {
        pyramid += `${SpaceRow} `;
        SpaceRow = SpaceRow + 1;
    }
    for( let number = 2; number <= row; number++ ) {
        pyramid += `${SpaceCol} `;
        SpaceCol = SpaceCol - 1;
    }

    pyramid += "\n";
}
console.log(pyramid);
}

else if ( type == 'DifferentPyramid' ) {
 let pyramid = "";
for ( let row = 1; row <= size; row++) {
  for ( let space = 1; space <= 2 * size -row-2; space++ ) {
    pyramid += "*";
  }
  let stars = row;
  for ( let star = 0; star < row; star++ ) {
    pyramid += `${stars}*`;
  }
  for ( let space = 1; space <= 2 * size -row-2; space++ ) {
    pyramid += "*";
  }
  pyramid += "\n";
}
console.log(pyramid);
}
}
