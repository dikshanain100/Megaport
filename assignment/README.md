# Steps for starting the proeject 
1) Make sure you have node version above 12 (used for running json-server) and angular-cli installed
2) Install json-server globally using command  `npm install -g json.server`
3) Open git bash and clone the project using command `git clone https://github.com/dikshanain100/Megaport.git`
4) Once project is cloned, open the project in visual studio and run `npm install` inside terminal.
5) After dependencies are installed, open cmd and navigate to the project folder (till assignment), and run `json-server --watch db.json`. This will start json-server which will serve `db.json`(present inside the project) having json data for the first module(bakery).
You can access the json file using url : http://localhost:3000/bakeryItems
6) Now, run `npm start` to start the project. Use url : http://localhost:4000/ to land on home page.




################################################################################################

# Assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
