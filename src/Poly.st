Smalltalk createPackage: 'Poly'!
Object subclass: #Poly
	instanceVariableNames: 'widget'
	package: 'Poly'!

!Poly methodsFor: 'as yet unclassified'!

gravity: anAccelerationValue

	widget gravity: anAccelerationValue
!

invertedGravity

	window app widget gravity: #{'x'->0.'y'-> -0.0004}
!

normalGravity

	window app widget gravity: #{'x'->0.'y'-> 0.0004}
!

widget
	^ widget
! !

!Poly methodsFor: 'not yet classified'!

onOpen

	widget := PolyWidget new.
	
	widget renderOn: (HTMLCanvas onJQuery: 'body' asJQuery)
! !

!Poly class methodsFor: 'not yet classified'!

doStuff

	window at: #app put: self new onOpen
! !

Widget subclass: #PolyWidget
	instanceVariableNames: 'physics gravity renderer world stuff canvas log worldWrapper counters'
	package: 'Poly'!
!PolyWidget commentStamp!
##PolyWidget is the Presenter for of the PhysicsJS canvas.
Some commands to have fun with:

 - addStuff
 - addMotion
 - addGravity!

!PolyWidget methodsFor: 'not yet classified'!

addCounter

		Counter new appendToJQuery: '#log' asJQuery
!

addGravity

	self basicAddGravity.
	(HTMLCanvas onJQuery: log asJQuery) p: 'GeronimOOOooo...'
!

addMotion
	
	self basicAddMotion.
	
	(HTMLCanvas onJQuery: log asJQuery) p: 'Things are moving!! Watch out!!...'
!

addRenderer
	<window.Physics(function(w){
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


	return world>
!

addStuff

	[self createThing.
	world add: self stuff first] tryCatch:["ignoring non polygons, click again and better luck!!"].
	
	world render.
	
	(HTMLCanvas onJQuery: log asJQuery) p: 'A thing was added...'
!

addStuffOld

	self addThing: self firstThing.
	self addThing: self secondThing.
	self addThing: self thirdThing.
	world add: self stuff first.
	world add: self stuff second.
	world add: self stuff third.
	
	world render
!

addThing: aThing

	self stuff add: aThing
!

basicAddGravity
	<var g = Physics.behavior('constant-acceleration', {
    	acc: { x : 0, y: 0.0004 }
		});
	self['@gravity']=g;
	world.add(g);>
!

basicAddMotion
	<window.Physics.util.ticker.subscribe(function( time, dt ){
    world.step( time )});

	window.Physics.util.ticker.start();
    
    world.subscribe('step', function(){
    	world.render();});>
!

counters

	^ counters ifNil:[counters := Array new]
!

createThing
	
	| newThing |

	newThing := self createThingIn: self randomPoint 
		vx: self randomSpeed
		from: 0 
		to: 200.
		
	self stuff addFirst: newThing
!

createThingIn: aPoint vx: aSpeed from: minimum to: maximum
	<return physics.body('convex-polygon', {
    x: 250,
    y: 250,
    vx: 0.01,
    vertices: [
        {x: 0, y: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum},
        {x: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum, y: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum},
        {x: Math.floor(Math.random() * (maximum - minimum + 1)) + minimum, y: 0},
        {x: 0, y: 0}
    ]
});>
!

createWorld
	| html |
	html := self newCanvas.

	worldWrapper := html div
		class: 'row';
		with:[
			html div
				class: 'span6';
				with:[
					self renderCanvasOn: html.
					world := self addRenderer].

			html div
				class: 'span3';
				with: [log := html div id: 'log']].
				
	(HTMLCanvas onJQuery: log asJQuery) p: 'World created...'
!

firstThing
	<return physics.body('convex-polygon', {
    x: 250,
    y: 250,
    vx: 0.01,
    vertices: [
        {x: 0, y: 50},
        {x: 50, y: 50},
        {x: 50, y: 0},
        {x: 0, y: 0}
    ]
});>
!

gravity: anAcceleration

	gravity setAcceleration: anAcceleration
!

newCanvas

	^ HTMLCanvas onJQuery: 'body' asJQuery
!

randomFrom: min to: max
	<return Math.floor(Math.random() * (max - min + 1)) + min>
!

randomPoint 
	^ (self randomFrom: 10 to: 400) @ (self randomFrom: 10 to: 400)
!

randomSpeed 
	^ (self randomFrom: 5 to: 70) / 1000
!

renderButtonsOn: html

	html div
		class: 'btn-group';
		with:[
			html button
				at: 'type' put: 'button';
				class: 'btn btn-default';
				onClick: [self addCounter];
				with: 'Add counter'.

			html button
				at: 'type' put: 'button';
				class: 'btn btn-default';
				onClick: [self addStuff];
				with: 'Add Stuff'.

			html button
				at: 'type' put: 'button';
				class: 'btn btn-default';
				onClick: [self addMotion];
				with: 'Add Motion'.

			html button
				at: 'type' put: 'button';
				class: 'btn btn-default';
				onClick: [self addGravity];
				with: 'Add Gravity'.

			html button
				at: 'type' put: 'button';
				class: 'btn btn-default btn-warning';
				onClick: [self reset];
				with: 'Reset'.
		]
!

renderCanvasOn: html

	canvas := html canvas
		id: 'viewport'; 
		at: 'width' put:'500';
		at: 'height' put: '500';
		yourself.
!

renderOn: html

	self renderButtonsOn: html.
	self createWorld.
!

reset

	canvas asJQuery remove.
	worldWrapper asJQuery empty.
	self createWorld
!

secondThing
	<return physics.body('convex-polygon', {
    x: 150,
    y: 150,
    vx: 0.02,
    vertices: [
        {x: 0, y: 25},
        {x: 30, y: 40},
        {x: 30, y: 0},
        {x: 0, y: 0}
    ]
});>
!

stuff

	^ stuff ifNil:[stuff := Array new]
!

thirdThing
	<return physics.body('convex-polygon', {
    x: 100,
    y: 100,
    vx: 0.008,
    vertices: [
        {x: 0, y: 15},
        {x: 100, y: 120},
        {x: 100, y: 20},
        {x: 0, y: 0}
    ]
});>
! !

