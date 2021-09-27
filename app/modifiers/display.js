import { capabilities, setModifierManager } from '@ember/modifier';

export default setModifierManager(
  () => ({
    capabilities: capabilities('3.22'),

    createModifier() {
      return {
        element: null,
      };
    },

    installModifier(state, element, args) {
      state.element = element;

      element.style.display = args.display ? '' : 'none';
    },

    updateModifier(state, args) {
      state.element.style.display = args.display ? '' : 'none';
    },

    destroyModifier({ element, eventName, callback, eventOptions }) {
      element.style.display = '';
    }
  }),
  {}
);
