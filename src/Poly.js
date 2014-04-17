define("Poly/Poly", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "amber_core/Web"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Poly');
smalltalk.packages["Poly"].transport = {"type":"amd","amdNamespace":"Poly"};

smalltalk.addClass('Poly', globals.Object, ['widget'], 'Poly');
smalltalk.addMethod(
smalltalk.method({
selector: "gravity:",
protocol: 'as yet unclassified',
fn: function (anAccelerationValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@widget"])._gravity_(anAccelerationValue);
return self}, function($ctx1) {$ctx1.fill(self,"gravity:",{anAccelerationValue:anAccelerationValue},globals.Poly)});},
args: ["anAccelerationValue"],
source: "gravity: anAccelerationValue\x0a\x0a\x09widget gravity: anAccelerationValue",
messageSends: ["gravity:"],
referencedClasses: []
}),
globals.Poly);

smalltalk.addMethod(
smalltalk.method({
selector: "invertedGravity",
protocol: 'as yet unclassified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(window)._app())._widget())._gravity_(globals.HashedCollection._newFromPairs_(["x",(0),"y",(-0.0004)]));
return self}, function($ctx1) {$ctx1.fill(self,"invertedGravity",{},globals.Poly)});},
args: [],
source: "invertedGravity\x0a\x0a\x09window app widget gravity: #{'x'->0.'y'-> -0.0004}",
messageSends: ["gravity:", "widget", "app"],
referencedClasses: []
}),
globals.Poly);

smalltalk.addMethod(
smalltalk.method({
selector: "normalGravity",
protocol: 'as yet unclassified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(window)._app())._widget())._gravity_(globals.HashedCollection._newFromPairs_(["x",(0),"y",(0.0004)]));
return self}, function($ctx1) {$ctx1.fill(self,"normalGravity",{},globals.Poly)});},
args: [],
source: "normalGravity\x0a\x0a\x09window app widget gravity: #{'x'->0.'y'-> 0.0004}",
messageSends: ["gravity:", "widget", "app"],
referencedClasses: []
}),
globals.Poly);

smalltalk.addMethod(
smalltalk.method({
selector: "onOpen",
protocol: 'not yet classified',
fn: function () {
var self=this;
function $PolyWidget(){return globals.PolyWidget||(typeof PolyWidget=="undefined"?nil:PolyWidget)}
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self["@widget"]=_st($PolyWidget())._new();
_st(self["@widget"])._renderOn_(_st($HTMLCanvas())._onJQuery_("body"._asJQuery()));
return self}, function($ctx1) {$ctx1.fill(self,"onOpen",{},globals.Poly)});},
args: [],
source: "onOpen\x0a\x0a\x09widget := PolyWidget new.\x0a\x09\x0a\x09widget renderOn: (HTMLCanvas onJQuery: 'body' asJQuery)",
messageSends: ["new", "renderOn:", "onJQuery:", "asJQuery"],
referencedClasses: ["PolyWidget", "HTMLCanvas"]
}),
globals.Poly);

smalltalk.addMethod(
smalltalk.method({
selector: "widget",
protocol: 'as yet unclassified',
fn: function () {
var self=this;
var $1;
$1=self["@widget"];
return $1;
},
args: [],
source: "widget\x0a\x09^ widget",
messageSends: [],
referencedClasses: []
}),
globals.Poly);


smalltalk.addMethod(
smalltalk.method({
selector: "doStuff",
protocol: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._at_put_("app",_st(self._new())._onOpen());
return self}, function($ctx1) {$ctx1.fill(self,"doStuff",{},globals.Poly.klass)});},
args: [],
source: "doStuff\x0a\x0a\x09window at: #app put: self new onOpen",
messageSends: ["at:put:", "onOpen", "new"],
referencedClasses: []
}),
globals.Poly.klass);


smalltalk.addClass('PolyWidget', globals.Widget, ['physics', 'gravity', 'renderer', 'world', 'stuff', 'canvas', 'log', 'worldWrapper', 'counters'], 'Poly');
globals.PolyWidget.comment="##PolyWidget is the Presenter for of the PhysicsJS canvas.\x0aSome commands to have fun with:\x0a\x0a - addStuff\x0a - addMotion\x0a - addGravity";
smalltalk.addMethod(
smalltalk.method({
selector: "addCounter",
protocol: 'not yet classified',
fn: function () {
var self=this;
function $Counter(){return globals.Counter||(typeof Counter=="undefined"?nil:Counter)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Counter())._new())._appendToJQuery_("#log"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"addCounter",{},globals.PolyWidget)});},
args: [],
source: "addCounter\x0a\x0a\x09\x09Counter new appendToJQuery: '#log' asJQuery",
messageSends: ["appendToJQuery:", "new", "asJQuery"],
referencedClasses: ["Counter"]
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "addGravity",
protocol: 'not yet classified',
fn: function () {
var self=this;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self._basicAddGravity();
_st(_st($HTMLCanvas())._onJQuery_(_st(self["@log"])._asJQuery()))._p_("GeronimOOOooo...");
return self}, function($ctx1) {$ctx1.fill(self,"addGravity",{},globals.PolyWidget)});},
args: [],
source: "addGravity\x0a\x0a\x09self basicAddGravity.\x0a\x09(HTMLCanvas onJQuery: log asJQuery) p: 'GeronimOOOooo...'",
messageSends: ["basicAddGravity", "p:", "onJQuery:", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "addMotion",
protocol: 'not yet classified',
fn: function () {
var self=this;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self._basicAddMotion();
_st(_st($HTMLCanvas())._onJQuery_(_st(self["@log"])._asJQuery()))._p_("Things are moving! Watch out!...");
return self}, function($ctx1) {$ctx1.fill(self,"addMotion",{},globals.PolyWidget)});},
args: [],
source: "addMotion\x0a\x09\x0a\x09self basicAddMotion.\x0a\x09\x0a\x09(HTMLCanvas onJQuery: log asJQuery) p: 'Things are moving! Watch out!...'",
messageSends: ["basicAddMotion", "p:", "onJQuery:", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "addRenderer",
protocol: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
window.Physics(function(w){
	physics=window.Physics;
	var r=window.Physics.renderer('canvas',{
			el: 'viewport',
			width: 500,
			height: 500
			});
	renderer=r;
	world=w;
	world.add(renderer)});

	world.add( Physics.behavior('body-impulse-response') );
	world.add( Physics.behavior('body-collision-detection') );
	world.add( Physics.behavior('sweep-prune') );  

	var bounds=Physics.aabb(0, 0, 500, 500);
    world.add( Physics.behavior('edge-collision-detection', {
   		aabb: bounds,
    	restitution: 0.2
	}) );


	return world;
return self}, function($ctx1) {$ctx1.fill(self,"addRenderer",{},globals.PolyWidget)});},
args: [],
source: "addRenderer\x0a\x09<window.Physics(function(w){\x0a\x09physics=window.Physics;\x0a\x09var r=window.Physics.renderer('canvas',{\x0a\x09\x09\x09el: 'viewport',\x0a\x09\x09\x09width: 500,\x0a\x09\x09\x09height: 500\x0a\x09\x09\x09});\x0a\x09renderer=r;\x0a\x09world=w;\x0a\x09world.add(renderer)});\x0a\x0a\x09world.add( Physics.behavior('body-impulse-response') );\x0a\x09world.add( Physics.behavior('body-collision-detection') );\x0a\x09world.add( Physics.behavior('sweep-prune') );  \x0a\x0a\x09var bounds=Physics.aabb(0, 0, 500, 500);\x0a    world.add( Physics.behavior('edge-collision-detection', {\x0a   \x09\x09aabb: bounds,\x0a    \x09restitution: 0.2\x0a\x09}) );\x0a\x0a\x0a\x09return world>",
messageSends: [],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "addStuff",
protocol: 'not yet classified',
fn: function () {
var self=this;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
self._createThing();
return _st(self["@world"])._add_(_st(self._stuff())._first());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._tryCatch_((function(){
}));
_st(self["@world"])._render();
_st(_st($HTMLCanvas())._onJQuery_(_st(self["@log"])._asJQuery()))._p_("A thing was added...");
return self}, function($ctx1) {$ctx1.fill(self,"addStuff",{},globals.PolyWidget)});},
args: [],
source: "addStuff\x0a\x0a\x09[self createThing.\x0a\x09world add: self stuff first] tryCatch:[\x22ignoring non polygons, click again and better luck!\x22].\x0a\x09\x0a\x09world render.\x0a\x09\x0a\x09(HTMLCanvas onJQuery: log asJQuery) p: 'A thing was added...'\x09",
messageSends: ["tryCatch:", "createThing", "add:", "first", "stuff", "render", "p:", "onJQuery:", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "addStuffOld",
protocol: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$6,$5;
self._addThing_(self._firstThing());
$ctx1.sendIdx["addThing:"]=1;
self._addThing_(self._secondThing());
$ctx1.sendIdx["addThing:"]=2;
self._addThing_(self._thirdThing());
$1=self["@world"];
$3=self._stuff();
$ctx1.sendIdx["stuff"]=1;
$2=_st($3)._first();
_st($1)._add_($2);
$ctx1.sendIdx["add:"]=1;
$4=self["@world"];
$6=self._stuff();
$ctx1.sendIdx["stuff"]=2;
$5=_st($6)._second();
_st($4)._add_($5);
$ctx1.sendIdx["add:"]=2;
_st(self["@world"])._add_(_st(self._stuff())._third());
_st(self["@world"])._render();
return self}, function($ctx1) {$ctx1.fill(self,"addStuffOld",{},globals.PolyWidget)});},
args: [],
source: "addStuffOld\x0a\x0a\x09self addThing: self firstThing.\x0a\x09self addThing: self secondThing.\x0a\x09self addThing: self thirdThing.\x0a\x09world add: self stuff first.\x0a\x09world add: self stuff second.\x0a\x09world add: self stuff third.\x0a\x09\x0a\x09world render",
messageSends: ["addThing:", "firstThing", "secondThing", "thirdThing", "add:", "first", "stuff", "second", "third", "render"],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "addThing:",
protocol: 'not yet classified',
fn: function (aThing) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._stuff())._add_(aThing);
return self}, function($ctx1) {$ctx1.fill(self,"addThing:",{aThing:aThing},globals.PolyWidget)});},
args: ["aThing"],
source: "addThing: aThing\x0a\x0a\x09self stuff add: aThing",
messageSends: ["add:", "stuff"],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAddGravity",
protocol: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var g = Physics.behavior('constant-acceleration', {
    	acc: { x : 0, y: 0.0004 }
		});
	self['@gravity']=g;
	world.add(g);;
return self}, function($ctx1) {$ctx1.fill(self,"basicAddGravity",{},globals.PolyWidget)});},
args: [],
source: "basicAddGravity\x0a\x09<var g = Physics.behavior('constant-acceleration', {\x0a    \x09acc: { x : 0, y: 0.0004 }\x0a\x09\x09});\x0a\x09self['@gravity']=g;\x0a\x09world.add(g);>\x0a\x09\x0a\x09",
messageSends: [],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAddMotion",
protocol: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
window.Physics.util.ticker.subscribe(function( time, dt ){
    world.step( time )});

	window.Physics.util.ticker.start();
    
    world.subscribe('step', function(){
    	world.render();});;
return self}, function($ctx1) {$ctx1.fill(self,"basicAddMotion",{},globals.PolyWidget)});},
args: [],
source: "basicAddMotion\x0a\x09<window.Physics.util.ticker.subscribe(function( time, dt ){\x0a    world.step( time )});\x0a\x0a\x09window.Physics.util.ticker.start();\x0a    \x0a    world.subscribe('step', function(){\x0a    \x09world.render();});>\x0a\x09",
messageSends: [],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "counters",
protocol: 'not yet classified',
fn: function () {
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@counters"];
if(($receiver = $2) == null || $receiver.isNil){
self["@counters"]=_st($Array())._new();
$1=self["@counters"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"counters",{},globals.PolyWidget)});},
args: [],
source: "counters\x0a\x0a\x09^ counters ifNil:[counters := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "createThing",
protocol: 'not yet classified',
fn: function () {
var self=this;
var newThing;
return smalltalk.withContext(function($ctx1) { 
newThing=self._createThingIn_vx_from_to_(self._randomPoint(),self._randomSpeed(),(0),(200));
_st(self._stuff())._addFirst_(newThing);
return self}, function($ctx1) {$ctx1.fill(self,"createThing",{newThing:newThing},globals.PolyWidget)});},
args: [],
source: "createThing\x0a\x09\x0a\x09| newThing |\x0a\x0a\x09newThing := self createThingIn: self randomPoint \x0a\x09\x09vx: self randomSpeed\x0a\x09\x09from: 0 \x0a\x09\x09to: 200.\x0a\x09\x09\x0a\x09self stuff addFirst: newThing",
messageSends: ["createThingIn:vx:from:to:", "randomPoint", "randomSpeed", "addFirst:", "stuff"],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "createThingIn:vx:from:to:",
protocol: 'not yet classified',
fn: function (aPoint, aSpeed, minimum, maximum) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return physics.body('convex-polygon', {
    x: 250,
    y: 250,
    vx: 0.01,
    vertices: [
        {x: 0, y: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum},
        {x: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum, y: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum},
        {x: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum, y: 0},
        {x: 0, y: 0}
    ]
});;
return self}, function($ctx1) {$ctx1.fill(self,"createThingIn:vx:from:to:",{aPoint:aPoint,aSpeed:aSpeed,minimum:minimum,maximum:maximum},globals.PolyWidget)});},
args: ["aPoint", "aSpeed", "minimum", "maximum"],
source: "createThingIn: aPoint vx: aSpeed from: minimum to: maximum\x0a\x09<return physics.body('convex-polygon', {\x0a    x: 250,\x0a    y: 250,\x0a    vx: 0.01,\x0a    vertices: [\x0a        {x: 0, y: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum},\x0a        {x: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum, y: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum},\x0a        {x: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum, y: 0},\x0a        {x: 0, y: 0}\x0a    ]\x0a});>",
messageSends: [],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "createWorld",
protocol: 'not yet classified',
fn: function () {
var self=this;
var html;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
html=self._newCanvas();
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("row");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
$ctx2.sendIdx["div"]=2;
_st($3)._class_("span6");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
self._renderCanvasOn_(html);
self["@world"]=self._addRenderer();
return self["@world"];
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$4;
$5=_st(html)._div();
$ctx2.sendIdx["div"]=3;
_st($5)._class_("span3");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
self["@log"]=_st(_st(html)._div())._id_("log");
return self["@log"];
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self["@worldWrapper"]=$2;
_st(_st($HTMLCanvas())._onJQuery_(_st(self["@log"])._asJQuery()))._p_("World created...");
return self}, function($ctx1) {$ctx1.fill(self,"createWorld",{html:html},globals.PolyWidget)});},
args: [],
source: "createWorld\x0a\x09| html |\x0a\x09html := self newCanvas.\x0a\x0a\x09worldWrapper := html div\x0a\x09\x09class: 'row';\x0a\x09\x09with:[\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'span6';\x0a\x09\x09\x09\x09with:[\x0a\x09\x09\x09\x09\x09self renderCanvasOn: html.\x0a\x09\x09\x09\x09\x09world := self addRenderer].\x0a\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'span3';\x0a\x09\x09\x09\x09with: [log := html div id: 'log']].\x0a\x09\x09\x09\x09\x0a\x09(HTMLCanvas onJQuery: log asJQuery) p: 'World created...'\x09\x09\x09\x09\x0a\x09\x0a\x09\x0a\x09",
messageSends: ["newCanvas", "class:", "div", "with:", "renderCanvasOn:", "addRenderer", "id:", "p:", "onJQuery:", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "firstThing",
protocol: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return physics.body('convex-polygon', {
    x: 250,
    y: 250,
    vx: 0.01,
    vertices: [
        {x: 0, y: 50},
        {x: 50, y: 50},
        {x: 50, y: 0},
        {x: 0, y: 0}
    ]
});;
return self}, function($ctx1) {$ctx1.fill(self,"firstThing",{},globals.PolyWidget)});},
args: [],
source: "firstThing\x0a\x09<return physics.body('convex-polygon', {\x0a    x: 250,\x0a    y: 250,\x0a    vx: 0.01,\x0a    vertices: [\x0a        {x: 0, y: 50},\x0a        {x: 50, y: 50},\x0a        {x: 50, y: 0},\x0a        {x: 0, y: 0}\x0a    ]\x0a});>",
messageSends: [],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "gravity:",
protocol: 'not yet classified',
fn: function (anAcceleration) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@gravity"])._setAcceleration_(anAcceleration);
return self}, function($ctx1) {$ctx1.fill(self,"gravity:",{anAcceleration:anAcceleration},globals.PolyWidget)});},
args: ["anAcceleration"],
source: "gravity: anAcceleration\x0a\x0a\x09gravity setAcceleration: anAcceleration\x0a\x09",
messageSends: ["setAcceleration:"],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "newCanvas",
protocol: 'not yet classified',
fn: function () {
var self=this;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HTMLCanvas())._onJQuery_("body"._asJQuery());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCanvas",{},globals.PolyWidget)});},
args: [],
source: "newCanvas\x0a\x0a\x09^ HTMLCanvas onJQuery: 'body' asJQuery",
messageSends: ["onJQuery:", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "randomFrom:to:",
protocol: 'not yet classified',
fn: function (min, max) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.floor(Math.random() * (max - min + 1)) + min;
return self}, function($ctx1) {$ctx1.fill(self,"randomFrom:to:",{min:min,max:max},globals.PolyWidget)});},
args: ["min", "max"],
source: "randomFrom: min to: max\x0a\x09<return Math.floor(Math.random() * (max - min + 1)) + min>",
messageSends: [],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "randomPoint",
protocol: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._randomFrom_to_((10),(400));
$ctx1.sendIdx["randomFrom:to:"]=1;
$1=_st($2).__at(self._randomFrom_to_((10),(400)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"randomPoint",{},globals.PolyWidget)});},
args: [],
source: "randomPoint \x0a\x09^ (self randomFrom: 10 to: 400) @ (self randomFrom: 10 to: 400)",
messageSends: ["@", "randomFrom:to:"],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "randomSpeed",
protocol: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._randomFrom_to_((5),(70))).__slash((1000));
return $1;
}, function($ctx1) {$ctx1.fill(self,"randomSpeed",{},globals.PolyWidget)});},
args: [],
source: "randomSpeed \x0a\x09^ (self randomFrom: 5 to: 70) / 1000",
messageSends: ["/", "randomFrom:to:"],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
protocol: 'not yet classified',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$2;
$1=_st(html)._div();
_st($1)._class_("btn-group");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._button();
$ctx2.sendIdx["button"]=1;
_st($3)._at_put_("type","button");
$ctx2.sendIdx["at:put:"]=1;
_st($3)._class_("btn btn-default");
$ctx2.sendIdx["class:"]=2;
_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._addCounter();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["onClick:"]=1;
$4=_st($3)._with_("Add counter");
$ctx2.sendIdx["with:"]=2;
$4;
$5=_st(html)._button();
$ctx2.sendIdx["button"]=2;
_st($5)._at_put_("type","button");
$ctx2.sendIdx["at:put:"]=2;
_st($5)._class_("btn btn-default");
$ctx2.sendIdx["class:"]=3;
_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._addStuff();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["onClick:"]=2;
$6=_st($5)._with_("Add Stuff");
$ctx2.sendIdx["with:"]=3;
$6;
$7=_st(html)._button();
$ctx2.sendIdx["button"]=3;
_st($7)._at_put_("type","button");
$ctx2.sendIdx["at:put:"]=3;
_st($7)._class_("btn btn-default");
$ctx2.sendIdx["class:"]=4;
_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._addMotion();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["onClick:"]=3;
$8=_st($7)._with_("Add Motion");
$ctx2.sendIdx["with:"]=4;
$8;
$9=_st(html)._button();
$ctx2.sendIdx["button"]=4;
_st($9)._at_put_("type","button");
$ctx2.sendIdx["at:put:"]=4;
_st($9)._class_("btn btn-default");
$ctx2.sendIdx["class:"]=5;
_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._addGravity();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
$ctx2.sendIdx["onClick:"]=4;
$10=_st($9)._with_("Add Gravity");
$ctx2.sendIdx["with:"]=5;
$10;
$11=_st(html)._button();
_st($11)._at_put_("type","button");
_st($11)._class_("btn btn-default btn-warning");
_st($11)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._reset();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,6)})}));
$12=_st($11)._with_("Reset");
return $12;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},globals.PolyWidget)});},
args: ["html"],
source: "renderButtonsOn: html\x0a\x0a\x09html div\x0a\x09\x09class: 'btn-group';\x0a\x09\x09with:[\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09at: 'type' put: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09\x09onClick: [self addCounter];\x0a\x09\x09\x09\x09with: 'Add counter'.\x0a\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09at: 'type' put: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09\x09onClick: [self addStuff];\x0a\x09\x09\x09\x09with: 'Add Stuff'.\x0a\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09at: 'type' put: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09\x09onClick: [self addMotion];\x0a\x09\x09\x09\x09with: 'Add Motion'.\x0a\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09at: 'type' put: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09\x09onClick: [self addGravity];\x0a\x09\x09\x09\x09with: 'Add Gravity'.\x0a\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09at: 'type' put: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-default btn-warning';\x0a\x09\x09\x09\x09onClick: [self reset];\x0a\x09\x09\x09\x09with: 'Reset'.\x0a\x09\x09]",
messageSends: ["class:", "div", "with:", "at:put:", "button", "onClick:", "addCounter", "addStuff", "addMotion", "addGravity", "reset"],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCanvasOn:",
protocol: 'not yet classified',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._canvas();
_st($1)._id_("viewport");
_st($1)._at_put_("width","500");
$ctx1.sendIdx["at:put:"]=1;
_st($1)._at_put_("height","500");
$2=_st($1)._yourself();
self["@canvas"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderCanvasOn:",{html:html},globals.PolyWidget)});},
args: ["html"],
source: "renderCanvasOn: html\x0a\x0a\x09canvas := html canvas\x0a\x09\x09id: 'viewport'; \x0a\x09\x09at: 'width' put:'500';\x0a\x09\x09at: 'height' put: '500';\x0a\x09\x09yourself.\x0a\x09\x09",
messageSends: ["id:", "canvas", "at:put:", "yourself"],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderButtonsOn_(html);
self._createWorld();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.PolyWidget)});},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09self renderButtonsOn: html.\x0a\x09self createWorld.",
messageSends: ["renderButtonsOn:", "createWorld"],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
protocol: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@canvas"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._remove();
_st(_st(self["@worldWrapper"])._asJQuery())._empty();
self._createWorld();
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},globals.PolyWidget)});},
args: [],
source: "reset\x0a\x0a\x09canvas asJQuery remove.\x0a\x09worldWrapper asJQuery empty.\x0a\x09self createWorld",
messageSends: ["remove", "asJQuery", "empty", "createWorld"],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "secondThing",
protocol: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return physics.body('convex-polygon', {
    x: 150,
    y: 150,
    vx: 0.02,
    vertices: [
        {x: 0, y: 25},
        {x: 30, y: 40},
        {x: 30, y: 0},
        {x: 0, y: 0}
    ]
});;
return self}, function($ctx1) {$ctx1.fill(self,"secondThing",{},globals.PolyWidget)});},
args: [],
source: "secondThing\x0a\x09<return physics.body('convex-polygon', {\x0a    x: 150,\x0a    y: 150,\x0a    vx: 0.02,\x0a    vertices: [\x0a        {x: 0, y: 25},\x0a        {x: 30, y: 40},\x0a        {x: 30, y: 0},\x0a        {x: 0, y: 0}\x0a    ]\x0a});>",
messageSends: [],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "stuff",
protocol: 'not yet classified',
fn: function () {
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@stuff"];
if(($receiver = $2) == null || $receiver.isNil){
self["@stuff"]=_st($Array())._new();
$1=self["@stuff"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"stuff",{},globals.PolyWidget)});},
args: [],
source: "stuff\x0a\x0a\x09^ stuff ifNil:[stuff := Array new]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "thirdThing",
protocol: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return physics.body('convex-polygon', {
    x: 100,
    y: 100,
    vx: 0.008,
    vertices: [
        {x: 0, y: 15},
        {x: 100, y: 120},
        {x: 100, y: 20},
        {x: 0, y: 0}
    ]
});;
return self}, function($ctx1) {$ctx1.fill(self,"thirdThing",{},globals.PolyWidget)});},
args: [],
source: "thirdThing\x0a\x09<return physics.body('convex-polygon', {\x0a    x: 100,\x0a    y: 100,\x0a    vx: 0.008,\x0a    vertices: [\x0a        {x: 0, y: 15},\x0a        {x: 100, y: 120},\x0a        {x: 100, y: 20},\x0a        {x: 0, y: 0}\x0a    ]\x0a});>",
messageSends: [],
referencedClasses: []
}),
globals.PolyWidget);


});
