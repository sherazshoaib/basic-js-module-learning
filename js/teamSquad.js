const Team = (function() {
	

	let players = [
		{
			name: 'Sharjeel',
			ranking: 4,
			batting: '90%',
			bowling: '0%',

		},

		{
			name: 'hafeez',
			ranking: 3,
			batting: '85%',
			bowling: '80%',

		}
	];


	function addPlayer(player) {
		players.push(player);

	}

	function playersList() {
		return players;
	}

	function removePlayer(playerName) {
		players = players.filter(function(player) {
			return player.name != playerName
		})
	}

	return {
		addPlayer: addPlayer,
		playersList: playersList,
		removePlayer: removePlayer
	}


})();

Team.addPlayer({name:"afridi",ranking:6,batting:"80%",bowling:"75%"});
console.log(Team.playersList());
Team.removePlayer("Sharjeel");
console.log(Team.playersList());
