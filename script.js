let color = [
    "#E53CEB",
    "#00EA24",
    "#E83155",
    "#1E00EB",
    "#E8BC31",
    "#CE31E8",
    "#B5EA17",
    "hotpink"
]
let background = document.querySelector(".back-ground");
// console.log(background);
let button = () =>{
    let num = Math.floor(Math.random() * 8);
    background.style.backgroundColor = color[num]
}
