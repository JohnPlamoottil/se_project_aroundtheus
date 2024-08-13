# Project 8: Around the USA

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

**Intro**

This project is made so all the elements are displayed correctly on popular screen sizes using media queries.

**Figma**

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
