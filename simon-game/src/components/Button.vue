<template>
  <button @click="resetGame(); play()">Старт</button>
</template>

<script>
import { eventBus } from '../main';

export default {
  name: 'ButtonBlock',
  methods: {

    getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    randomNumber() {
      const num = this.getRandomArbitrary(1, 5);
      this.$root.stepCheckCircle = 0;
      this.$root.arraySoundNum.push(num);
    },

    play() {
      this.randomNumber();
      this.$root.level = this.$root.arraySoundNum.length;
      const levelTime = Number(Array.from(document.querySelectorAll('input')).find((el) => el.checked).value);
      const circle = document.querySelectorAll('.circle');
      document.querySelector('.circle-block').classList.add('reset-game-event');
      document.querySelector('.circle-block').classList.remove('cursor-view');
      setTimeout(() => {
        document.querySelector('.circle-block').classList.remove('reset-game-event');
        document.querySelector('.circle-block').classList.add('cursor-view');
      }, ((this.$root.arraySoundNum.length - 1) * levelTime) + this.$root.timeHighlight);
      for (let i = 0; i < this.$root.arraySoundNum.length; i += 1) {
        // eslint-disable-next-line import/no-dynamic-require
        const audio = new Audio(require(`../assets/sounds/${this.$root.arraySoundNum[i]}.mp3`)); // eslint-disable-line global-require
        const addClass = this.$root.arraySoundNum[i];
        setTimeout(() => {
          audio.play();
          circle[addClass - 1].classList.add('highlight');
        }, i * levelTime);
        setTimeout(() => {
          circle.forEach((el) => {
            el.classList.remove('highlight');
          });
        }, ((i * levelTime) + (levelTime / 2)));
        setTimeout(() => {
          document.querySelector('.circle-block').classList.remove('reset-game-event');
        }, this.$root.arraySoundNum.length * levelTime);
      }
    },

    resetGame() {
      eventBus.$emit('msgGame', false);
      this.$root.arraySoundNum = [];
      document.querySelector('.circle-block').classList.remove('reset-game-event');
    },
  },

  mounted() {
    eventBus.$on('play', () => {
      this.play();
    });
  },
};
</script>
