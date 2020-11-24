const btn = document.querySelector('button');

// setTimeout(() => {
// 	btn.style.transform = 'translateX(100px)';
// 	setTimeout(() => {
// 		btn.style.transform = 'translateX(200px)';
// 		setTimeout(() => {
// 			btn.style.transform = 'translateX(300px)';
// 			setTimeout(() => {
// 				btn.style.transform = 'translateX(400px)';
// 				setTimeout(() => {
// 					btn.style.transform = 'translateX(500px)';
// 				}, 1000);
// 			}, 1000);
// 		}, 1000);
// 	}, 1000);
// }, 1000);

const moveX = (element, amount, delay, successCallback, failCallback) => {
	setTimeout(() => {
		const bodyBoundary = document.body.clientWidth;
		const currLeft = btn.getBoundingClientRect().left;
		const currRight = btn.getBoundingClientRect().right;

		if (currRight + amount > bodyBoundary) {
			console.log("Too FAR! Can't do that");
		} else {
			element.style.transform = `translateX(${currLeft + amount}px)`;
			successCallback();
		}
	}, delay);
};

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback

// LOOK AT THIS UGLY MESS!
moveX(
	btn,
	300,
	1000,
	() => {
		//success callback
		moveX(
			btn,
			300,
			1000,
			() => {
				//success callback
				moveX(
					btn,
					300,
					1000,
					() => {
						//success callback
						moveX(
							btn,
							300,
							1000,
							() => {
								//success callback
								moveX(
									btn,
									300,
									1000,
									() => {
										//success callback
										alert('YOU HAVE A WIDE SCREEN!');
									},
									() => {
										//failure callback
										alert('CANNOT MOVE FURTHER!');
									}
								);
							},
							() => {
								//failure callback
								alert('CANNOT MOVE FURTHER!');
							}
						);
					},
					() => {
						//failure callback
						alert('CANNOT MOVE FURTHER!');
					}
				);
			},
			() => {
				//failure callback
				alert('CANNOT MOVE FURTHER!');
			}
		);
	},
	() => {
		//failure callback
		alert('CANNOT MOVE FURTHER!');
	}
);
