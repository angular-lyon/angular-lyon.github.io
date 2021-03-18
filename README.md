# Angular Lyon

Source files for https://angular-lyon.github.io

## Prerequisites

- Yarn
- Node

## Development server

For a dev server run:

```bash
yarn start
```

And navigate to `http://localhost:4200/`. 🌈

## Pre-rendering

To generate a pre-rendered build run:

```bash
yarn prerender
```

To see the generated output, make sure you've installed `http-server` globally, and then run the web server:

```bash
http-server ./dist/angular-lyon/browser
```

## Publish to GitHub Pages

To publish a static pre-rendered build run the following:

```bash
yarn deploy
```

## License

This website is under MIT license.
