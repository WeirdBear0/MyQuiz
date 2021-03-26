class Quiz{
    constructor() {

    }
    getState() {
        var stateRef = database.ref('gameState');
        stateRef.on("value",  (data) => {
            gameState = data.val();
            console.log(gameState)
        })
    
      }
    
      update(state) {
        database.ref('/').update({
          gameState: state
        });
      }
    
      async start() {
        if (gameState === 0) {
          console.log("start called")
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if (playerCountRef.exists()) {
            playerCountRef = playerCountRef.val();
            player.getCount();
          }
          question = new Question()
          question.display();
        }
      }

    
}
