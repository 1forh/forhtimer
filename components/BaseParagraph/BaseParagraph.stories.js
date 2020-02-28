import BaseParagraph from './BaseParagraph';

export default {
  title: 'BaseParagraph',
  component: BaseParagraph,
};

export const reference = () => ({
  components: { BaseParagraph },
  template: `
    <div class="p-5">
      <base-paragraph size="lg">
        Our core belief is that the products we design should work across anything that can access the web. Whether it’s a laptop, a smartphone, a watch, or even a browser integrated into a car’s dashboard.
      </base-paragraph>
      <base-paragraph>
        Design isn’t just about the look and feel. Design is <a href="https://viljamis.com/2017/design-tools-processes/">how it works</a>, and we believe the best way to focus on this is to work as close to the end result as possible. That’s <a href="https://viljamisdesign.com/process/">why we start</a> all our projects with simple sketches, and quickly transition into designing working prototypes in code. This is done by the same designers who started the work, which ensures that our original design intent is carried all the way to the end product.
      </base-paragraph>
      <base-paragraph size="sm">
        Our core belief is that the products we design should work across anything that can access the web. Whether it’s a laptop, a smartphone, a watch, or even a browser integrated into a car’s dashboard.
      </base-paragraph>
      <hr/>
      <base-paragraph weight="bold">
        Our core belief is that the products we design should work across anything that can access the web. Whether it’s a laptop, a smartphone, a watch, or even a browser integrated into a car’s dashboard.
      </base-paragraph>
      <base-paragraph weight="semi-bold">
        Our core belief is that the products we design should work across anything that can access the web. Whether it’s a laptop, a smartphone, a watch, or even a browser integrated into a car’s dashboard.
      </base-paragraph>
      <base-paragraph weight="light">
        Our core belief is that the products we design should work across anything that can access the web. Whether it’s a laptop, a smartphone, a watch, or even a browser integrated into a car’s dashboard.
      </base-paragraph>
      <hr/>
      <base-paragraph color="primary">
        Our core belief is that the products we design should work across anything that can access the web. Whether it’s a laptop, a smartphone, a watch, or even a browser integrated into a car’s dashboard.
      </base-paragraph>
      <base-paragraph color="secondary">
        Our core belief is that the products we design should work across anything that can access the web. Whether it’s a laptop, a smartphone, a watch, or even a browser integrated into a car’s dashboard.
      </base-paragraph>
      <base-paragraph color="accent">
        Our core belief is that the products we design should work across anything that can access the web. Whether it’s a laptop, a smartphone, a watch, or even a browser integrated into a car’s dashboard.
      </base-paragraph>
    </div>
  `,
});
