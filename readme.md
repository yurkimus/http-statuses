# Http statuses

Enumeration of supported HTTP statuses.

## Table of Contents

- [Installation](#installation)
- [Exports](#exports)
  - [HttpStatusesMap](#httpstatusesmap)
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

### HttpStatusesMap

#### Definition:

```
HttpStatusesMap :: Object {
  <HTTP status name> => <HTTP status values>
}
```

#### Example:

```javascript
HttpStatuses['No Content'] // => [ 204, 'No Content' ]
```

### HttpStatuses

#### Definition:

```
HttpStatuses :: Relation {
  <HTTP status name> => <HTTP status value>
}
```

#### Example:

```javascript
HttpStatuses.has(204) // => true
HttpStatuses.has('No Content') // => true

HttpStatuses.get('No Content') // => [ 204, 'No Content' ]
HttpStatuses.get(204) // => 'No Content'

HttpStatuses
  .addNode('My', 42, 'Unknown')
  .get(42) // => 'My Status'

HttpStatuses
  .get('My') // => [ 42, 'Unknown' ]

HttpStatuses
  .get(HttpStatuses.get('My')) // => 'My'

MediaTypes
  .addEdge('My', 'More information here')
  .get('More information here') // => 'My'

MediaTypes
  .get('My') // => [ 42, 'Unknown', 'More information here' ]
```

## License

[MIT](LICENSE)
