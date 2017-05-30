`python -m json.tool` for JavaScript
====================================

This module aims to replicate the output of [Python's `json.tool`](https://docs.python.org/2/library/json.html) in JavaScript. This includes indentation and key alphabetization.

In a CommonJS environment (like Node, Webpack, or Browserify):

```js
var pythonlikeJsonToolStringify = require('pythonlike-json-tool')
```

In a browser environment:

```html
<script src="/path/to/pythonlike-json-tool.js"></script>
```

Once it's included:

```js
pythonlikeJsonToolStringify({
  key: 'value',
  another: 'prop'
})
// {
//     "another": "prop",
//     "key": "value"
// }
```
