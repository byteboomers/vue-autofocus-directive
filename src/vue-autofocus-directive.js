// Register a global custom directive called `v-focus`
const directive = {
  // When the bound element is inserted into the DOM...
  inserted: function(el) {
    // Focus the element
    el.focus();
  }
};

export default directive;
