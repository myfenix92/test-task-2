<template>
      <div class="options-block">
        <p>Раунд:<span>{{$root.arraySoundNum.length}}</span></p>
        <span>Уровень:</span>
        <div class="level-blocks">
            <label for="easy-level">
              <input type="radio" id="easy-level" name="levelChoose" value="1500" checked> Легкий
            </label>
            <label for="middle-level">
              <input type="radio" id="middle-level" name="levelChoose" value="1000"> Средний
            </label>
            <label for="hard-level">
              <input type="radio" id="hard-level" name="levelChoose" value="400"> Сложный
            </label>
        </div>
        <p v-show="seen"> {{ msgGame }}</p>
      </div>
</template>

<script>
import { eventBus } from '../main';

export default {
  name: 'LevelBlock',
  data() {
    return {
      msgGame: '',
      seen: false,
    };
  },

  methods: {
    endGame(bool) {
      this.seen = bool;
      this.msgGame = `Вы проиграли после ${this.$root.arraySoundNum.length} раундов!`;
    },
  },

  mounted() {
    eventBus.$on('msgGame', (bool) => {
      this.endGame(bool);
    });
  },
};
</script>
