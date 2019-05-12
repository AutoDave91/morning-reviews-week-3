var firstName = "Clark";
var lastName = "Kent";

function showFullName() {
  console.log(this.firstName + " " + this.lastName);
}

//The context of all of the above is the window object. "This" refers to the object to which it belongs. In the above example, it belongs to the window object. This is DEFAULT context.

var hiddenIdentity = {
  firstName: "Super",
  lastName: "man",
  showFullName: function() {
    console.log(this.firstName + this.lastName);
  }
};

//The context of 'this' in the above example is the object that 'this' refers to, which is the 'hiddenIdentity' object. The context is within the object (i.e. it is being used within a method on the object), so this is IMPLICIT context.

showFullName();  ///Look to the left to find what 'this' refers to. Nothing there, it's the WINDOW object.
window.showFullName(); 
hiddenIdentity.showFullName(); //Look to the left, see that 'this' refers to hiddenIdentity. Here, showFullName() is a method on the object.


function getHelp(){
    return "Help me, " + this.firstName + this.lastName
}

getHelp()

//If we call the 'getHelp()' function above, who will come to help us?

///========>>>>>> Clark Kent ////// The getHelp() function is within the window object

//How can we use .bind() to bind 'this' in the getHelp() function to Superman?

let callSuperman = getHelp.bind(hiddenIdentity)

callSuperman() ///uses the getHelp() function bound to hiddenIdentity to call Superman

///Using the .bind() method is an example of explicit binding because we explicitly say what "this" is bound to