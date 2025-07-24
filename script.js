let currentCapital = 0;
let targetCapital = 0;
let startingCapital = 0; // Added to track the initial capital
let timeframe = 30;
let dailyTarget = 0;

function setChallenge() {
    startingCapital = parseInt(document.getElementById('startCapital').value);
    targetCapital = parseInt(document.getElementById('targetCapital').value);
    timeframe = parseInt(document.getElementById('timeframe').value);
    const maxRisk = parseInt(document.getElementById('maxRisk').value);

    currentCapital = startingCapital; // Set current to starting value
    dailyTarget = (targetCapital - startingCapital) / timeframe;
    updateDisplay();
    closeChallengeForm();
}

function updateDisplay() {
    document.getElementById('starting').textContent = startingCapital;
    document.getElementById('current').textContent = currentCapital;
    document.getElementById('target').textContent = targetCapital;
    document.getElementById('dailyTarget').textContent = dailyTarget.toFixed(2);
    const progress = ((currentCapital - startingCapital) / (targetCapital - startingCapital) * 100) || 0;
    document.getElementById('circleText').textContent = `${Math.min(progress, 100).toFixed(0)}%`; // Cap at 100%
    document.getElementById('circleFill').style.background = `conic-gradient(#32cd32 0%, #32cd32 ${Math.min(progress, 100)}%, #1a001a ${Math.min(progress, 100)}%)`;
    document.getElementById('dailyProgress').textContent = `${Math.min(progress, 100).toFixed(0)}% Complete`;
}

function addProfit() {
    const profit = parseInt(document.getElementById('profitInput').value) || 0;
    currentCapital += profit;
    document.getElementById('today').textContent = profit;
    updateDisplay();
    document.getElementById('profitInput').value = '';
}

function openChallengeForm() {
    document.getElementById('challengeForm').style.display = 'block';
}

function closeChallengeForm() {
    document.getElementById('challengeForm').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('challengeForm')) {
        closeChallengeForm();
    }
};
