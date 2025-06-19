let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");

let turnO= true;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=()=>{
    turnO=true;
    enable();
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
            box.style.color="red";
        }
        else{
            box.innerText="X";
            turnO=true;
            box.style.color="blue";
        }
        box.disabled=true;
        checkwinner();
    });
});

const disableboxs=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulations!!! Winner is ${winner}`
    msgcontainer.classList.remove("hide");
    disableboxs();
}
const tie=()=>{
    msg.innerText= `It's a tie...PLAY AGAIN`;
    msgcontainer.classList.remove("hide");
    disableboxs();
}
const checkwinner=()=>{
    for(let pattern of winpattern){
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;

        if(posval1!=="" && posval2!=="" && posval3!==""){

            if(posval1===posval2 && posval2===posval3){
                showwinner(posval1);
                return;
            }
        }
       
    }    
    if ([...boxes].every(box => box.innerText !== "")) {
      tie();
    }
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);