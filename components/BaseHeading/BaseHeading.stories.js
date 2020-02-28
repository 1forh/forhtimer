import BaseHeading from './BaseHeading';

export default {
  title: 'BaseHeading',
  component: BaseHeading,
};

export const reference = () => ({
  components: { BaseHeading },
  template: `
    <div class="p-5">
      <base-heading tag="h1">This is a an h1.</base-heading>
      <base-heading tag="h2">This is a an h2.</base-heading>
      <base-heading tag="h3">This is a an h3.</base-heading>
      <base-heading tag="h4">This is a an h4.</base-heading>
      <base-heading tag="h5">This is a an h5.</base-heading>
      <base-heading tag="h6">This is a an h6.</base-heading>
      <hr/>
      <base-heading variant="display-1">Lorem ipsum dolor sit amet</base-heading>
      <base-heading variant="display-2">Lorem ipsum dolor sit amet</base-heading>
      <base-heading variant="display-3">Lorem ipsum dolor sit amet</base-heading>
      <base-heading variant="display-4">Lorem ipsum dolor sit amet</base-heading>
      <base-heading variant="h1">Lorem ipsum dolor sit amet</base-heading>
      <base-heading variant="h2">Lorem ipsum dolor sit amet</base-heading>
      <base-heading variant="h3">Lorem ipsum dolor sit amet</base-heading>
      <base-heading variant="h4">Lorem ipsum dolor sit amet</base-heading>
      <base-heading variant="h5">Lorem ipsum dolor sit amet</base-heading>
      <base-heading variant="h6">Lorem ipsum dolor sit amet</base-heading>
      <hr/>
      <base-heading variant="h1" weight="light">Lorem ipsum dolor sit amet</base-heading>
      <base-heading variant="h1" weight="normal">Lorem ipsum dolor sit amet</base-heading>
      <base-heading variant="h1" weight="semi-bold">Lorem ipsum dolor sit amet</base-heading>
      <base-heading variant="h1" weight="bold">Lorem ipsum dolor sit amet</base-heading>
      <hr/>
      <base-heading tag="h1" color="primary">Lorem ipsum dolor sit amet</base-heading>
      <base-heading tag="h1" color="secondary">Lorem ipsum dolor sit amet</base-heading>
      <base-heading tag="h1" color="tertiary">Lorem ipsum dolor sit amet</base-heading>
      <base-heading tag="h1" color="accent">Lorem ipsum dolor sit amet</base-heading>
    </div>
  `,
});
