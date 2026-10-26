let boxes = document.querySelectorAll(".Box")
let resetbtn = document.querySelector(".reset-btn")
let newGameBtn = document.querySelector(".new-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let turnO = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");


};

boxes.forEach((Box) => {
    Box.addEventListener("click", () => {
        if (turnO) {
            Box.innerText = "O"
            Box.style.color = "#8C56D4"
            turnO = false;
        }
        else {
            Box.innerText = "x"
            Box.style.color = "#2596be"
            turnO = true;
        }
        Box.disabled = true;

        checkwinner();
    });

});
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";

    }
};
const showwinner = (winner) => {
    msg.innerText = `congartuiation Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    msg.style.color = "aquamarine"
    disableBoxes();
    resetbtn.addEventListener("click", resetGame);




};
const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {

                showwinner(pos1val)
            }
            
            
 

        }
    }
}
newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);



