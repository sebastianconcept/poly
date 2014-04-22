Smalltalk createPackage: 'Poly'!
Object subclass: #Poly
	instanceVariableNames: 'widget'
	package: 'Poly'!
!Poly commentStamp!
After page load, all about the app starts here.  This is the object for the application.

An instance of this class gets created once all is loaded. It knows a PolyWidget instance which is the presenter so you can view and control things.

Go to the class side to the #main method.

Follow the rabbit!! You'll get it!

!Poly methodsFor: 'accessing'!

gravity: anAccelerationValue

	widget gravity: anAccelerationValue
!

widget
	^ widget
! !

!Poly methodsFor: 'actions'!

invertedGravity

	window app widget gravity: #{'x'->0.'y'-> -0.0004}
!

normalGravity

	window app widget gravity: #{'x'->0.'y'-> 0.0004}
! !

!Poly methodsFor: 'reactions'!

onOpen
	"The app is starting!! let's do things..."
	
	"Create a presenter that draw things and controls them"
	widget := PolyWidget new.
	
	"Render it in a canvas that will use jQuery to paint html tags in the page body.
	Next? check comments in PolyWidget>>renderOn: "
	widget renderOn: (HTMLCanvas onJQuery: 'body' asJQuery)
! !

!Poly class methodsFor: 'actions'!

main
	"When this Amber app is fully loaded in the DOM, we expect to 
	have this message sent (if you check the index.html file 
	you should find the reference in the callback that gets executed when all is loaded)"
	
	"Here we create a new instance for this app, make it react to 
	this important 'open' moment and make it to be known by the window for future reference.
	Next? check #onOpen"
	window at: #app put: self new onOpen
! !

Widget subclass: #PolyWidget
	instanceVariableNames: 'physics gravity renderer world stuff canvas log worldWrapper counters'
	package: 'Poly'!
!PolyWidget commentStamp!
##PolyWidget is the Presenter for this little demo application.
It basically renders the PhysicsJS canvas, adds some buttons and wire up the needed observations/reactions for them.

Some commands to have fun with:

 - addStuff
 - addMotion
 - addGravity!

!PolyWidget methodsFor: 'accessing'!

counters

	^ counters ifNil:[counters := Array new]
!

gravity: anAcceleration
	"Set a new value for the acceleration.
	Oh hacking this can be fun...
	Be responsible and don't collapse the Multiverse!!!!!! "

	gravity setAcceleration: anAcceleration
!

randomFrom: min to: max
	"If you have to do something in js directly you can.
	Just be sure you don't mix languages.
	It's either Smalltalk or Javascript.
	If you're feeling you need to mix, thing in a way to refactor that!!
	It's always a way to get them nicely separated.
	
	Ah, BTW, as suggested by its name, this method returns a random integer between min and max :) "
	<return Math.floor(Math.random() * (max - min + 1)) + min>
!

randomPoint 
	"Answer a random point"
	^ (self randomFrom: 10 to: 400) @ (self randomFrom: 10 to: 400)
!

randomSpeed 
	"Answers a random speed.

	Did you notice how in Smalltalk you make the method names so close to what they do that comments are barely needed?
	That's the smell of good code!!
	Of course good comments are always friendly and specially when your code can have subtle consequences.
	Pro tip:  with comments describe intention and what's the answer, like the first line of this comment.
	Pro tip 2: comments are a chance to play in team if you use them to increase empathy with who is /not/ very familiar with it. 
	If you do pro tip 2 right your future-self will be infinitely tankful to your past-self."
	^ (self randomFrom: 5 to: 70) / 1000
!

stuff

	^ stuff ifNil:[stuff := Array new]
! !

!PolyWidget methodsFor: 'actions'!

addCounter
	"Appends a counter to the log"
	
	Counter new appendToJQuery: '#log' asJQuery
!

addGravity
	"Adds gravity and logs the action"
	self basicAddGravity.
	(HTMLCanvas onJQuery: log asJQuery) p: 'GeronimOOOooo...'
!

addMotion
	"Adds motion and logs the action"
	self basicAddMotion.
	
	(HTMLCanvas onJQuery: log asJQuery) p: 'Things are moving!! Watch out!!...'
!

addRenderer
	"When I see code like this first thing I want to know is how do they know what to put there!!
	And to put this code here the source was this:
	http://wellcaffeinated.net/PhysicsJS/tutorials/creating-a-scene-of-interacting-polygons
	Only I've adapted it to render the way I wanted for this app, which was:
	colliding polygons that move and react to gravity and respect the limits of the canvas."
	
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

addThing: aThing

	self stuff add: aThing
!

basicAddGravity
	"Adds gravity to the world.
	Note 1: it adds the default gravity value (vertical positive acceleration of 0.0004)
	Note 2: notice that we are storing the gravity js g variable in the #gravity instVar
	by accessing with self['@gravity']. That's the way you can make javascript code to hack an amber object."
	
	<var g = Physics.behavior('constant-acceleration', {
    	acc: { x : 0, y: 0.0004 }
		});
	self['@gravity']=g;
	world.add(g);>
!

basicAddMotion
	"Here you see more PhysicsJS than Amber but what this does is
	to subscribe to the PhysicsJS ticker event a callback that will render the world (in each step).
	Without this you wouldn't have animation.
	All that is explained in the PhysicsJS docs and start to go beyond this demo"
	
	<window.Physics.util.ticker.subscribe(function( time, dt ){
    world.step( time )});

	window.Physics.util.ticker.start();
    
    world.subscribe('step', function(){
    	world.render();});>
!

createThing
	"Create a polygon and add it to the stuff collection"
	
	| newThing |

	"Makes sense?"
	newThing := self createThingIn: self randomPoint 
		vx: self randomSpeed
		from: 0 
		to: 200.

	"It's okay to have questions...
	Join https://groups.google.com/forum/#!!forum/amber-lang 
	and ask to other developers.
	Also you have the IRC channel   #amber-lang on freenode"
	
	self stuff addFirst: newThing
!

createThingIn: aPoint vx: aSpeed from: minimum to: maximum
	"Not the best example of how things are done.
	Lame justification: this app started as a quick hack for a screencast about amber init"
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
	"Creates the html5 canvas tag and initializes PhysicsJS into it.
	This is what guided us to know how to create this world:
	http://wellcaffeinated.net/PhysicsJS/tutorials/creating-a-scene-of-interacting-polygons"
	
	
	| html |
	
	html := self newCanvas.

	worldWrapper := html div
		class: 'row';
		with:[
			html div
				class: 'span6';
				with:[
					self renderCanvasOn: html.
					"Always navigate code by following implementors to understand Smalltalk things..
					What about #addRenderer now?"
					world := self addRenderer].

			html div
				class: 'span3';
				with: [log := html div id: 'log']].
				
	(HTMLCanvas onJQuery: log asJQuery) p: 'World created...'
!

newCanvas
	"Returns a new canvas to 'paint' tags in the body"
	^ HTMLCanvas onJQuery: 'body' asJQuery
!

reset
	"Gets rid of state, and start brand new"

	"Remove the canvas element"
	canvas asJQuery remove.
	
	"removes all children of the log"
	worldWrapper asJQuery empty.
	
	"Create a fresh world"
	self createWorld
! !

!PolyWidget methodsFor: 'rendering'!

renderButtonsOn: html
	"Some buttons to control the behaviour of this app"
	
	html div
		class: 'btn-group'; "<- why that? I'll pretend you didn't ask. You should already be familiar with this: http://getbootstrap.com/"
		with:[
			html button
				at: 'type' put: 'button';
				class: 'btn btn-default';
				onClick: [self addCounter]; " <- observe button clicks and react adding a counter"
				with: 'Add counter'.

			html button
				at: 'type' put: 'button';
				class: 'btn btn-default';
				onClick: [self addStuff]; " <- observe button clicks and react adding thigns"
				with: 'Add Stuff'.

			"So it's canvas, then what tag, then attributes and observations, then content... see?"
			
			html button
				at: 'type' put: 'button';
				class: 'btn btn-default';
				onClick: [self addMotion]; " <- observe button clicks and react adding motion"
				with: 'Add Motion'.

			"makes sense so far?"
		
			html button
				at: 'type' put: 'button';
				class: 'btn btn-default';
				onClick: [self addGravity]; " <- observe button clicks and react adding gravity"
				with: 'Add Gravity'.

			"awesome, you get the point  :)  "

			html button
				at: 'type' put: 'button';
				class: 'btn btn-default btn-warning';
				onClick: [self reset];  " <- observe button clicks and react reseting the presenter"
				with: 'Reset'.
		]   
		"Note that you're having all this properly factored in the right presenter/controller by design, so it's easy to prevent the problem of template mess"
!

renderCanvasOn: html
	"Nothing too fancy, just the canvas tag with an id in case we need to get it referenced and a specific size.
	We keep it in a variable for future use"

	canvas := html canvas
		id: 'viewport'; 
		at: 'width' put:'500';
		at: 'height' put: '500';
		yourself.
!

renderOn: html
	"Render this presenter in the given canvas..."
	
	"Lets render some buttons"
	self renderButtonsOn: html.
	
	"Now create the <canvas>  html5 thing so PhysicsJS can do its job.
	Next? take a look at how #createWorld works"
	self createWorld.
! !

