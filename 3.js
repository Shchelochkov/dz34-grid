

let main = document.getElementById('main');
let out = document.getElementById('out');

let str = '';
const nums = [];
for (let i = 0; i < 25; i++) {
str += '<div id = '+i+'></div>';
nums.push(0);
}
main.innerHTML = str

const divs = document.querySelectorAll('div');
console.log(divs);
for (i in divs) {
    divs[i].onclick = f1
}

function f1 () {
    console.log(this.id);
    let k = Number(this.id);
    nums[k]+=1;
    if (nums[k]>1){nums[k]=0}
    this.innerHTML = '<img src='+pics[nums[k]]+'>'
}
let num = 0
onclick = () => {
    num += 100
    out.innerHTML = num
}

const pics = ['', 'shar.png']

