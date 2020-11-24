const btn = document.querySelector('button');

const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elementRight = element.getBoundingClientRect().right;
			const currentLeft = element.getBoundingClientRect().left;
			if (elementRight + amount > bodyBoundary) {
				reject({ bodyBoundary, elementRight, amount });
			} else {
				element.style.transform = `translateX(${currentLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

moveX(btn, 300, 1000)
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.catch(({ bodyBoundary, elementRight, amount }) => {
		console.log(`Body is ${bodyBoundary}px wide`);
		console.log(`Element's right is at ${elementRight}`);
		console.log(`amount to move is ${amount}px`);
	});
