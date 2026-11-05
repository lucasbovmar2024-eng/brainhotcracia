const assert=require('node:assert/strict');
const {Kingdom}=require('../world-engine.js');
let seed=41;const rng=()=>((seed=(seed*1664525+1013904223)>>>0)/4294967296);
const m=new Kingdom(rng);m.startBattle();assert.equal(m.count('gold'),10);assert.equal(m.count('red'),10);
assert.equal(m.event(true),true);assert.equal(m.count('gold','hero'),1);assert.equal(m.count('red','hero'),1);assert.equal(m.event(true),false,'manual events must have a cooldown');
for(let i=0;i<6000;i++){m.update(.05);for(const team of ['gold','red']){assert.ok(m.count(team,'soldier')<=18);assert.ok(m.count(team,'hero')<=2)}assert.ok(m.units.every(u=>u.hp>0&&u.hp<=u.maxHp&&Number.isFinite(u.x)&&Number.isFinite(u.y)));assert.ok(m.particles.length<=160);assert.ok(m.fallen.length<=80);assert.ok(m.events.length<=6)}
assert.ok(m.deaths.gold>0&&m.deaths.red>0,'both armies must suffer casualties');assert.ok(m.arrivals.gold>28&&m.arrivals.red>28,'both armies must receive replacement troops');assert.equal(new Set(m.units.map(u=>u.id)).size,m.units.length);
const t=m.battleTime,positions=m.units.map(u=>[u.x,u.y,u.hp]);m.paused=true;m.update(.1);assert.equal(m.battleTime,t);assert.deepEqual(m.units.map(u=>[u.x,u.y,u.hp]),positions);assert.equal(m.pulse(900,600),false);m.paused=false;
const target=m.units.find(u=>u.team==='red');const before=target.hp;assert.equal(m.pulse(target.x,target.y),true);assert.ok(!m.units.includes(target)||target.hp<before);assert.equal(m.pulse(target.x,target.y),false);
m.stopBattle();assert.equal(m.units.length,0);assert.equal(m.respawns.length,0);assert.equal(m.event(true),false);m.update(.1);assert.equal(m.units.length,0);m.startBattle();assert.equal(m.deaths.gold,0);assert.equal(m.deaths.red,0);assert.equal(m.count('gold'),10);m.reset();assert.equal(m.battle,false);assert.equal(m.units.length,0);
console.log('PASS: 300 seconds simulated; troop caps, casualties, reinforcements, hero events, cooldowns, pause, truce and reset.');
