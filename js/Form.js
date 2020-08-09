class Form {

  constructor() {
    this.input = createInput("Name");
    this.button1 = createButton("Single Player");
    this.button2=createButton("MultiPlayer");
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.play=createButton("PLAY");
  }
  hide(){
    this.greeting.hide();
    this.button1.hide();
    this.button2.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button1.position(displayWidth/2 + 30, displayHeight/2);
    this.button2.position(displayWidth/2 + 30, displayHeight/2+20);
    this.reset.position(displayWidth-100,20);

    this.button2.mousePressed(()=>{
      this.button1.hide();
      this.input.hide();
      this.button2.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.button1.mousePressed(()=>{
      //player.SingleplayerupdateCount(1);
      player.name = this.input.value();
      this.button1.hide();
      this.input.hide();
      this.button2.hide();
      this.play.position(displayWidth/2 - 70, displayHeight/2);
      this.greeting.html("Welcome to the car racing game .Hello " + player.name)
      this.greeting.position(displayWidth/2 - 90, displayHeight/4);
      game.update(0);
      player.SingleplayerupdateName(player.name);
      console.log(player.name);
    });
    this.play.mousePressed(()=>{
      player.SingleplayerupdateCount(1);
    })
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
}
