# HTTP Statuses Listing

Listing of RFC2616 HTTP statuses

Statuses are coming from
[RFC2616/6.1.1](https://www.rfc-editor.org/rfc/rfc2616#section-6.1.1)

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
status :: Number
statusText :: String

HttpStatuses :: Object { [statusText]: status }
```

#### Example:

```javascript
HttpStatuses['No Content'] // => 204
```

## License

[MIT](LICENSE)
