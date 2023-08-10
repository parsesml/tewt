(async () => {
        await $.getScript("https://cdn.jsdelivr.net/gh/parseml/many-deobf@latest/deobf.js");
center=1;
ig.game.errorManager.O5407=function(){};
getwebsocket=Deobfuscator.function(ig.game.websocket, "c,d)", true);
eval("ig.game.player.O3805="+ig.game.player.O3805.toString().replaceAll("this.O2491","true"));
eval("ig.game.websocket."+getwebsocket+"="+ig.game.websocket[getwebsocket].toString().replaceAll("c,d){", "c,d){if(b.m=='od'){ig.game[players].player.forEach(e=>{if(e.O340==b.data.rid){Object.keys(e.attachments.w.dynathingEntity.subEntities).forEach(f=>{e.attachments.w.dynathingEntity.subEntities[f].rotation=e.angleTo({pos: {x:b.data.pack[2].x,y:b.data.pack[2].y},size: {x: 1,y: 1}}); e.attachments.w.dynathingEntity.subEntities[f].pivot={x:e.attachments.w.dynathingEntity.subEntities[f].pos.x+e.attachments.w.dynathingEntity.subEntities['e'+b.data.pack[2].id[0]].pos.x+14.5,y:e.attachments.w.dynathingEntity.subEntities[f].pos.y+e.attachments.w.dynathingEntity.subEntities['e'+b.data.pack[2].id[0]].pos.y+14.5}; });eval('e.O3805='+e.O3805.toString().replaceAll('this.O2491','true'));}})};"));
setInterval(()=>{
    try {
    Object.keys(ig.game.player.attachments.w.dynathingEntity.subEntities).forEach(b=>{
ig.game.player.attachments.w.dynathingEntity.subEntities[b].rotation=ig.game.player.angleTo({pos: ig.game.O7690.O1938(),size: {x: 1,y: 1}});
ig.game.player.attachments.w.dynathingEntity.subEntities[b].pivot={x:ig.game.player.attachments.w.dynathingEntity.subEntities[b].pos.x+ig.game.player.attachments.w.dynathingEntity.subEntities['e'+center].pos.x+14.5,
y: ig.game.player.attachments.w.dynathingEntity.subEntities[b].pos.y+ig.game.player.attachments.w.dynathingEntity.subEntities['e'+center].pos.y+14.5};
})} catch (error) {};
}, 0);
setInterval(()=>{
    ig.game.websocket.wssend(ig.game.websocket.ws, 'od', {pack:[1, 1, {id: [center], x: ig.game.O7690.O1938().x, y: ig.game.O7690.O1938().y}]})
}, 50)})();
