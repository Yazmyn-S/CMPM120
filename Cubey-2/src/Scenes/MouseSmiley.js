class MouseSmiley extends Phaser.Scene {
    constructor() {
        super("mouseSmiley");
        this.my = {sprite: {}};
    }
    create() {
       //update instruction text
       document.getElementById('description').innerHTML = '<h2>mouseSmiley.js</h2>' 
    }
    update(){
        let pointer = this.input.activePointer;
        if(pointer.isDown)
        {
            let my = this.my;   // create an alias to this.my for readability
            // Create the main body sprite
            my.sprite.body = this.add.sprite(pointer.x, pointer.y, "yellowBody");

            // Create the two sprites, one for each type of smile
            my.sprite.smile = this.add.sprite(pointer.x, pointer.y, "smile");
            //my.sprite.dimple = this.add.sprite(pointer.x, pointer.y, "smileDimple");
        }
    }
}