## angular2-seed (with TypeScript)

A simple starter project demonstrating the basic concepts of Angular 2.

### TypeScript Language Service Demo

- Clone or fork this repository
- Run `npm install`
- Open the folder as a workspace in VS Code (shortcut: run `code .` from the repo folder)
- Open src\app\app.component.ts
- When prompted, choose to use the "workspace" version of TypeScript
- You should see an error in the template string:
```
  template: '<div title={{ba}}></div>'
                          ~~ error: 'ba' is not defined
```
- Place the caret in the attribute template, delete 'ba', and press Ctrl-Space
- You should see the class members:
```
@Component({
  selector: 'app',
  template: '<div title={{}}></div>'
                          foo
                          bar
})
export class AppComponent {
  foo: string;
  bar: number;
}

```
- Select 'foo'
- Press F12 to *Go to Definition*
- The caret is now on the `foo` member of the component class



### Usage
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed version 5+
- Make sure you have NPM installed version 3+
- `WINDOWS ONLY` run `npm install -g webpack webpack-dev-server typescript` to install global dependencies
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)
- if you want to use other port, open `package.json` file, then change port in `--port 3000` script

