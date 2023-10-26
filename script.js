let turn = "X";
let gameOver = false



// Function to change the turn  `
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}


// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2,],
        [3, 4, 5,],
        [6, 7, 8,],
        [0, 3, 6,],
        [1, 4, 7,],
        [2, 5, 8,],
        [0, 4, 8,],
        [2, 4, 6,]
    ];

    for (let i = 0; i < wins.length; i++) {
        const [a, b, c,] = wins[i];
        if (
            boxtext[a].innerText &&
            boxtext[a].innerText === boxtext[b].innerText &&
            boxtext[a].innerText === boxtext[c].innerText
        ) {
            document.querySelector('.info').innerText = boxtext[a].innerText + " wins";
            gameOver = true;
            const imgElement = document.querySelector('.imgbox img');
            imgElement.src = 'https://media.tenor.com/xhYSTO_hr4IAAAAC/kanahei-excited.gif';
            imgElement.style.width = "200px"
        
        } 
    }
};

// Function to check for a Tie
const checkTie = () => {
    let boxtext = document.getElementsByClassName('boxtext');
     let isTie = true ;

     for(let i = 0; i < boxtext.length; i++) {
        if(boxtext[i].innerText === ''){
            isTie = false;
            break;
        }
     } 
     if(isTie) {
        document.querySelector('.info').innerText = " Game  Ties";
        gameOver = true;
        const imgElement = document.querySelector('.imgbox img');
         imgElement.src = 'https://media0.giphy.com/media/dLlvtWT9K1e6S5RiPq/source.gif';
         imgElement.style.width = "200px"
     }
};


// Game Logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            checkTie();
            if (!gameOver){
                document.querySelector('.info').innerText = "Turn for " +turn
            }       
        }
    })
});


// reset button;
reset.addEventListener('click', () =>{
    let boxTexts = document.querySelectorAll('.boxtext');
    Array.from(boxTexts).forEach(element =>{
        element.innerText = "";
    });

    gameOver = false
    document.querySelector('.info').innerText = "Turn for " + ' ' + turn
    document.querySelector('.imgbox img').style.width = "0px"
})