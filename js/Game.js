class Game {
  constructor() {}

  getState() {
    database.ref('gameState').on('value',(data)=>{
      gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState:state
    })
  }

  start() {
    player = new Player();
    form = new Form();
    form.display();
  }
}
