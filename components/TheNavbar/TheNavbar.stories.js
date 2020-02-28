import TheNavbar from './TheNavbar';

export default {
  title: 'TheNavbar',
  components: TheNavbar,
};

export const reference = () => ({
  components: { TheNavbar },
  template: `
    <div class="p-5">
      <TheNavbar />
    </div>
  `,
});
