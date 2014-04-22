#poly

[Amber Smalltalk](http://amber-lang.net/) demo with polygons and a physics simulator.

**Warning**: Barely working naugthy code hacked in minutes before a screencast! Plus some community help. Sharing because it might have educational value

##Prerequisites

You need to have installed [nodejs](http://www.nodejs.org/) then Amber. Note that newer versions of *nodejs* includes the node package manager *npm*, so you can get amber with:


    # Installs Amber's command line interface (global install, needed only once)
    npm install -g amber-cli
    
or

    sudo npm install -g amber-cli

Once you have the [Amber Smalltalk](http://amber-lang.net/) *command line interface* you can start your new Amber projects with this:

    mkdir myapp
    cd myapp
    amber init myapp
    amber serve


##Installing poly locally

  1. In your git root directory do:     

            git clone https://github.com/sebastianconcept/poly
            cd poly
            bower install
            amber serve

  2. Point your web browser to `localhost:4000` [1]
  3. Click on *add things* [2]
  4. Add motion to things
  5. Add gravity
  6. Open Helios or legacy IDE
  7. The code is in the Poly package

[1] If, for any reason, you don't have port 4000 available you can start amber with <code>amber serve --port 3000</code>

[2] The **Add things** button didn't add a polygon? That's because of a bad random number combination. Just bad luck! Click again until your 4 random numbers can form a closed polygon and I promise it *will* add things :)

##Feedback

Did you learn something or have questions? Join the [Amber group](https://groups.google.com/forum/#!forum/amber-lang) or the [amber-lang IRC channel](irc://freenode.net/channel?amber-lang) and share!

Did you improve something? thank you for your [pull request](https://help.github.com/articles/using-pull-requests)!


##Notes

1. The file `bower.json` contains the dependancy on http://wellcaffeinated.net/PhysicsJS/. Thus `bower install` pulls in this JavaScript framework.

2. This project shows how a third party JavaScript library is used in Amber Smalltalk. You can see how is loaded in the `index.html` file. 
