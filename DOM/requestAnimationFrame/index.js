window.onload = () => {
	const start = Date.now();

	class timer {
		constructor() {
			this.init();
		}
		init() {
			this.start = null;
		}
		setTimeout(callBack, time) {
			this.init();
			this.callBack = callBack;
			this.time = time;
			window.requestAnimationFrame((timestamp) => {
				this.fn(timestamp);
			});
		}
		fn(timestamp) {
			if (this.start === null) this.start = timestamp;
			const elapsed = timestamp - this.start;
			if (this.time < elapsed) {
				this.callBack();
			} else {
				window.requestAnimationFrame((timestamp) => {
					// this.fn.call(this, timestamp);
					this.fn(timestamp);
				});
			}
		}
	}
	const step = 1000;
	let timer_ = new timer();
	let timer_1 = new timer();
	let timer_2 = new timer();
	let timer_3 = new timer();

	setTimeout(() => {
		showCurrentTime();
		console.log('setTimeout1');
	}, step);
	setTimeout(() => {
		showCurrentTime();
		console.log('setTimeout2');
	}, step);
	setTimeout(() => {
		showCurrentTime();
		console.log('setTimeout3');
	}, step);
	setTimeout(() => {
		showCurrentTime();
		console.log('setTimeout4');
	}, step);
	setTimeout(() => {
		showCurrentTime();
		console.log('setTimeout4');
	}, step);
	setTimeout(() => {
		showCurrentTime();
		console.log('setTimeout4');
	}, step);
	setTimeout(() => {
		showCurrentTime();
		console.log('setTimeout4');
	}, step);
	setTimeout(() => {
		showCurrentTime();
		console.log('setTimeout4');
	}, step);
	setTimeout(() => {
		showCurrentTime();
		console.log('setTimeout4');
	}, step);
	setTimeout(() => {
		showCurrentTime();
		console.log('setTimeout4');
	}, step);

	timer_.setTimeout(() => {
		showCurrentTime();
		console.log('im here1');
	}, step);
	timer_1.setTimeout(() => {
		showCurrentTime();
		console.log('im here2');
	}, step);
	timer_2.setTimeout(() => {
		showCurrentTime();
		console.log('im here3');
	}, step);
	timer_3.setTimeout(() => {
		showCurrentTime();
		console.log('im here4');
	}, step);

	function showCurrentTime() {
		console.log(Date.now() - start);
	}

	let i = 0;
	while (i < 1000000000) {
		i++;
	}
};
