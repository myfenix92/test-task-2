<template>
        <div class="circle-block">
        <ul>
          <li @click="checkCircle" class="red circle" data-title="1"></li>
          <li @click="checkCircle" class="green circle" data-title="2"></li>
          <li @click="checkCircle" class="yellow circle" data-title="3"></li>
          <li @click="checkCircle" class="blue circle" data-title="4"></li>
        </ul>
      </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  name: 'CircleBlock',

  methods: {
    checkCircle(event) {
      const circle = document.querySelectorAll('.circle');
      // eslint-disable-next-line import/no-dynamic-require
      const audio = new Audio(require(`../assets/sounds/${event.target.dataset.title}.mp3`)); // eslint-disable-line global-require
      audio.play();
      event.target.classList.add('highlight');
      setTimeout(() => {
        circle.forEach((el) => {
          el.classList.remove('highlight');
        });
      }, this.$root.timeHighlight);
      if (Number(event.target.dataset.title)
      === this.$root.arraySoundNum[this.$root.stepCheckCircle]) {
        this.$root.stepCheckCircle += 1;
        if (this.$root.stepCheckCircle === this.$root.arraySoundNum.length) {
          setTimeout(() => {
            eventBus.$emit('play');
          }, this.$root.timePauseSound);
        }
      } else {
        document.querySelector('.circle-block').classList.add('reset-game-event');
        eventBus.$emit('msgGame', true);
        this.$root.arraySoundNum = [];
        this.$root.stepCheckCircle = 0;
      }
    },
  },
};
</script>
