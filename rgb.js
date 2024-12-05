
let background = document.body;
let colorCode = background.querySelector(".p2");
let btn = background.querySelector("button");
let para = background.querySelectorAll("p");
let button = () =>{
    // alert("it is work");
    let red = Math.floor(Math.random() * 257);
    let green = Math.floor(Math.random() * 257);
    let blue = Math.floor(Math.random() * 257);
    let red1 = Math.floor(Math.random() * 257);
    let green1 = Math.floor(Math.random() * 257);
    let blue1 = Math.floor(Math.random() * 257);
    background.style.background = `rgb(${red},${green},${blue})`;
    colorCode.innerText = `rgb= ${red},${green},${blue}`;
    para.forEach((a) =>{
        
        a.style.color = `rgb(${red1},${green1},${blue1})`;
    })
}
// floor 344.2323 =344 -344.2323 = -345
// ceil 344.2323 =345 -344.2323 = -343
// trunc => -34.34=-34
// trunc help to remove the decimal point.
//  if it is negative or postitive 
// value like this 45.34=45 //output or -45.34= -45 //output
