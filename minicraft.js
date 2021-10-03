var Minecraft = {};

Minecraft.allBlocks = [];
Minecraft.selectedWidth = 1000; 

Minecraft.start = function() { 
    var letsPlay = new Minecraft.map;
    letsPlay.generateMap(Minecraft.selectedWidth);
    letsPlay.generateBlock();
    Minecraft.elements(Minecraft.random(2, Minecraft.oneLine), ground);
    Minecraft.initializeTools();
    Minecraft.buttons();
}

