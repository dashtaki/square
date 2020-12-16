# Square

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.
Square uses [jsonplaceholder](https://jsonplaceholder.typicode.com/) API to fetch [100 posts](https://jsonplaceholder.typicode.com/posts) and render them
all and show them as squares, 10 rows x 10 columns.

# Get started

### Clone the repo

```shell
git clone https://github.com/dashtaki/square.git
cd square
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm i
npm start
```

Navigate to `http://localhost:4200/`.
Shut it down manually with `Ctrl-C`.

#### npm scripts

These are the most useful commands defined in `package.json`:

- `npm start` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
- `npm run build` - runs the TypeScript compiler and asset copier once.
- `npm run lint` - runs `tslint` on the project files.
- `npm run serve` - runs `lite-server`.

These are the test-related scripts:

- `npm test` - builds the application and runs Intern tests (both unit and functional) one time.
- `ng e2e` - execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

These are also [Prettier](https://prettier.io/) scripts:

- `pretty` - run Prettier.
- `pretty-check` - check if your files are formatted.

## Code scaffolding

####Testing
I have written test(unit test for services and functional tests for components) in `master` branch.
I also have written tests for Ngrx in `feature/ngrx` branch.

####Prettier
Using [Prettier](https://prettier.io/) for opinionated code formatter.
It will take care of formatting for you. 
Prettier creates an abstract syntax tree from your code and uses it to write new code formatted according to a set of rules.
In addition, I check pretty before every commit by add a pre-commit hook. For more detail check package.json, husky section.

####Ngrx
There is another version of application, with RxJs shared-state however in both cases I tried to write unit tests for services and functional tests for component by Jasmine.
Please check it out the .spec files.
There is a branch named feature/ngrx that I create a shared state by Ngrx and try to fetch data(Calling API) by ngrx/efffect.
You can see the changes regarding using RxJs shared-state:
<br />
`git checkout feature/ngrx`

####BEM
Use [BEM](http://getbem.com/introduction/) as CSS naming methodology and naming convention for writing cleaner and more readable CSS classes.
 BEM also aims to write independent CSS blocks in order to reuse them later in your project.
That’s what I preferred to don’t use Bootstrap as a CSS framework and one more reason was it is a small project that it can be handled without any CSS framework.

####Spinner
I have created a component as Spinner for showing a loader while fetching data from server, in this case jasonplaceholder,
Most of the time jsonplaceholder is fast in terms of response, then I tried to simulate latency for API.
For simulation you need to:

1. `git checkout feature/ngrx`
2. in `src/app/square/store/effect/square-effect.ts` un-comment line:20 `debounceTime(3000)`
3. `npm start`

####Branching
There are three branches that you can check it out by run
`git branch`

1. `master` - the non-state version of the application
2. `feature/ngrx` - shared state supported
3. `main` - the same as `master`

####Services
As you can see, I tried to move all the logic to services.
I think moving the logic to the service can improve testability and readability,
also it will decrease the complexity in component. I addition, it will really help to modularity of the project.

####In-code Documentation
Good code does not need documentation however
I tried to make some documentation in code because I had time :)
Every service create has a unique API to it.
Writing how to use that API requires documentation that can be read outside of the code.
You do not want to inflate the class itself with details about how to use the API.
In this case I get used to go for Swagger also for code generation as well.
There are some npm packages that you can use it to generate interfaces, enums, models and services as well,
like [ng-swagger-gen](https://www.npmjs.com/package/ng-swagger-gen).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
