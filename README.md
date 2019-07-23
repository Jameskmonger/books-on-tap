# books-on-tap

Fun project integrating with a bookstore API

## Instructions

1. `npm install`
2. `npm start`
3. http://localhost:9000

## Future Improvements

- Add tests around the page components - this can't be done (easily) until React supports `useEffect` in shallow-rendered components
- Use Material UI themes to:
  - get rid of some of the horrible overrides (e.g. `div.hero`, `footer.footer`)
  - move the styling out of `index.html`
- Consider using a DI container for the `getBooks` / `getBook` data functions
- Break the detail/card components down into smaller subcomponents for more clear responsbilities
