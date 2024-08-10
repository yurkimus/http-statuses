# Http statuses

Enumeration of supported HTTP statuses.

## Table of Contents

- [Installation](#installation)
- [Exports](#exports)
  - [HttpStatuses](#httpstatuses)
- [License](#license)

## Installation

### npm

```
npm install @yurkimus/http-statuses
```

### urls

```
"@yurkimus/http-statuses": "npm:@yurkimus/http-statuses"
```

```
"@yurkimus/http-statuses": "github:yurkimus/http-statuses"
```

```
"@yurkimus/http-statuses": "https://raw.githubusercontent.com/yurkimus/http-statuses/main/source/index.js"
```

## Exports

### HttpStatuses

#### Definition:

```
HttpStatuses :: {
  [status: string]: {
    status: number,
    statusText: string
  }
}
```

#### Example:

```javascript
HttpStatuses.NoContent // => { status: 204, statusText: 'No Content' }
```

## License

[MIT](LICENSE)
