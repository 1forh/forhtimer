import BaseText from './BaseText';
import BaseParagraph from '../BaseParagraph/BaseParagraph';

export default {
  title: 'BaseText',
  component: BaseText,
};

export const reference = () => ({
  components: { BaseText, BaseParagraph },
  template: `
    <div class="p-5">
      <base-paragraph><base-text>Design isn’t just about the look and feel.</base-text></base-paragraph>
      <base-paragraph><base-text variant="strong">Design isn’t just about the look and feel.</base-text></base-paragraph>
      <base-paragraph><base-text variant="deleted">Design isn’t just about the look and feel.</base-text></base-paragraph>
      <base-paragraph><base-text variant="inaccurate">Design isn’t just about the look and feel.</base-text></base-paragraph>
      <base-paragraph><base-text variant="addition">Design isn’t just about the look and feel.</base-text></base-paragraph>
      <base-paragraph><base-text variant="underline">Design isn’t just about the look and feel.</base-text></base-paragraph>
      <base-paragraph><base-text variant="small">Design isn’t just about the look and feel.</base-text></base-paragraph>
      <base-paragraph><base-text variant="italicized">Design isn’t just about the look and feel.</base-text></base-paragraph>
      <base-paragraph><base-text variant="highlight">Design isn’t just about the look and feel.</base-text></base-paragraph>
      <base-paragraph><base-text variant="voice">Design isn’t just about the look and feel.</base-text></base-paragraph>
      <hr/>
      <base-paragraph><base-text size="sm">Small: Design isn’t just about the look and feel.</base-text></base-paragraph>
      <base-paragraph><base-text size="lg">Large: Design isn’t just about the look and feel.</base-text></base-paragraph>
      <hr/>
      <base-paragraph><base-text color="primary">Design isn’t just about the look and feel.</base-text></base-paragraph>
      <base-paragraph><base-text color="secondary">Design isn’t just about the look and feel.</base-text></base-paragraph>
      <base-paragraph><base-text color="accent">Design isn’t just about the look and feel.</base-text></base-paragraph>
      <base-paragraph><base-text color="success">Design isn’t just about the look and feel.</base-text></base-paragraph>
    </div>
  `,
});
