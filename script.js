let heads = 0;
let tails = 0;
let headsChance = 0;
let tailsChance = 0;
let coin = document.querySelector('.coin');
let flipBtn = document.querySelector('#flip-button');
let resetBtn = document.querySelector('#reset-button');
let wrapper = document.querySelector('.wrapper');

flipBtn.addEventListener('click', () => {
	let i = Math.floor(Math.random() * 2);
	coin.style.animation = 'none';
	wrapper.style.animation = 'none';
	if(i) {
		setTimeout(() => {
			coin.style.animation = 'spin-heads 3s forwards';
			wrapper.style.animation = 'toss 3s forwards';
		}, 100);
		heads++;
	} else {
		setTimeout(() => {
			coin.style.animation = 'spin-tails 3s forwards';
			wrapper.style.animation = 'toss 3s forwards';
		}, 100);
		tails++;
	}
	setTimeout(updateStats, 3000);
	disableButton();
})

function updateStats(check = true) {
	if(check) {
		headsChance = ((heads / (heads+tails)) * 100).toFixed(2);
		tailsChance = ((tails / (heads+tails)) * 100).toFixed(2);
	}
	document.querySelector('#heads-count').textContent = `Heads: ${heads} (${headsChance}%)`;
	document.querySelector('#tails-count').textContent = `Tails: ${tails} (${tailsChance}%)`;
}

function disableButton() {
	flipBtn.disabled = true;
	resetBtn.disabled = true;
	setTimeout(() => {
		flipBtn.disabled = false;
		resetBtn.disabled = false;
	}, 3000);
};

resetBtn.addEventListener('click', () => {
	coin.style.animation = 'none';
	wrapper.style.animation = 'none';
	heads = 0;
	tails = 0;
	headsChance = 0;
	tailsChance = 0;
	updateStats(false);
})