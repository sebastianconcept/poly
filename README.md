#poly

Amber Smalltalk demo with polygons and a physics simulator.

**Warning**: Barely working naugthy code hacked in minutes before a screencast! Sharing because it might have educational value

##Prerequisites

You have installed [nodejs](http://www.nodejs.org/).  With *nodejs* comes the node package manager *npm*. The execute


    npm install -g amber-cli
    
or

    sudo npm install -g amber-cli

to get the [Amber Smalltalk](http://amber-lang.net/) command line version.


##Local installation?

  1. in your git root directory do:     

            git clone https://github.com/sebastianconcept/poly

  2. 
            cd poly

  3. 
            bower install

  4. 
            amber serve

  5. Point your web browser to `localhost:4000`
  6. click on *add things*
  7. add motion to things
  8. add gravity
  9. open Helios or legacy IDE
  10. The code is in the Poly package


##Feedback

Did you learn something or have questions? Join the [Amber group](https://groups.google.com/forum/#!forum/amber-lang)

Did you improve something? thank you for your pull request!


##Notes

1. The file `bower.json` contains the dependancy on http://wellcaffeinated.net/PhysicsJS/. Thus `bower install` pulls in this JavaScript framework.

2. This project shows how a third party JavaScript library is used in Amber Smalltalk. See file `index.html` how it is loaded. 
