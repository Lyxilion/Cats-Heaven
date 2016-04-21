var tutorial = function(game){
	soundButton=null;
}
tutorial.prototype = {
  	create: function(){
		this.game.add.sprite(0,0,'tutorial');
		soundButton = this.game.add.button(974,30,"sound",this.soundChange,this,1,0);
		game.add.tween(gameTitle).to({ y: 30 }, 2000, Phaser.Easing.Elastic.InOut, true, 0);
		var playButton = this.game.add.button(975,700,"play",this.playTheGame,this,1,0);
		playButton.anchor.setTo(1,1);
	},
	playTheGame: function(){
		this.game.state.start("TheGame");
	},
	soundChange : function() {
		if(song.paused) {
			soundButton.setFrames(1,0);
			song.resume();
		}
		else {
			soundButton.setFrames(0,1);
			song.pause();
		}
	}
}