# MyDogsTraining

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.



# Visual Studio Code debugging

1. Make sure to have version 3.1.4 or greater of the Debugger for Chrome extension installed in VS Code.
2. Go to Debug window (CTRL + SHIFT + D)
3. Choose "Add Configuration" in a top dropdown
4. Choose "Chrome"
5. Replace content of the generated launch.json with the following three configurations:

  ```json
 {
    "version": "0.2.0",
    "configurations": [
      {
        "name": "ng serve",
        "type": "chrome",
        "request": "launch",
        "url": "http://localhost:4200/#",
        "webRoot": "${workspaceFolder}/---->[folder to your project here]<----"
      },
      {
        "type": "chrome",
        "request": "launch",
        "name": "ng test",
        "sourceMaps": true,
        "webRoot": "${workspaceRoot}/---->[folder to your project here]<----",
        "url": "http://localhost:9876/debug.html",
        "pathMapping": {
            "/": "${workspaceRoot}/---->[folder to your project here]<----",
            "/base/": "${workspaceRoot}/---->[folder to your project here]<----"
        },
        "sourceMapPathOverrides": {
            "webpack:///./*": "${webRoot}/*",
            "webpack:///src/*": "${webRoot}/*",
            "webpack:///*": "*",
            "webpack:///./~/*": "${webRoot}/node_modules/*",
            "meteor://💻app/*": "${webRoot}/*"
        }
      },
      {
        "name": "ng e2e",
        "type": "node",
        "request": "launch",
        "program": "${workspaceFolder}/---->[folder to your project here]<----/node_modules/protractor/bin/protractor",
        "protocol": "inspector",
        "args": ["${workspaceFolder}/---->[folder to your project here]<----/e2e/protractor.conf.js"]
      }
    ]
  }
  ```
6. Set proper ${workspaceRoot} to point folder where application is
7. Add 

  ```
   customLaunchers: {
      ChromeDebugging: {
        base: "Chrome",
        flags: [ "--remote-debugging-port=9333" ]
      }
    },
 ```

 into karma.conf.js. And set browsers property to:

  ```
 browsers: ["ChromeDebugging"],
 ```


 8. To debug application run 
 ```ng serve``` 
 in terminal and then start debugging with 'ng serve' configuration'

 9. To debug tests run
 ```ng test```
 in terminal and then start debugging with 'ng test' configuration'

10. To debug e2e tests start debugging with 'ng test' configuration' and then run 
 ```ng e2e```
 in terminal 



 # Dogs json data

This is data used in training:

 ```
    data: [{
      id: 1,
      name: 'York',
      description: 'Yorks are very friendly dogs',
      image: 'https://c8.alamy.com/comp/JWWEFR/york-terrier-taking-a-bath-funny-wet-dog-JWWEFR.jpg'
    },
    {
      id: 2,
      name: 'German Shepard',
      description: 'German Shepard are very unfriendly dogs',
      image: 'https://i.ebayimg.com/images/g/lGYAAMXQNo5Taknl/s-l300.jpg'
    }, 
    {
      id: 3,
      name: 'Bulldog',
      description: 'Bulldog are very lazy dogs',
      image: 'https://i.ytimg.com/vi/ksEliwKxS-Y/hqdefault.jpg'
    },
    {
      id: 4,
      name: 'Lassie',
      description: 'Lessie are very old dogs',
      image: 'https://i.pinimg.com/736x/4d/c2/79/4dc279f7ad7fce4fc9ac65c4ed831bfd.jpg'
    }]
```


 # Useful extensions

| Name  | Description |
| ------------- | ------------- |
|  Debugger for Chrome | used for VS Code debugging |
|  vscode-angular-html | colorize Angular template |
|  Angular Language Service| provides a rich editing experience for Angular templates, both inline and external templates |
|  Angular Essentials | package with multiple useful Angular extensions |


 # CLI useful commands


**1. Setup**

| Command  | Description |
| ------------- | ------------- |
| npm install -g @angular/cli  | Install Angular CLI globally |

**2. New application**

| Command  | Description |
| ------------- | ------------- |
| ng new best-practises --dry-run  | just simulate ng new  |
| ng new best-practises --skip-install  | skip install means don't run npm install  |
| ng new best-practises --prefix best  | set prefix to best  |
| ng new --help	| check available command list  |


**3. Lint - check and make sure that our code if free of code smells/ bad formatting**

| Command  | Description |
| ------------- | ------------- |
| ng lint my-app --help  | check available command list  |
| ng lint my-app --format stylish  | format code  |
| ng lint my-app --fix   | fix code smells  |
| ng lint my-app  | show warnings  |


**4. Blueprints**

| Command  | Description |
| ------------- | ------------- |
| ng g c my-component --flat true  | don't create new folder for this component  |
| --inline-template (-t)  | will the template be in .ts file?  |
| --inline-style (-s) 	  | will the style be in .ts file?  |
| --spec		  | generate spec?  |
| --prefix  | assign own prefix  |
| ng g d directive-name	  | create directive  |
| ng g s service-name	  | create service |
| ng g cl models/customer	  | create customer class in models folder |
| ng g i models/person  | create create interface in models folder |
| ng g e models/gender  | create  create ENUM gender in models folder |
| ng g p init-caps	  | create create pipe  |

**5. Building&Serving**

| Command  | Description |
| ------------- | ------------- |
| ng build   | build app to /dist folder  |
| ng build --aot  | build app without code that we don't need (optimatization)  |
| ng build --prod	  | build for production  |
| ng serve -o   | serve with opening a browser  |
| ng serve --live-reload	  | reload when changes occur  |
| ng serve -ssl   | serving using SSL  |

**6. Add new capabilities**

| Command  | Description |
| ------------- | ------------- |
| ng add @angular/material 	  | add angular material to project  |
| ng g @angular/material:material-nav --name nav  | create material navigation component  |


# Component attributes

| Attribute  | Description |
| ------------- | ------------- |
| changeDetection	  | The change-detection strategy to use for this component.  |
| viewProviders  | 	Defines the set of injectable objects that are visible to its view DOM children  |
| moduleId  | The module ID of the module that contains the component  |
| encapsulation  | 	An encapsulation policy for the template and CSS styles  |
| interpolation  | 	Overrides the default encapsulation start and end delimiters ({{ and }}  |
| entryComponents  | 	A set of components that should be compiled along with this component.  |
| preserveWhitespaces  | 	True to preserve or false to remove potentially superfluous whitespace characters from the compiled template.   |


# URLs

| URL  | Description |
| ------------- | ------------- |
| https://material.angular.io/	  | Angular material website  |
| https://bit.ly/2UELHFy  | Logo url  |


# Styles

```css
.example-headers-align .mat-expansion-panel-header-title,
.example-headers-align .mat-expansion-panel-header-description {
  flex-basis: 0;
}

.example-headers-align .mat-expansion-panel-header-description {
  justify-content: space-between;
  align-items: center;
}

.red-snackbar {
  background-color:darkred;
}

.errors {
  font-size: 11px;
  margin-top:20px;
  color:darkred;
}

.add-row-button {
    left:50%;
    color:forestgreen;
}

.right-menu {
  position: absolute;
  right: 65px;
  font-size: 13px !important;
  text-align:right !important;
}

.avatar-button {
    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
}

.errors {
  font-size: 11px;
  margin-top:20px;
  color:darkred;
}

.ng-valid[required], .ng-valid.required  {
  border-left: 5px solid #42A948; /* green */
}

.ng-invalid:not(form)  {
  border-left: 5px solid #a94442; /* red */
}

.open-close-container {
    overflow: hidden;
    width: 80%;
    margin-left: 10%;
}

```

# Elements

**Rounded button**

```html
<button class="avatar-button" mat-mini-fab 
        [ngStyle]="{'background-image': 'url(' + avatarUrl + ')'}">
</button>
```
