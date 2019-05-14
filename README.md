# vue-autofocus-directive

> Autofocus directive for Vue

## About

Lifted from the official Vue tutorial: https://vuejs.org/v2/guide/custom-directive.html

When the page loads, the element with the directive gains focus (note: autofocus doesn’t work on mobile Safari).

## Installation

```bash
npm install --save vue-autofocus-directive
```

[npm package link](https://www.npmjs.com/package/vue-autofocus-directive)

## Usage

```javascript
import Vue from "vue";
import autofocus from "vue-autofocus-directive";
Vue.directive("autofocus", autofocus);
```

```html
<input v-autofocus />
```

## Options

### `binding`

Type: `value`
Default: `undefined`
Description: _Required when using dynamic value_

## Example

```vue
<template>
  <form>
    <label>Email</label>
    <input
      v-autofocus
      v-model="email"
      type="email"
      name="email"
      placeholder="Email"
    />
  </form>
</template>
```

or

```vue
<template>
  <form>
    <label>Email</label>
    <input
      v-autofocus="dynamicValue"
      v-model="email"
      type="email"
      name="email"
      placeholder="Email"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      dynamicValue: false
    };
  }
};
</script>
```

## Powered by

- Babel 7
- Webpack 4

## License

[MIT](http://opensource.org/licenses/MIT)

## Twitter

[Follow me on Twitter](https://twitter.com/KrolsBjorn)
