// The way we make a promise

// const willGetYouDog = new Promise((resolve, reject) => {
// 	const rand = Math.random();
// 	if (rand < 0.5) {
// 		resolve();
// 	} else {
// 		reject();
// 	}
// });

// willGetYouDog
// 	.then(() => {
// 		console.log('Yay! We got a dog');
// 	})
// 	.catch(() => {
// 		console.log(':( no dog');
// 	});

// Using setTimeout to simulate an actual request.

// const willGetYouDog = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		const rand = Math.random();
// 		if (rand < 0.5) {
// 			resolve();
// 		} else {
// 			reject();
// 		}
// 	}, 5000);
// });

// willGetYouDog
// 	.then(() => {
// 		console.log('Yay! We got a dog');
// 	})
// 	.catch(() => {
// 		console.log(':( no dog');
// 	});

// RETURNING PROMISES FROM FUNCTIONS
// const makeDogPromise = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const rand = Math.random();
// 			if (rand < 0.5) {
// 				resolve();
// 			} else {
// 				reject();
// 			}
// 		}, 5000);
// 	});
// };

// makeDogPromise()
// 	.then(() => {
// 		console.log('We got a Dog :)');
// 	})
// 	.catch(() => {
// 		console.log(':( No Dog');
// 	});

//RESOLVING/REJECTING W/VALUES

// const fakeRequest = (url) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			const pages = {
// 				'/users': [ { id: 1, username: 'Bilbo' }, { id: 2, username: 'Tilda' } ],
// 				'/about': 'This is the about page'
// 			};
// 			const data = pages[url];
// 			if (data) {
// 				resolve({ status: 200, data });
// 			} else {
// 				reject({ status: 404 });
// 			}
// 		}, 5000);
// 	});
// };

// fakeRequest('/users')
// 	.then((res) => {
// 		console.log('Status Code', res.status);
// 		console.log('Data HERE', res.data);
// 		console.log('REQUEST WORKED!');
// 	})
// 	.catch((res) => {
// 		console.log(res.status);
// 		console.log('Request failed');
// 	});

// fakeRequest('/about')
// 	.then((res) => {
// 		console.log('Status Code', res.status);
// 		console.log('Data HERE', res.data);
// 		console.log('REQUEST WORKED!');
// 	})
// 	.catch((res) => {
// 		console.log(res.status);
// 		console.log('Request failed');
// 	});

const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users': [ { id: 1, username: 'Bilbo' }, { id: 5, username: 'Esmeralda' } ],
				'/users/1': {
					id: 1,
					username: 'Bilbo',
					upvotes: 365,
					city: 'Porto',
					topPostId: 454321
				},
				'/users/5': {
					id: 1,
					username: 'Esmeralda',
					upvotes: 571,
					city: 'Los Angeles'
				},
				'/posts/454321': {
					id: 454321,
					title: 'Ladies and Gentlemen, may I introduce my pet cat, Marvin'
				},
				'/about': 'This is the about page'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data });
			} else {
				reject({ status: 404 });
			}
		}, 1000);
	});
};

fakeRequest('/users')
	//All subsequent promises depend on the resolution of their predecessors
	.then((res) => {
		const id = res.data[0].id;
		return fakeRequest(`/users/${id}`);
	})
	.then((res) => {
		const postId = res.data.topPostId;
		return fakeRequest(`/posts/${postId}`);
	})
	.then((res) => {
		console.log(res);
	})
	//The catch block works for all .thens
	.catch((err) => {
		console.log('Status reflects failure', err.data);
	});
