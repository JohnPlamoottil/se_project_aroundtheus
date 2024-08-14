# Project 8-9: Around the USA

### Overview

- Intro (3)
- Figma (3)
- Images (3)
- Javascript (4)
- Element Cloning (Moving and Removing Elements) (5)
- DOM Related Methods Return Array-Like Collections
  - These Collections are querySelectorAll, Array.from() (5)
- Form Validation (6)
- Event Handlers (6)
- OOP (7)
- interfaces in OOP (7)
- Modular JS introduction (7)
- WebPack(8)
- Section handles the rendering of Card instances on the page (8)
- Popup is basic popup class responsible for opening/closing popups (8)
- PopupWithImage and PopupWithForm are subclasses of Popup implementing the image popups and forms. (8)
- UserInfo gets and sets the users profile info (8)
- Asynchronous Programming (9)
- APIs  (9)
- Object Prototypes (9)

**Descriptions**

This project is a portion of the continuing project called Around the U.S. (started in Sprint3)

In Sprint3, I created a responsive layout from the design specs in Figma using grids and adding buttons.

1. Working with fonts and text in Figma
2. Working with images in Figma
3. Working with other users
4. Saving a Figma file
5. Deploy your project to GitHub Pages
6. Publish your project on GitHub Pages for the whole world to see.

In Sprint4 I utilized Javascript (script.js) to make the project interactive:

1. stage 1 - creating an array for initial cards for the 6 imgs and links
2. stage 2 - creating a modal box in the CSS
3. stage 3 - using the DOM to create buttons within About Me, Save, Close integrated with HTML and CSS and JS
4. stage 4 - adding final functionality to the modal box and making the 6 cards render from the array

In Sprint5, I added on more elements to the previous project. The elements I added includes a new modal for adding new cards to display, an image popup that toggles on mouse-click, a like button that interacts with mouse-clicks and a delete icon that removes cards fromthe page.

1. Rendered Cards
2. Form for Adding a Card
3. Adding a Card (New Place)
4. Inserting Like Button (heart icon)
5. Inserting Trash Icon for Deleting a Card
6. Opening a Picture Modal
7. Smooth Modal Opening and Closing

In Sprint6, I started to debug JS using console.log() to validate changes made on the console. Also I incorporated the use of Objects, Event Handlers, Forms, & Form Validation.

1. Objects
   1. intro to objects
   2. creating objects and adding properties
   3. accessing properties
   4. operators (delete, in)
   5. iterating over properties
   6. pass by reference
   7. comparing objects
   8. copying objects
   9. shallow copying
   10. deep copying
   11. Objects as Arrays
   12. Objects as Functions
2. Event Handling
   1. intro
   2. keyboard events
   3. properties of Keyboard Event Objects KEOs
   4. properties of Mouse Event Object MEOs
   5. Removing Event Listener
   6. Preventing a Browsers Default Behavior - evt.preventDefault();
   7. Event Bubbling and Delegation
   8. extra-preventing bubbling
   9. extra-HTML event attributes
   10. resources
3. Forms
   1. intro
   2. accessing forms using JS
   3. submitting forms
   4. accessing form elements
   5. referring to Form elements values
   6. The Change and Input elements
   7. the Reset and Submit Methods
4. Form Validation
   1. intro
   2. browser build-in form validation
   3. JS form validation
   4. connecting JS validation to the DOM
   5. validation of several fields and forms
   6. interaction with other DOM elements
5. Debugging in Javascript
   1. console.log

In Sprint7, the purpose is to change javascript classes as Max pointed out in his tutorial. The classes to focus on are Card.js and FormValidator.js with text and images in the scripts folder. Refactoring the code by removing validation.js and shifting to Card.js and FormValidator.js

1. Intro to Object Oriented Programming OOP
   1. program - a set of interacting objects that make up a single structure
   2. object - store data and have methods enabling that data to be passed from one obj to another
   3. encapsulation - in OOP, the practice of hiding much of the internal complexity of a program from its end users; an user interphase UI. private methods are denoted with underscore and an # to enforce private status. public methods does not have _ underscore.
   4. inheritance - in OOP, its the mechanism of using one class to form the basis of another. the original former one is the PARENT or superclass, while the latter one is CHILD or subclass. 
   5. polymorphism - the ability of objects c the same interface to have different implementation. the ability of a subclass to expand upon the functionality that it inherits from its parent or superclass class; method overriding. 
   6. properties - key-value pairs
   7. method - the value is a function
   
2. Interfaces in OOP Part1
   1. Working With a Markup Template Inside a Class
      1. Page elements can be categorized as either static or dynamic.
         1. Static elements stay the same over multiple pages.
         2. Dynamic elements can change, often on input by the user, and even without the page being refreshed.
      - Static elements are best written in HTML. 
      - Dynamic elements, on the other hand, can be created in scripts, preferably      utilizing HTML <template> elements.
   1. Adding Data to Markup and Inserting it into the DOM
      1. Expanded Card class example
   2. Scaling a JavaScript Class
      1. Passing an object to the constructor method
   3. Event Handlers
      1. To add event listeners to our Card elements, we will define a private method _setEventListeners which gets called inside of the public generateCard method.
   4. Applied Inheritance
      1. using SUPER to call methods of the parent class
      2. create instances of the subclass
   5. Polymorphism
 
1. Intro to Modular Javascript
   1. immediately invoked function expression IIFE - an anonymous function that runs as soon as its defined. since all variables inside a function are LOCAL VARIABLES, wrapping all the code inside an IIFE will prevent any of them from being global or preventing it from being accessed from outside the IIFE. 
   2. Modules is an independent unit of code supporting a part of the program's functionality.  
   3. Export and Import Statements
      1. Export syntax:
         1. `export const array = [1, 2, 3]` — export on declaration.
         2. `export { dog, cat }` — export multiple entities separate from their declaration.
         3. `export default data` — export a single variable, function, or class.
      2. Import syntax:
         1. `import { array } from "./data.js"` — import using a feature's original name.
         2. `import *` — import all exports.
         3. `import { array as arr } from "./data.js"` — rename feature on import.
         4. `import data from "./data.js"`; — import of a default export (no curly braces needed).
   4. Browser-Specific Features of Modules
      1. Modules are a relatively new JavaScript feature, and so aren't fully supported by older browsers. 
      2. Adding an additional script tag of type="nomodule" below your module tag can work around this limitation in HTML.
         1. <!-- this module will load if the browser is modern --> 
            1. <script type="module"></script>
         2. <!-- this module will load if the browser is older -->
            1. <script type="nomodule"></script>

In Sprint 8, this project continues the refactoring from the previous project, introducing a number of new classes. Additionally, I will set up Webpack for the project.

1. Destructuring Syntax = Destructuring is a convenient syntax that allows us to unpack arrays and objects, easily assigning the values they contain to variables. 
   1. OBJECT DESTRUCTURING
      1. When destucturing non-array objects, we refer to the names of individual properties of that object.
      2. Referring to a property that isn't present in the object does not produce an error. Instead, it quietly sets that variable to undefined
      3. Renaming the properties is accomplished with a familiar syntax.
      4. Use destructuring inside a function's parameter list.
   2. ARRAY DESTRUCTURING  
      1. When destructuring arrays, it is the ORDER of the elements that matters, and the names they are assigned to can be arbitrarily chosen.
   3. ARGUMENT DESTRUCTURING & DEFAULT VALUES
      1. Destructuring is often used with function arguments/parameters. 
         1. comparative syntax
            1. without destructuring
               1. use params
            2. with destructuring
               1. name the properties inside the parameter instaed of just naming the parameter
      2. Default Values are assigned during array and obj destructuring
         1. default values are only assumed for properties that were not named in the original object
   
2. Interfaces in OOP Part2
   1. introduction - The main organizational principle at work is to divide your code into a collection of well-defined parts (ie, modules), each with its own responsibility.
   2. project file structure
      1. To effectively structure a project that uses OOP, organize your JS files into separate folders
      2. Keeping all interactions between classes in index.js helps to increase the independence of those classes, and hence their reusability in other projects.
   3. creating several classes in a project
      1. This lesson explains how to refactor the card placement code found here in an object-oriented style, by the creation of a new Section class.
         1. - The `Section` class is responsible for adding elements to the DOM: nothing more, nothing less.
          - Its constructor accepts two parameters:  an array `data` of card elements and a CSS selector.
          - It has two public methods:
             - `setItem(element)` uses the `append` method to place `element` in the appropriate container on the DOM.
             - `renderItems()` which iterates over the array of cards from the constructor, calling `setItem` on each item.
             - Usage: instantiate in `index.js` and call `renderItems`.
   4. Project Layers
      1. - The first type of component is responsible for its own visual representations. An example of the is the `Card` class that we have seen, which has properties and methods that are used to generate the markup for the corresponding elements.
      2. - The second type of component does not have its own visual representation and instead exists to handle some specific task. These are called **project layers**.
    - Examples include:
        - `FormValidator`, which interacts with the Validation API, and
        - `Section`, which exists to place elements on the DOM.  
   5. Realationships Between Classes
      1. two types of classes
         1. tight coupling - when classes have been implemented such that they cannot work independently of each other
         2. loose coupling - when classes have been implemented to be independent of one another, facilitating code reuse. In general, loose coupling is to be preferred over tight coupling.   
   6. Working c Event Listeners part1 - The first part of a code example detailing the process of building a SubmitForm class that creates new card instances on submission. 
   7. Working c Event Listeners part2 - 
      1. SubmitForm description:
         1. Its constructor takes two parameters, the selector for the form template element and the submit event handler function, handleFormSubmit.
         2. Methods
            1. Private Methods 
               1. _getTemplate clones and returns the form element from its template.
               2. _setEventListeners sets a submit listener on the form element, with this._handleFormSubmit as its callback.
               3. _getInputValues returns the input values from the form as an object that will be passed to this._handleFormSubmit when called by the listener.
            2. Public Method
               1. It has one public method, generateForm, which gets the cloned element with _getTemplate, calls _setEventListeners and returns the element.  
         3. Note how generateForm and _getTemplate are analogous to the similarly name methods in our Card class. 
3. Webpack QuickStart Guide
   1. In the root directory of your project, run npm init and answer the questions you are prompted with.
   2. Add these scripts to package.json 
   3. Go to the platform page containing the final configuration files. Add each one, along with their contents, to the root of your project:
    - `package.json`
    - `webpack.config.js`
    - `babel.config.js`
    - `postcss.config.js`
   4. Add .npmrc with the line save-exact=true to the root of your project.
   5. Add .gitignore with the line node_modules to the root of your project.
   6. Run npm install. The dependencies are already listed in package.json.
4. Project Building c Webpack
   1. NPM: Node Package Manager
      1. Node.js is a JavaScript runtime that allows us to run JS outside of a browser. NPM is a package manager that allows us to easily manage Node.js packages.
   2. Installing Webpack
      1. install webpack, with npm i webpack@5.76.0 --save-dev --save-exact.
      2. install webpack command line interface, with npm i webpack-cli@4.10.0 --save-dev --save-exact.
   3. Bundle/Build Configuration
   4. Webpack Setup
   5. Installing a JS Transpiler: Babel
   6. HTML Webpack Plugin
   7. CSS Webpack Plugin
   8. Image and Font Processing
   9. CSS Minification and AMinification compresses file size while maintaining all functionality, while autoprefixing ensures cross-browser compatibility.utoprefixing with PostCSS
   10. Final Configuration Files

In Sprint 9, this sprint focuses on asynchronous code and its application in working with APIs and making HTML requests.

This is the final pure JavaScript iteration of your Around the US project. The major focus is on connecting the project to a server using fetch requests. This will make your cards and user data persistent. Other new features include a counter for likes, a confirmation modal that appears prior to deleting a card, and another modal for changing the profile picture.

A. ASYNCHRONUS PROGRAMMING
1. Intro
   1. So far, most of the code that you have dealt with has been synchronous, meaning that it's executed in a linear fashion, one command after the next. But code like this will perform poorly if some of the commands take too long to execute. For instance, if a request that has been sent to a server is slow to return to the page it originated from, the end-user will be annoyed by the lag. To mitigate this, we can allow the browser engine to continue with its other tasks while waiting for the poky response. This type of code is called asynchronous, and it is the focus of this chapter.
2. Callbacks
   1. Recall that callbacks are functions that are passed as arguments to other functions. You have used them already in several contexts, from event listeners to forEach loops. They can be used both synchronously and asyncronously. This lesson focuses on the former.
3. Asynchronous Callbacks
   1. This lesson provides an example of using callbacks asynchronously, showing how we can prevent a newly created image element from being rendered before it is ready by using a callback function and the element's onload property.
4. Timers
   1. Timers are built-in browser functions that allow us to delay the execution of parts of our code. 
   2. Explanation of arguments:
      1. - The first argument is a callback function containing the code to be executed.
      2. - The second argument is the amount of time in milliseconds the function should wait before executing the callback.
      3. - Additional arguments to `setTimeout` will be fed to the callback function.
5. Event Loops 
   1. The event loop is the mechanism that is "responsible for executing the code, collecting and processing events, and executing queued sub-tasks." — [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)  Basically it is a `while` loop that waits for asynchronous events and pushes them onto the **call stack** to be executed.
   2. - The order in which different parts of code get executed can be a bit hard to parse, even without throwing asynchronous code into the mix. Here is a line by line breakdown of the example given in this lesson.
      1. [Line by Line Call Stack Example](https://www.notion.so/a5c412f951a54f8ca0cbf877ac8d8e3e?pvs=21)
   3. Line by Line Call Stack Examples - NOTESHEET
   
6. Promises
   1. We've mentioned the use of callback functions for asynchronous functions. This works well enough for simple processes, but it can grow unmanageable very quickly when you have multiple nested callback functions. **Promises** can achieve the same effect much more conveniently.
   2. Promises are objects that represent the final fulfillment or failure of an asynchronous operation. As such, they are often used to send requests to servers, something you will soon grow familiar with.
   3. - `Promise` object Methods
      1. These are objects of the `Promise` object, not of its instances.
         1. - `Promise.resolve(value)` returns a promise object that is resolved with the given value.
         2. - `Promise.reject(value)` returns a promise object that is rejected with the given value.
         3. - `Promise.all(arrayOfPromises)` attempts to resolve all promises in the array and returns the response values in an array.
   
B. INTRO TO WORKING WITH APIs
   In this chapter, you learn how to send server requests and receive responses. Server interaction opens an exciting new chapter in our web development adventure. There are many APIs on the internet from which we can receive data, and in this chapter, you'll learn how to interact with them.
1. HTTP: Hypertext Transfer Protocol
   1. The internet is a network of computers that exchange information. In order for this to function properly, there must be a certain standard that specifies the form that the data passed from computer to computer will take. HTTP was the first such standard. It defines the rules for sending requests and responses.
2. Making Requests with JavaScript
   1. The asynchronous fetch method is one of the ways to send requests with JavaScript code. 
3. JSON Format
   1. JSON (JavaScript Object Notation) is a format for transmitting data that is usable by any programming language. The syntax is similar to a JavaScript object (hence the name).
4. HTTP Request
   1. HTTP request methods define what has to be done with the requested resource. Here are some of the more common ones.
5. Server Responses
   1. We've already discussed the response object's json() method, but it has many other properties and methods to note.
      1. Status Codes inform us the success or failure of a request.
         1. subdivided according to their first digit.
            1. - 200's — indicate a successful request.
            2. - 300's — indicate that the request has been redirected.
            3. - 400's — indicate that there's something wrong with the request. The server can't find the requested resource, or the client doesn't have access rights to the resource.
            4. - 500's —  indicate that the server has encountered an internal error.
         2. - Common Status Codes include
            1. - 200 OK
            2. - 201 Created
            3. - 401 Unauthorized
            4. - 403 Forbidden
            5. - 404 Not Found
            6. - 500 Internal Server Error
         3. The codes and their messages are available as the response object's res.status and res.statusText properties. There is also a boolean property res.ok that returns true if the status code is in the 200's.
         4. Response Headers
            1. - These are accessible as `res.headers`, but it doesn't behave like a normal JavaScript object, because the headers are case-insensitive, whereas objects are not.
            2. - So there are special methods for working with it.
            3. Note that response headers are read-only.
         5. Response Body
            1. - Responses almost always have a body. For instance, when we request a webpage the response is the page's HTML.
            2. - Here are three methods that are usable to convert the data in a response body.
               1. - `res.json()` — converts response data to JSON. This is what you will be using most often.
               2. - `res.text()` — converts the response body into text.
               3. - `res.blob()` — returns the response body as binary data. It's often used to exchange various files: videos, images, PDF docs. This method starts a stream of decoded data, that's received gradually.
            3. - All of these methods work asynchonously, so you can't use the values they return in the same .then block.
6. DevTools: Network Panel
   1. This lesson introduces a new tool in your debugging arsenal: the network panel. Here, you can view all the HTTP requests made by the page you currently have open. This includes requests for HTML, CSS, JS, images, as well as fetch requests made using JavaScript.
   2. You can filter the requests using several different parameters.  We will mostly use XHR (XMLHttpRequest), which covers fetch requests.
   3. The platform goes in to more detail on its usage.
7. Bonus Lesson: Default Form Submission
   1. In modern programming, JavaScript is always used for form processing, but in older code default form submission via HTML is still in use. This lesson explains how it works, and why JavaScript is greatly preferable to it.
   
C. OBJECT PROTOTYPES
1. The __proto__ Property
   1. A prototype is an object from which other objects inherit properties and methods. If the initial object doesn't store specific properties or methods, the engine will look for them in the prototype object.
2. The `Object.create` Method
   1. The `Object.create` method creates an empty object with the specified prototype.
3. The **new** Operator
   1. We can encapsulate the logic of the previous example into a function like this.
      1. function createPopupWithForm(selector, submitHandler) {

	      // 1. create a new empty object with a prototype linked to it.
               const popupWithForm = Object.create(popup);

         // 2. add all necessary properties to this object.
               popupWithForm.selector = selector;
               popupWithForm.submit = submitHandler;
   
         // 3. return the object
               return popupWithForm;
         }
      2. Steps 1 and 3 can be automated by calling a function with the `new` operator. When called with `new`, additional steps are taken by the browser, before and after executing the functions body:
         1. Before executing the function, the engine creates a new empty object and assigns it to the value of `this` inside the function being called.
         2. The engine then executes the function code.
         3. After executing the function, `this` is returned.
      3. It is customary to name functions that are intended to be used with the `new` operator with an initial capital letter, to make this intention clear.
4. The **prototype** Property
   1. Calling a function with the `new` operator automatically creates an empty object, adds the `this` keyword to it, then returns it after the function's code is executed.  
   2. The returned object has a property called `prototype`. We can add methods and properties to the `prototype` property, which will be then be stored in the prototype — that is to say, in the `__proto__` property of the created object.
5. The Secret Behind JavaScript Classes
   1. This brings us to the big reveal — JavaScript classes basically do the same thing that we've described in the preceding lessons. For comparison, here we rework the previous example using classes instead.
6. Built-in Constructors and Their Prototypes
   1. Built-in obects in JavaScript have their own constructor functions. 
   2. When we declare a new object instance, the appropriate object is stored in the prototype of the instance. These prototypes may contain a number of useful methods.
7. Inheritance and the ProtoType Chain
   1. Inheritance works by adding linking a parent class to the __proto__ property of the child, forming a chain that ultimately connects the child to the prototype of its parent as well.

Project Objectives:

Sprint3:

1. working with design specs
2. design in a world of ever-changing devices
3. grid layout
4. developing interfaces for different devices
5. intermediate Git

Sprint4:

1. Data Types and Variables
2. Conditionals and Loops
3. Data Structures, Arrays, and Objects
4. Functions
5. Basics of the DOM
6. Debugging
7. Export GIT

Sprint5:

1. More About Strings, Numbers, and ...
2. Array Methods
3. Functions. Part2
4. Working c the DOM. Part2
5. Managing the GIT Story

Sprint6:

1. Objects
2. Event Handling
3. Working with Forms
4. Form Validation
5. Debugging in Javascript

Sprint7:

1. Intro to Object Oriented Programming OOP
2. Interfaces in OOP
3. Intro to Modular Javascript

Sprint8:

1. Destructuring Syntax
2. Interfaces in OOP Part2
3. Project Building c WebPack

Sprint9:

1. Asynchronous Programming
2. Intro to Working with APIs
3. Object Prototypes


**Intro**

This project is made so all the elements are displayed correctly on popular screen sizes using media queries.

**Figma**

-[Link to the project9 on Figma] (https://www.figma.com/design/E5x6ib3osaUUNwLRRAsTDX/Sprint-9-%E2%80%94-Applied-JavaScript?node-id=1530-2&t=PmjVPNRUjTbbT1SW-0)

-[Link to the project6 on Figma] (https://www.figma.com/file/N3zUeequnpvMX807FfYAZW/Sprint-6-Around-The-U.S.?fuid=1292520043125919162)

- [Link to the project5 on Figma] (https://www.figma.com/file/JFPhASqvZ5pBjQV2ouUlim/Sprint-5_-Around-The-U.S.-_-desktop-%2B-mobile-(Copy)?type=design&node-id=0-1&mode=design&t=3Is6tCgbLMhdDBfO-0#40;Copy&#41;?t=3hvVWRz9LUFsxyNn-6)

- [Link to the project4 stage3&4 on Figma] (https://www.figma.com/file/EO5AaNCuzzFL7X5gSY7HwQ/Sprint-4_-Around-The-U.S.-_-desktop-%2B-mobile?type=design&node-id=0-1&mode=design&t=z5FVK2njhR9SnGnr-0)

- [Link to the project4 stage2 on Figma] (https://www.figma.com/file/mUgu8OSHWE0M6p6vfwmdu9/Sprint-4%3A-Around-The-U.S.-%2F-desktop-%2B-mobile?node-id=6432%3A356&mode=dev)

- [Link to the project4 stage1 on Figma] (https://www.figma.com/file/EO5AaNCuzzFL7X5gSY7HwQ/Sprint-4_-Around-The-U.S.-_-desktop-%2B-mobile?node-id=0%3A1&mode=dev)

- [Link to the project3 on Figma] (https://www.figma.com/file/Es8zZP3ARGH9JGcw60i3OD/Sprint-3_-Around-the-US?node-id=6432%3A187&mode=dev)

**Images**

- retrieved the images from the sprint3 platform
- or the images could be directly exported from Figma is another method
- optimized them so the projects load faster
- [project3 image](./readme%20image/project3.png)

Good Luck and Have Fun!

- [Project Link](https://johnplamoottil.github.io/se_project_aroundtheus/)

- [Project3 Video Submission Youtube unlisted Link](https://youtu.be/9h6GOltyLww)
