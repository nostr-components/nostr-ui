

<div align="center">  
  <h1>nostr-ui</h1>
</div>

<div align="center">  
<i>nostr-ui</i>
</div>

---

<div align="center">
<h4>Documentation</h4>
</div>

---

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nostr-components/nostr-ui/blob/gh-pages/LICENSE)
[![npm](https://img.shields.io/npm/v/nostr-ui)](https://npmjs.com/package/nostr-ui)
[![npm](https://img.shields.io/npm/dw/nostr-ui.svg)](https://npmjs.com/package/nostr-ui)
[![Github Stars](https://img.shields.io/github/stars/nostr-components/nostr-ui.svg)](https://github.com/nostr-components/nostr-ui/)

# The Nostr-UI Library

Welcome to the Nostr-UI library! This compact yet powerful JavaScript utility was designed to strike a balance between simplicity and functionality. The library constructs two global objects: `qs` and `di`, offering easy access to URL query parameters and scripts with type `"application/ld+json"` or `"application/json"` respectively.

## Overview

1. `qs`: `qs` is an object created from the search parameters of the current URL. These parameters typically follow the "?" in a URL.

2. `di`: Short for Data Island, `di` is a Proxy object allowing you to interact with the JSON content of all `script` elements of type `application/ld+json` or `application/json` in your document. These script elements are commonly used for storing and managing JSON data on your page, hence creating "data islands".

## Usage

### `qs`

With `qs`, you can easily access URL query parameters as properties of the `qs` object. For instance, if the URL of the page is `https://example.com?param1=value1&param2=value2`, then these values can be accessed in your JavaScript code as follows:

```javascript
console.log(qs.param1);  // "value1"
console.log(qs.param2);  // "value2"
```

### `di`

`di` grants you the power to access and modify data islands in your document. Data islands are identified by their `id` attribute.

For instance, if you have the following script in your HTML document:

```html
<script id="myData" type="application/ld+json">
{
  "key": "value"
}
</script>
```

This data can be accessed and manipulated in your JavaScript code as follows:

```javascript
console.log(di.myData.key);  // "value"
di.myData.key = "newValue";
console.log(di.myData.key);  // "newValue"
```

Upon updating the data island, the corresponding `script` element's text content will also be updated to mirror the changes.

## Considerations

Both `qs` and `di` are defined on the `globalThis` object, making them globally available throughout your JavaScript code.

Nostr-UI doesn't have any dependencies, and its footprint is minimal, making it a lightweight addition to your project.

## Contribution

Your assistance and contributions towards improving this library are highly appreciated. Feel free to raise issues and submit pull requests.

## License

Nostr-UI is licensed under the MIT license.