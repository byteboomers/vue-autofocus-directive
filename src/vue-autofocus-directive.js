// Register a global custom directive called `v-focus`
const directive = {
  // When the bound element is inserted into the DOM...
  inserted(el, binding) {
    // If directive has value
    if (binding.value !== undefined && !binding.value) {
      return;
    }

    // Focus the element
    el.focus();
  }
};

export default directive;
