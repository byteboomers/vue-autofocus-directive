// Register a global custom directive called `v-focus`
const directive = {
  // When the bound element is inserted into the DOM...
  inserted(el, binding) {
    // Focus the element
    const onFocus = () => el.focus();
    // If directive has modifier `byAttribute`
    if (binding.modifiers.byAttribute) {
      // If element has attribute autofocus
      if (el.getAttribute('autofocus')) {
        onFocus();
      }
    } else {
      onFocus();
    }
  }
};

export default directive;
