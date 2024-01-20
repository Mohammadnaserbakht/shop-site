let getdiv = document.getElementById('container')
let productnum =200;
let rowcount = 4*3;
let currentpage = 1;
function cartgenarator(){
    // getdiv= ''
let cartnum = productnum/rowcount
console.log(cartnum)
let i =0
for(i =1; i < cartnum +1; ++i){
    console.log(i)
newdiv = document.createElement('div')
newdiv.innerHTML = i
getdiv.appendChild(newdiv)



}


}
cartgenarator()