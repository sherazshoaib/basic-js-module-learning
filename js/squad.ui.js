let playerForm = document.forms[0];
let	playerListTable = document.getElementById('table');
let	playerListBody = playerListTable.querySelector("tbody");


playerForm.addEventListener("submit", (event) => {
	event.preventDefault();
	Team.addPlayer({
		name: playerForm.playerName.value,
		ranking: playerForm.ranking.value,
		batting: playerForm.batting.value,
		bowling: playerForm.bowling.value,	
	})
	console.log(Team.playersList());
	render(Team.playersList());
})

// deligation work start
playerListBody.addEventListener('click', (event) => {
	if (event.target.localName == "button") {
		event.target.parentNode.parentNode.classList.add('hide');
		setTimeout(() => {
			Team.removePlayer(event.target.dataset.player);
			render(Team.playersList());
		}, 1001)
	}
}) 









function render(list) {
	playerListBody.innerHTML = "";
	for (var i = 0; i < list.length; i++) {
		let tr = document.createElement('tr');
		let td1 = document.createElement('td');
		let td2 = document.createElement('td');
		let td3 = document.createElement('td');
		let td4 = document.createElement('td');
		let td5 = document.createElement('td');
		td1.textContent = list[i].name;
		td2.textContent = list[i].ranking;
		td3.textContent = list[i].batting;
		td4.textContent = list[i].bowling;
		td5.innerHTML = '<button data-player="' + list[i].name + '" class="btn btn-danger">Delete</button>';
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);
		playerListBody.appendChild(tr);
	}

}

render(Team.playersList());