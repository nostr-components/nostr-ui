/**
 * Immediately invoked function expression that defines global variables `qs` and `di`.
 * `qs` is an object created by parsing the query string parameters of the current URL.
 * `di` is a `Proxy` object that wraps an object created from all the `<script>` tags with a `type` attribute of `"application/ld+json"` or `"application/json"`.
 * The `set` trap of the `Proxy` object is overridden to update the value of a key in the object and also update the `text` property of the corresponding script tag with the new value.
 *
 * @global
 * @function
 */
;(() => {
  globalThis.qs = Object.fromEntries(
    new URLSearchParams(document.location.search)
  )

  globalThis.di = new Proxy(
    Array.from(
      document.querySelectorAll(
        'script[type="application/ld+json"], script[type="application/json"]'
      )
    )
      .map(island => [island.id, JSON.parse(island.text || JSON.stringify(''))])
      .reduce((obj, item) => {
        obj[item[0]] = item[1]
        return obj
      }, {}),
    {
      /**
       * Overrides the `set` trap of the `Proxy` object to update the value of a key in the object and also update the `text` property of the corresponding script tag with the new value.
       *
       * @param {Object} obj - The target object.
       * @param {string} prop - The property name to set.
       * @param {*} value - The value to set.
       * @returns {boolean} - Returns `true` if the set operation was successful.
       */
      set: (obj, prop, value) => {
        obj[prop] = value
        var island = document.getElementById(prop)
        island.text = JSON.stringify(value, null, 2)
        return true
      }
    }
  )
})()