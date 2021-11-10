let str = '';
pyramid('differentpyramid',5);

function pyramid(type,rows){
    n = rows;
    if(type=='halfpyramid'){
        for(let i = 1; i <= n;i++) {
            for(let j = 1; j <= i;j++) {
                str += j+' ';
            }
            str += '\n';
        }
        console.log(str);
    }
    
else if(type == 'fullpyramid') {

let str = "";
for(let i=1;i <= n; i++) {
    for(let space = 1; space <= n-i; space++) {
        str += '  ';   
    }
    let m = i;
    let p = 2 * i - 2;
    for(let j = 1; j <= i; j++) {
        str += `${m} `;
        m=m+1;
    }
    for(let k = 2; k <= i; k++) {
        str += `${p} `;
        p=p-1;
    }

    str += "\n";
}
console.log(str);
}
else if(type == 'differentpyramid'){
 let str = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces star
  for (let space = 1; space <= 2 * n -i-2; space++) {
    str += "*";
  }
  let m = i;
  // printing star
  for (let k = 0; k < i; k++) {
    str += `${m}*`;
  }
  //printing second spaces star
  for (let space = 1; space <= 2 * n -i-2; space++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
}
}