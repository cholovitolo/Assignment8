# Angular Assignment - Lotanna App

I created a simple Angular application built for ITE-5425, demonstrating client-side routing, a public API integration via Angular services/HttpClient, and a reactive form with validation.

**Live site:** https://2026-summer-ite-5425-0na.github.io/angular-assignment-cholovitolo/

**Repo:** https://github.com/2026-Summer-ITE-5425-0NA/angular-assignment-cholovitolo

---

## Tech Stack

- Angular 22 (standalone components)
- Angular Router
- Angular HttpClient
- Reactive Forms (`@angular/forms`)

- Deployed via `angular-cli-ghpages` to GitHub Pages

---

## Project Setup

The project was created using the Angular CLI:

```bash
ng new lotanna-app
```

Routing was enabled at project creation, generating `app.routes.ts` and wiring it into `app.config.ts` via `provideRouter(routes)`.

---

## Client-Side Navigation

A navigation bar sits at the top of every page (`app.html`), with three links using `routerLink`:

- **Home** (`/`)
- **API Data** (`/api-data`)
- **Form Page** (`/form-page`)

Routes are defined in `app.routes.ts` and rendered into a `<router-outlet>` in `app.html`, so navigating between pages does not trigger a full page reload.

---

## Pages

### Home Page (`/`)
A simple landing page with introductory text describing the app.

### API Data Page (`/api-data`)
Fetches and displays the first 10 posts from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) public API. Data is retrieved through `PostService` and rendered using the `async` pipe, so the page updates automatically once data arrives.

### Form Page (`/form-page`)
A reactive feedback form with four fields:

| Field | Validation |
|---|---|
| Name | Required |
| Email | Required, valid email format |
| Rating (1–5) | Required |
| Comments | Required |

Validation errors are shown inline once a field is touched, and the submit button stays disabled until the form is valid. On successful submit, a "Thank you for your feedback!" message is displayed.

---

## Angular Service & HttpClient

API requests are handled by a dedicated service rather than calling `HttpClient` directly from a component:

- **`src/app/services/post.ts`** — `PostService` class
  - `getPosts()`: returns an `Observable<Post[]>` fetched from JSONPlaceholder using `HttpClient.get()`

`HttpClient` is enabled app-wide via `provideHttpClient()` in `app.config.ts`.

The `api-data` component injects `PostService` and consumes `getPosts()` through the `async` pipe in its template, rather than manually subscribing.

---

## Project Structure

```
src/app/
├── home/            # Home page component
├── api-data/         # API Data page component
├── form-page/        # Form Page component
├── services/
│   └── post.ts       # PostService (HttpClient logic)
├── app.routes.ts      # Route definitions
├── app.config.ts      # App-wide providers (router, HttpClient)
├── app.html           # Root template (nav bar + router-outlet)
└── app.ts             # Root component
```

---

## Running Locally

```bash
npm install
ng serve
```

Visit `http://localhost:4200`.

---

## Build & Deployment

The app is built and deployed to GitHub Pages using `angular-cli-ghpages`:

```bash
ng add angular-cli-ghpages
ng deploy --base-href=/angular-assignment-cholovitolo/
```

This runs a production build (`ng build`) and pushes the compiled output to the `gh-pages` branch, which GitHub Pages serves directly.