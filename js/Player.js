class Player {
    constructor() {
        this.index = null;
        this.answer = 0;
        this.name = null;
    }

    getCount() {
        var playerCountRef = database.ref('contestantCount');
        playerCountRef.on("value", (data) => {
            playerCountRef = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        console.log(this.name,this.answer);
        database.ref(playerIndex).set({
            name: this.name,
            answer: this.answer
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
}
