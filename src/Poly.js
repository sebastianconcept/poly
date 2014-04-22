define("Poly/Poly", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects", "amber_core/Web"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Poly');
smalltalk.packages["Poly"].transport = {"type":"amd","amdNamespace":"Poly"};

smalltalk.addClass('Poly', globals.Object, ['widget'], 'Poly');
globals.Poly.comment="After page load, all about the app starts here.  This is the object for the application.\x0a\x0aAn instance of this class gets created once all is loaded. It knows a PolyWidget instance which is the presenter so you can view and control things.\x0a\x0aGo to the class side to the #main method.\x0a\x0aFollow the rabbit! You'll get it";
smalltalk.addMethod(
smalltalk.method({
selector: "gravity:",
protocol: 'accessing',
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
protocol: 'actions',
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
protocol: 'actions',
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
protocol: 'reactions',
fn: function (){
var self=this;
function $PolyWidget(){return globals.PolyWidget||(typeof PolyWidget=="undefined"?nil:PolyWidget)}
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self["@widget"]=_st($PolyWidget())._new();
_st(self["@widget"])._renderOn_(_st($HTMLCanvas())._onJQuery_("body"._asJQuery()));
return self}, function($ctx1) {$ctx1.fill(self,"onOpen",{},globals.Poly)})},
args: [],
source: "onOpen\x0a\x09\x22The app is starting! let's do things...\x22\x0a\x09\x0a\x09\x22Create a presenter that draw things and controls them\x22\x0a\x09widget := PolyWidget new.\x0a\x09\x0a\x09\x22Render it in a canvas that will use jQuery to paint html tags in the page body.\x0a\x09Next? check comments in PolyWidget>>renderOn: \x22\x0a\x09widget renderOn: (HTMLCanvas onJQuery: 'body' asJQuery)",
messageSends: ["new", "renderOn:", "onJQuery:", "asJQuery"],
referencedClasses: ["PolyWidget", "HTMLCanvas"]
}),
globals.Poly);

smalltalk.addMethod(
smalltalk.method({
selector: "widget",
protocol: 'accessing',
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
selector: "main",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._at_put_("app",_st(self._new())._onOpen());
return self}, function($ctx1) {$ctx1.fill(self,"main",{},globals.Poly.klass)})},
args: [],
source: "main\x0a\x09\x22When this Amber app is fully loaded in the DOM, we expect to \x0a\x09have this message sent (if you check the index.html file \x0a\x09you should find the reference in the callback that gets executed when all is loaded)\x22\x0a\x09\x0a\x09\x22Here we create a new instance for this app, make it react to \x0a\x09this important 'open' moment and make it to be known by the window for future reference.\x0a\x09Next? check #onOpen\x22\x0a\x09window at: #app put: self new onOpen",
messageSends: ["at:put:", "onOpen", "new"],
referencedClasses: []
}),
globals.Poly.klass);


smalltalk.addClass('PolyWidget', globals.Widget, ['physics', 'gravity', 'renderer', 'world', 'stuff', 'canvas', 'log', 'worldWrapper', 'counters'], 'Poly');
globals.PolyWidget.comment="##PolyWidget is the Presenter for this little demo application.\x0aIt basically renders the PhysicsJS canvas, adds some buttons and wire up the needed observations/reactions for them.\x0a\x0aSome commands to have fun with:\x0a\x0a - addStuff\x0a - addMotion\x0a - addGravity";
smalltalk.addMethod(
smalltalk.method({
selector: "addCounter",
protocol: 'actions',
fn: function (){
var self=this;
function $Counter(){return globals.Counter||(typeof Counter=="undefined"?nil:Counter)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Counter())._new())._appendToJQuery_("#log"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"addCounter",{},globals.PolyWidget)})},
args: [],
source: "addCounter\x0a\x09\x22Appends a counter to the log\x22\x0a\x09\x0a\x09Counter new appendToJQuery: '#log' asJQuery",
messageSends: ["appendToJQuery:", "new", "asJQuery"],
referencedClasses: ["Counter"]
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "addGravity",
protocol: 'actions',
fn: function (){
var self=this;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self._basicAddGravity();
_st(_st($HTMLCanvas())._onJQuery_(_st(self["@log"])._asJQuery()))._p_("GeronimOOOooo...");
return self}, function($ctx1) {$ctx1.fill(self,"addGravity",{},globals.PolyWidget)})},
args: [],
source: "addGravity\x0a\x09\x22Adds gravity and logs the action\x22\x0a\x09self basicAddGravity.\x0a\x09(HTMLCanvas onJQuery: log asJQuery) p: 'GeronimOOOooo...'",
messageSends: ["basicAddGravity", "p:", "onJQuery:", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "addMotion",
protocol: 'actions',
fn: function (){
var self=this;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self._basicAddMotion();
_st(_st($HTMLCanvas())._onJQuery_(_st(self["@log"])._asJQuery()))._p_("Things are moving! Watch out!...");
return self}, function($ctx1) {$ctx1.fill(self,"addMotion",{},globals.PolyWidget)})},
args: [],
source: "addMotion\x0a\x09\x22Adds motion and logs the action\x22\x0a\x09self basicAddMotion.\x0a\x09\x0a\x09(HTMLCanvas onJQuery: log asJQuery) p: 'Things are moving! Watch out!...'",
messageSends: ["basicAddMotion", "p:", "onJQuery:", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "addRenderer",
protocol: 'actions',
fn: function (){
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
return self}, function($ctx1) {$ctx1.fill(self,"addRenderer",{},globals.PolyWidget)})},
args: [],
source: "addRenderer\x0a\x09\x22When I see code like this first thing I want to know is how do they know what to put there!\x0a\x09And to put this code here the source was this:\x0a\x09http://wellcaffeinated.net/PhysicsJS/tutorials/creating-a-scene-of-interacting-polygons\x0a\x09Only I've adapted it to render the way I wanted for this app, which was:\x0a\x09colliding polygons that move and react to gravity and respect the limits of the canvas.\x22\x0a\x09\x0a\x09<window.Physics(function(w){\x0a\x09physics=window.Physics;\x0a\x09var r=window.Physics.renderer('canvas',{\x0a\x09\x09\x09el: 'viewport',\x0a\x09\x09\x09width: 500,\x0a\x09\x09\x09height: 500\x0a\x09\x09\x09});\x0a\x09renderer=r;\x0a\x09world=w;\x0a\x09world.add(renderer)});\x0a\x0a\x09world.add( Physics.behavior('body-impulse-response') );\x0a\x09world.add( Physics.behavior('body-collision-detection') );\x0a\x09world.add( Physics.behavior('sweep-prune') );  \x0a\x0a\x09var bounds=Physics.aabb(0, 0, 500, 500);\x0a    world.add( Physics.behavior('edge-collision-detection', {\x0a   \x09\x09aabb: bounds,\x0a    \x09restitution: 0.2\x0a\x09}) );\x0a\x0a\x0a\x09return world>",
messageSends: [],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "addStuff",
protocol: 'actions',
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
selector: "addThing:",
protocol: 'actions',
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
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var g = Physics.behavior('constant-acceleration', {
    	acc: { x : 0, y: 0.0004 }
		});
	self['@gravity']=g;
	world.add(g);;
return self}, function($ctx1) {$ctx1.fill(self,"basicAddGravity",{},globals.PolyWidget)})},
args: [],
source: "basicAddGravity\x0a\x09\x22Adds gravity to the world.\x0a\x09Note 1: it adds the default gravity value (vertical positive acceleration of 0.0004)\x0a\x09Note 2: notice that we are storing the gravity js g variable in the #gravity instVar\x0a\x09by accessing with self['@gravity']. That's the way you can make javascript code to hack an amber object.\x22\x0a\x09\x0a\x09<var g = Physics.behavior('constant-acceleration', {\x0a    \x09acc: { x : 0, y: 0.0004 }\x0a\x09\x09});\x0a\x09self['@gravity']=g;\x0a\x09world.add(g);>\x0a\x09\x0a\x09",
messageSends: [],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAddMotion",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
window.Physics.util.ticker.subscribe(function( time, dt ){
    world.step( time )});

	window.Physics.util.ticker.start();
    
    world.subscribe('step', function(){
    	world.render();});;
return self}, function($ctx1) {$ctx1.fill(self,"basicAddMotion",{},globals.PolyWidget)})},
args: [],
source: "basicAddMotion\x0a\x09\x22Here you see more PhysicsJS than Amber but what this does is\x0a\x09to subscribe to the PhysicsJS ticker event a callback that will render the world (in each step).\x0a\x09Without this you wouldn't have animation.\x0a\x09All that is explained in the PhysicsJS docs and start to go beyond this demo\x22\x0a\x09\x0a\x09<window.Physics.util.ticker.subscribe(function( time, dt ){\x0a    world.step( time )});\x0a\x0a\x09window.Physics.util.ticker.start();\x0a    \x0a    world.subscribe('step', function(){\x0a    \x09world.render();});>\x0a\x09",
messageSends: [],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "counters",
protocol: 'accessing',
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
protocol: 'actions',
fn: function (){
var self=this;
var newThing;
return smalltalk.withContext(function($ctx1) { 
newThing=self._createThingIn_vx_from_to_(self._randomPoint(),self._randomSpeed(),(0),(200));
_st(self._stuff())._addFirst_(newThing);
return self}, function($ctx1) {$ctx1.fill(self,"createThing",{newThing:newThing},globals.PolyWidget)})},
args: [],
source: "createThing\x0a\x09\x22Create a polygon and add it to the stuff collection\x22\x0a\x09\x0a\x09| newThing |\x0a\x0a\x09\x22Makes sense?\x22\x0a\x09newThing := self createThingIn: self randomPoint \x0a\x09\x09vx: self randomSpeed\x0a\x09\x09from: 0 \x0a\x09\x09to: 200.\x0a\x0a\x09\x22It's okay to have questions...\x0a\x09Join https://groups.google.com/forum/#!forum/amber-lang \x0a\x09and ask to other developers.\x0a\x09Also you have the IRC channel   #amber-lang on freenode\x22\x0a\x09\x0a\x09self stuff addFirst: newThing",
messageSends: ["createThingIn:vx:from:to:", "randomPoint", "randomSpeed", "addFirst:", "stuff"],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "createThingIn:vx:from:to:",
protocol: 'actions',
fn: function (aPoint,aSpeed,minimum,maximum){
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
return self}, function($ctx1) {$ctx1.fill(self,"createThingIn:vx:from:to:",{aPoint:aPoint,aSpeed:aSpeed,minimum:minimum,maximum:maximum},globals.PolyWidget)})},
args: ["aPoint", "aSpeed", "minimum", "maximum"],
source: "createThingIn: aPoint vx: aSpeed from: minimum to: maximum\x0a\x09\x22Not the best example of how things are done.\x0a\x09Lame justification: this app started as a quick hack for a screencast about amber init\x22\x0a\x09<return physics.body('convex-polygon', {\x0a    x: 250,\x0a    y: 250,\x0a    vx: 0.01,\x0a    vertices: [\x0a        {x: 0, y: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum},\x0a        {x: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum, y: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum},\x0a        {x: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum, y: 0},\x0a        {x: 0, y: 0}\x0a    ]\x0a});>",
messageSends: [],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "createWorld",
protocol: 'actions',
fn: function (){
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
return self}, function($ctx1) {$ctx1.fill(self,"createWorld",{html:html},globals.PolyWidget)})},
args: [],
source: "createWorld\x0a\x09\x22Creates the html5 canvas tag and initializes PhysicsJS into it.\x0a\x09This is what guided us to know how to create this world:\x0a\x09http://wellcaffeinated.net/PhysicsJS/tutorials/creating-a-scene-of-interacting-polygons\x22\x0a\x09\x0a\x09\x0a\x09| html |\x0a\x09\x0a\x09html := self newCanvas.\x0a\x0a\x09worldWrapper := html div\x0a\x09\x09class: 'row';\x0a\x09\x09with:[\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'span6';\x0a\x09\x09\x09\x09with:[\x0a\x09\x09\x09\x09\x09self renderCanvasOn: html.\x0a\x09\x09\x09\x09\x09\x22Always navigate code by following implementors to understand Smalltalk things..\x0a\x09\x09\x09\x09\x09What about #addRenderer now?\x22\x0a\x09\x09\x09\x09\x09world := self addRenderer].\x0a\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'span3';\x0a\x09\x09\x09\x09with: [log := html div id: 'log']].\x0a\x09\x09\x09\x09\x0a\x09(HTMLCanvas onJQuery: log asJQuery) p: 'World created...'\x09\x09\x09\x09\x0a\x09\x0a\x09\x0a\x09",
messageSends: ["newCanvas", "class:", "div", "with:", "renderCanvasOn:", "addRenderer", "id:", "p:", "onJQuery:", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "gravity:",
protocol: 'accessing',
fn: function (anAcceleration){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@gravity"])._setAcceleration_(anAcceleration);
return self}, function($ctx1) {$ctx1.fill(self,"gravity:",{anAcceleration:anAcceleration},globals.PolyWidget)})},
args: ["anAcceleration"],
source: "gravity: anAcceleration\x0a\x09\x22Set a new value for the acceleration.\x0a\x09Oh hacking this can be fun...\x0a\x09Be responsible and don't collapse the Multiverse!!! \x22\x0a\x0a\x09gravity setAcceleration: anAcceleration\x0a\x09",
messageSends: ["setAcceleration:"],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "newCanvas",
protocol: 'actions',
fn: function (){
var self=this;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($HTMLCanvas())._onJQuery_("body"._asJQuery());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCanvas",{},globals.PolyWidget)})},
args: [],
source: "newCanvas\x0a\x09\x22Returns a new canvas to 'paint' tags in the body\x22\x0a\x09^ HTMLCanvas onJQuery: 'body' asJQuery",
messageSends: ["onJQuery:", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "randomFrom:to:",
protocol: 'accessing',
fn: function (min,max){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return Math.floor(Math.random() * (max - min + 1)) + min;
return self}, function($ctx1) {$ctx1.fill(self,"randomFrom:to:",{min:min,max:max},globals.PolyWidget)})},
args: ["min", "max"],
source: "randomFrom: min to: max\x0a\x09\x22If you have to do something in js directly you can.\x0a\x09Just be sure you don't mix languages.\x0a\x09It's either Smalltalk or Javascript.\x0a\x09If you're feeling you need to mix, thing in a way to refactor that!\x0a\x09It's always a way to get them nicely separated.\x0a\x09\x0a\x09Ah, BTW, as suggested by its name, this method returns a random integer between min and max :) \x22\x0a\x09<return Math.floor(Math.random() * (max - min + 1)) + min>",
messageSends: [],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "randomPoint",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._randomFrom_to_((10),(400));
$ctx1.sendIdx["randomFrom:to:"]=1;
$1=_st($2).__at(self._randomFrom_to_((10),(400)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"randomPoint",{},globals.PolyWidget)})},
args: [],
source: "randomPoint \x0a\x09\x22Answer a random point\x22\x0a\x09^ (self randomFrom: 10 to: 400) @ (self randomFrom: 10 to: 400)",
messageSends: ["@", "randomFrom:to:"],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "randomSpeed",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._randomFrom_to_((5),(70))).__slash((1000));
return $1;
}, function($ctx1) {$ctx1.fill(self,"randomSpeed",{},globals.PolyWidget)})},
args: [],
source: "randomSpeed \x0a\x09\x22Answers a random speed.\x0a\x0a\x09Did you notice how in Smalltalk you make the method names so close to what they do that comments are barely needed?\x0a\x09That's the smell of good code!\x0a\x09Of course good comments are always friendly and specially when your code can have subtle consequences.\x0a\x09Pro tip:  with comments describe intention and what's the answer, like the first line of this comment.\x0a\x09Pro tip 2: comments are a chance to play in team if you use them to increase empathy with who is /not/ very familiar with it. \x0a\x09If you do pro tip 2 right your future-self will be infinitely tankful to your past-self.\x22\x0a\x09^ (self randomFrom: 5 to: 70) / 1000",
messageSends: ["/", "randomFrom:to:"],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
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
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},globals.PolyWidget)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09\x22Some buttons to control the behaviour of this app\x22\x0a\x09\x0a\x09html div\x0a\x09\x09class: 'btn-group'; \x22<- why that? I'll pretend you didn't ask. You should already be familiar with this: http://getbootstrap.com/\x22\x0a\x09\x09with:[\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09at: 'type' put: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09\x09onClick: [self addCounter]; \x22 <- observe button clicks and react adding a counter\x22\x0a\x09\x09\x09\x09with: 'Add counter'.\x0a\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09at: 'type' put: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09\x09onClick: [self addStuff]; \x22 <- observe button clicks and react adding thigns\x22\x0a\x09\x09\x09\x09with: 'Add Stuff'.\x0a\x0a\x09\x09\x09\x22So it's canvas, then what tag, then attributes and observations, then content... see?\x22\x0a\x09\x09\x09\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09at: 'type' put: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09\x09onClick: [self addMotion]; \x22 <- observe button clicks and react adding motion\x22\x0a\x09\x09\x09\x09with: 'Add Motion'.\x0a\x0a\x09\x09\x09\x22makes sense so far?\x22\x0a\x09\x09\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09at: 'type' put: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-default';\x0a\x09\x09\x09\x09onClick: [self addGravity]; \x22 <- observe button clicks and react adding gravity\x22\x0a\x09\x09\x09\x09with: 'Add Gravity'.\x0a\x0a\x09\x09\x09\x22awesome, you get the point  :)  \x22\x0a\x0a\x09\x09\x09html button\x0a\x09\x09\x09\x09at: 'type' put: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-default btn-warning';\x0a\x09\x09\x09\x09onClick: [self reset];  \x22 <- observe button clicks and react reseting the presenter\x22\x0a\x09\x09\x09\x09with: 'Reset'.\x0a\x09\x09]   \x0a\x09\x09\x22Note that you're having all this properly factored in the right presenter/controller by design, so it's easy to prevent the problem of template mess\x22",
messageSends: ["class:", "div", "with:", "at:put:", "button", "onClick:", "addCounter", "addStuff", "addMotion", "addGravity", "reset"],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCanvasOn:",
protocol: 'rendering',
fn: function (html){
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
return self}, function($ctx1) {$ctx1.fill(self,"renderCanvasOn:",{html:html},globals.PolyWidget)})},
args: ["html"],
source: "renderCanvasOn: html\x0a\x09\x22Nothing too fancy, just the canvas tag with an id in case we need to get it referenced and a specific size.\x0a\x09We keep it in a variable for future use\x22\x0a\x0a\x09canvas := html canvas\x0a\x09\x09id: 'viewport'; \x0a\x09\x09at: 'width' put:'500';\x0a\x09\x09at: 'height' put: '500';\x0a\x09\x09yourself.\x0a\x09\x09",
messageSends: ["id:", "canvas", "at:put:", "yourself"],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderButtonsOn_(html);
self._createWorld();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.PolyWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09\x22Render this presenter in the given canvas...\x22\x0a\x09\x0a\x09\x22Lets render some buttons\x22\x0a\x09self renderButtonsOn: html.\x0a\x09\x0a\x09\x22Now create the <canvas>  html5 thing so PhysicsJS can do its job.\x0a\x09Next? take a look at how #createWorld works\x22\x0a\x09self createWorld.",
messageSends: ["renderButtonsOn:", "createWorld"],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@canvas"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._remove();
_st(_st(self["@worldWrapper"])._asJQuery())._empty();
self._createWorld();
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},globals.PolyWidget)})},
args: [],
source: "reset\x0a\x09\x22Gets rid of state, and start brand new\x22\x0a\x0a\x09\x22Remove the canvas element\x22\x0a\x09canvas asJQuery remove.\x0a\x09\x0a\x09\x22removes all children of the log\x22\x0a\x09worldWrapper asJQuery empty.\x0a\x09\x0a\x09\x22Create a fresh world\x22\x0a\x09self createWorld",
messageSends: ["remove", "asJQuery", "empty", "createWorld"],
referencedClasses: []
}),
globals.PolyWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "stuff",
protocol: 'accessing',
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


});
