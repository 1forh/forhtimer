import BaseImage from './BaseImage';

export default {
  title: 'BaseImage',
  component: BaseImage,
};

export const reference = () => ({
  components: { BaseImage },
  template: `
    <div class="p-5">
      <base-image src="https://picsum.photos/1024/400/?image=30" class="mb-4" />
      <base-image src="https://picsum.photos/1024/400/?image=31" class="mb-4" />
      <base-image src="https://picsum.photos/1024/400/?image=32" class="mb-4" />
      <base-image src="https://picsum.photos/1024/400/?image=33" class="mb-4" />
      <base-image src="https://picsum.photos/1024/400/?image=34" class="mb-4" />
      <base-image src="https://picsum.photos/1024/400/?image=35" lazy rounded class="mb-4" />
      <base-image src="https://picsum.photos/1024/400/?image=42" lazy rounded class="mb-4" />
      <base-image src="https://picsum.photos/1024/400/?image=43" lazy rounded class="mb-4" />
      <base-image src="https://picsum.photos/1024/400/?image=44" lazy rounded class="mb-4" />
      <base-image src="https://picsum.photos/1024/400/?image=45" lazy rounded class="mb-4" />
      <base-image src="https://picsum.photos/1024/400/?image=46" lazy rounded class="mb-4" />
      <base-image src="https://picsum.photos/1024/400/?image=47" lazy rounded class="mb-4" />
      <base-image src="https://picsum.photos/1024/400/?image=48" lazy rounded class="mb-4" />
      <base-image src="https://picsum.photos/1024/400/?image=49" lazy rounded class="mb-4" />
    </div>
  `,
});
