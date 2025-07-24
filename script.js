let currentCapital = 0;
let targetCapital = 0;
let timeframe = 30;
let dailyTarget = 0;

function setChallenge() {
    const startCapital = parseInt(document.getElementById('startCapital').value);
    targetCapital = parseInt(document.getElementById('targetCapital').value);
    timeframe = parseInt(document.getElementById('timeframe').value);
    const maxRisk = parseInt(document.getElementById('maxRisk').value);

    currentCapital = startCapital;
    dailyTarget = (targetCapital - startCapital) / timeframe;
    updateDisplay();
    closeChallengeForm();
}

function updateDisplay() {
    document.getElementById('starting').textContent = currentCapital;
    document.getElementById('current').textContent = currentCapital;
    document.getElementById('target').textContent = targetCapital;
    document.getElementById('dailyTarget').textContent = dailyTarget.toFixed(2);
    const progress = ((currentCapital - document.getElementById('starting').textContent) / (targetCapital - currentCapital) * 100) || 0;
    document.getElementById('circleText').textContent = `${progress.toFixed(0)}%`;
    document.getElementById('circleFill').style.background = `conic-gradient(#32cd32 0%, #32cd32 ${progress}%, #1a001a ${progress}%)`;
    document.getElementById('dailyProgress').textContent = `${progress.toFixed(0)}% Complete`;
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