# Sparkers

This application allows users to fetch, edit, and delete partners, as well as create new ones.

The main functionality can be found on the /partners page, which includes partner fetching, editing, creation, and deletion. A simple form is present on the Home page, implementing ngForms as per the requirements.

**Key Features :**
- Fetch, create, edit, and delete partners at /partners.
- Home page with a simple form using ngForms.

**Interceptors :**
- Authorization Interceptor: Injects a fake bearer token into outgoing requests.
- Error Interceptor: Handles HTTP response errors.
- HTTP Interceptor: Dynamically adds the base URL to requests.

**Forms Used :**
- **ngForms** on the Home page (simple form).
- **Template-Driven Forms** for the search input (integrated with Angular Signals).
- **Reactive Forms** for partner creation and editing.

## Getting Started

1. Clone the repository :
```sh
npm run install
cd sparkers
```
2. Install dependencies
```sh
npm run install
```
3. Run the application
```sh
npm run start
```
Navigate to http://localhost:4200/


### Quick commands
Run the application :
```sh
npm run start
```

Run unit tets :
```sh
npm run test
```

run end-to-end tets :
```sh
npm run e2e:ui
```

Build the application :
```sh
npm run build
```

## Technologies used
- **Angular** as a frontend framework
- **Tailwind CSS** as a CSS framework, quick and effective design
- **NG-Zorro** (based on the Material CDK), provides component and theme system

## Code Structure

```
e2e                                       # End-to-end tests
src/
  |-- app/
    |-- features/                   # Application features/pages
      |-- feature01/
        |-- feature01.component.ts
        |-- feature01.component.spec.ts
        |-- feature01.component.html
        |-- feature01.component.less
        |-- components/     # Child components within the feature
          |-- child01/
            |-- child01.component.ts
            |-- child01.component.spec.ts
            |-- child01.component.html
            |-- child01.component.less
          |-- child02/
            |-- child02.component.ts
            |-- child02.component.spec.ts
            |-- child02.component.html
            |-- child02.component.less
          |-- models/                 # Feature-specific models
          |-- services/               # Feature-specific services
            |-- store.service.ts      # Logic and state managment
            |-- store.service.spec.ts 
            |-- http.service.ts           # Http calls
          |-- pipes/                      # eature-specific pipes
      |-- feature02/
      |-- feature03/
    |-- interceptors/             # Application-wide interceptors
    |-- services/                     # Globals Services as global state
    |-- shared/
      |-- components/
      |-- models/
      |-- pipes/
      |-- directives/
      |-- helpers/
  |-- styles/                         # Global styles and themes
  |-- index.html
  |-- main.ts
  |-- styles.less
  |-- README.md
  |-- ...
```

## Advanced Topics
### Smart/Dumb Component
Consider refactoring the partner-list component by extracting the table into a child component, and the search input into another child component.

### Retry Interceptor

An HTTP interceptor that retries failed HTTP requests, waiting 3 seconds between each retry. This could be combined with the error interceptor.

```ts
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Observable, retry, throwError, timer } from 'rxjs';

export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  const maxRetries = 3;
  const retryableStatusCodes = [500];
  const retryDelay = 3000;
  
  return next(req).pipe(
    retry({
      count: maxRetries,
      delay: (error: HttpErrorResponse, retryCount: number): Observable<number> => {
        if(!retryableStatusCodes.includes(error.status)) {
          return throwError(() => error);
        }

        return timer(retryDelay);
      },
    }),
  );
};
```

### More Unit Tests
For additional unit test examples (components, guards, and services), check out [this repository](https://github.com/RifautAlexis/angular-playground/tree/main).

### Code Quality and Tooling
To improve code quality, I would add :
- **ESLint** with **TSLint**
  - Additionally, it could be enhanced with [ESlint Stylistic](https://eslint.style/).
- G**it hooks**, automate code quality checks before committing and pushing.
  - pre-commit => Run ESLint and format with ESLint Stylistic
  - push => Run unit tests on staged files.
- **CI/CD pipeline**
  - Implement automated checks (ESLint, tests) using tools like **SonarQube** for code quality analysis.