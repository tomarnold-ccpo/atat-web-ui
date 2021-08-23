
// A helper function to faciliate the generation of stories
import { storyFactory } from '../util/helpers'

// Components
import ATATCurrencyTextField  from '../../src/components/ATATCurrencyTextField.vue';

export default { title: 'ATAT_Components/ATATCurrencyTextField' }

// Generate a factory function
// Will automatically bootstrap the story components
const story = storyFactory({
  ATATCurrencyTextField,
})

export const asDefault = () => story({
  template: `<ATATCurrencyTextField value="2.00"></ATATCurrencyTextField>`,
})

