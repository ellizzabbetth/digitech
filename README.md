/****************  Digitech   *****************************/
This is a small AngularJS 6 application using materialize for front-end styles.


/***************  Getting Started  ********************/
These instructions will get you a copy of the project up and running on your local 
machine.

1. From the command line, install/update NPM globally.

For example: npm install npm@latest -g

2. Unzip 'fcim_bradley_<time>' to a local folder

The structure is as follows:

-css
  --style.css
-images
  --chihuly1.jpg
  .
  .
  .
-js
  --script.js
-pages
  --contact.html
  --detail.html
  --featured.html
  --home.html
  --list.html
app.js
index.html
README.md


3. Install a server globally such as http-server or live-server.

For example: npm install live-server -g

4. In the folder in which the application was downloaded,
start the server with the following command: live-server

5. Point browser to 'localhost'

/*****************   Prerequisites    ******************/
1. Internet connection
2. NPM installed
3. Live-server installed

/***************   Features    *************************/
1. Accessibility through ngAria

2. AJAX and JSON with Toast feedback

3. AngularJS routing, controllers, and factory

4. Collapsible Add Artist link and form under 'Community'

5. Collapsible SideNav when screensize is small

6. Slider on home.html, detail.html, featured.html

7. Carousel detail.html

8. Video on featured.html

9. Contact form on contact.html

10. Responsive Design with Materialize library

/*********************  Authors   ********************************/
1. Elizabeth Bradley


/**********************   Know Bugs or Issues  *******************/
1. Buttons scroll over footer.
2. Poor image resolution.


/*********************    Acknowledgments    **********************/
FCIM
Digitech
SpaceX
ngArgia (more on this below)
Materialize
Dale Chihuly
Lin-Manuel Miranda

/********************* Accessibility ********************************/
Why ngAria?
Many people in the world depend on assistive technologies such as screen readers, high contrast mode, braille keyboard support, closed captioning and more to use the web applications and services we take for granted. The popularity of MV* frameworks such as Angular.js has contributed many inaccessible web applications as our attention has gone to shinier topics such as mobile performance, databinding, automated tooling and ES6 support. We love to innovate the way we work, yet we forget basic things such as HTML semantics and supporting the keyboard.
In the past, Angular.js didn’t do much for accessibility–in fact, it made it more challenging by injecting attributes that didn’t work for accessibility, such as disabled on a custom element directive like <md-checkbox>. 
See this rendered markup example:

<md-checkbox ng-model="someModel" ng-disabled="isDisabled" disabled>
    Inaccessible Checkbox
</md-checkbox>
The above checkbox directive is inaccessible because it doesn't communicate anything to assistive technologies and it's inoperable from the keyboard. Although it's easy to use directives like ng-disabled on non-semantic elements, this leaves us responsible to also manage ARIA by ourselves. A helpful framework would eliminate this kind of pain and do the heavy lifting where we needed it. 
With the introduction of ngAria, common ARIA attributes are now handled by default when the module is included, helping to communicate the state of our application to users of assistive technologies.
Let's look at the same markup after ngAria has done its magic:

<md-checkbox ng-model="someModel" aria-disabled="true" tabindex="0">
    Checkbox
</md-checkbox>
Note: this example also requires role="checkbox" and aria-label to be accessible. In Angular Material, we handle this internally but those attributes could become managed by ngAria in the future.