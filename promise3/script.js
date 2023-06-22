const fox_btn = document.getElementById('fox_btn');
const dog_btn = document.getElementById('dog_btn');
const fox_result = document.getElementById('fox_result');
const dog_result = document.getElementById('dog_result');

fox_btn.addEventListener('click', getRandomfox);
dog_btn.addEventListener('click', getRandomDog);

function getRandomfox() {
	fetch('https://randomfox.ca/floof/')
		.then(res => res.json())
		.then(data => {
			fox_result.innerHTML = `<img src=${data.image} alt="fox" />`
		});
}

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}
