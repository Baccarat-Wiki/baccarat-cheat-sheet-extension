const $thirdPlayerHandSelect = document.getElementById('third-player-hand');
const $thirdBankerHandSelect = document.getElementById('third-banker-hand');
const $thirdDecision = document.getElementById('third-decision');


const decisions = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,], 
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1,], 
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0,], 
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0,], 
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0,], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,], 
];

const convertDecision = (decision, bh) => (
    (bh == 8 || bh == 9) ? 'NAT. STAND' : (decision ? 'HIT' : 'STAND')
);

const styleDecision = (decision) => (
    decision ? 'success' : 'warning'
);

const outputDecision = () => {
    let hands = {
        player: parseInt($thirdPlayerHandSelect.value, 10),
        banker: parseInt($thirdBankerHandSelect.value, 10),
    };
    let decision = decisions[hands.banker][hands.player];

    $thirdDecision.innerText = convertDecision(decision, hands.banker);
    $thirdDecision.classList.remove('warning', 'success', 'undefined');
    $thirdDecision.classList.add(styleDecision(decision));

    console.log(hands, decision, styleDecision(decision));
};

$thirdPlayerHandSelect.addEventListener('change', outputDecision);
$thirdBankerHandSelect.addEventListener('change', outputDecision);
outputDecision();
