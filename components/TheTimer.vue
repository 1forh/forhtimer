<template>
  <div class="timer">
    <div class="timer__message">
      {{ message }}
    </div>
    <div class="timer__clock">
      {{ timer }}
    </div>
    <div class="timer__divider"></div>
    <div class="timer__actions">
      <button type="button" class="timer__action" @click="reset">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
          <path
            d="M492 8h-10c-6.627 0-12 5.373-12 12v110.625C426.804 57.047 346.761 7.715 255.207 8.001 118.82 8.428 7.787 120.009 8 256.396 8.214 393.181 119.166 504 256 504c63.926 0 122.202-24.187 166.178-63.908 5.113-4.618 5.354-12.561.482-17.433l-7.069-7.069c-4.503-4.503-11.749-4.714-16.482-.454C361.218 449.238 311.065 470 256 470c-117.744 0-214-95.331-214-214 0-117.744 95.331-214 214-214 82.862 0 154.737 47.077 190.289 116H332c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h160c6.627 0 12-5.373 12-12V20c0-6.627-5.373-12-12-12z"
          />
        </svg>
      </button>
      <button type="button" class="timer__action" @click="play" v-if="!running">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
          <path
            d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6zm-16.2 55.1l-352 208C45.6 483.9 32 476.6 32 464V47.9c0-16.3 16.4-18.4 24.1-13.8l352 208.1c10.5 6.2 10.5 21.4.1 27.6z"
          />
        </svg>
      </button>
      <button type="button" class="timer__action" @click="pause" v-if="running">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
          <path
            d="M48 479h96c26.5 0 48-21.5 48-48V79c0-26.5-21.5-48-48-48H48C21.5 31 0 52.5 0 79v352c0 26.5 21.5 48 48 48zM32 79c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V79zm272 400h96c26.5 0 48-21.5 48-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48zM288 79c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v352c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16V79z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'TheTimer',
  props: {
    duration: {
      type: String,
      default: '30:00',
    },
    breakDuration: {
      type: String,
      default: '05:00',
    },
    audioFile: {
      type: String,
      default: '/audio/beep.mp3',
    },
  },
  data() {
    return {
      message: 'Time to get shit done.',
      timer: this.duration,
      running: false,
      interval: null,
      onBreak: false,
    };
  },
  computed: {
    audio() {
      return new Audio(this.audioFile);
    },
  },
  methods: {
    timeKeeper() {
      if (!this.running) {
        return;
      }

      const timer = moment(this.timer, 'm:ss');

      this.timer = timer.subtract(1, 'second').format('m:ss');

      if (this.timer === '0:00') {
        this.audio.play();

        if (this.onBreak) {
          this.reset();
        } else {
          this.startBreak();
        }
      }
    },
    play() {
      this.running = true;
      this.interval = setInterval(this.timeKeeper, 1000);
    },
    pause() {
      this.running = false;
      clearInterval(this.interval);
    },
    reset() {
      this.message = 'Time to get shit done.';
      this.timer = this.duration;
      this.running = false;
      clearInterval(this.interval);
    },
    startBreak() {
      this.pause();
      this.onBreak = true;
      this.message = 'Break time.';
      this.timer = this.breakDuration;
    },
  },
};
</script>

<style lang="scss" scoped>
.timer {
  width: 100%;
  height: 100vh;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__message {
    margin-bottom: 3rem;
    font-size: 48px;
    font-weight: 300;
    color: $white;
    text-align: center;
  }

  &__clock {
    font-size: 7.5rem;
    line-height: 1.3;
    font-weight: 700;
    letter-spacing: 7px;
    color: $secondary;
  }

  &__divider {
    margin: 3rem 0;
    width: 450px;
    height: 10px;
    background-color: $accent;
    border-radius: 8px;
  }

  &__actions {
    display: flex;
  }

  &__action {
    @include reset-button;
    margin-right: 4rem;
    color: $secondary;
    cursor: pointer;

    &:last-of-type {
      margin-right: 0;
    }

    &:focus {
      outline: none;
    }

    svg {
      width: 64px;
    }
  }
}
</style>
