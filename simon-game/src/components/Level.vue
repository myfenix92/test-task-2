<template>
      <div class="options-block">
        <p>Раунд: <span> {{$root.level}} </span></p>
        <p class="result-game" v-if="seen"> {{ msgGame }} </p>
        <span>Уровень:</span>
        <div class="level-blocks">
            <label for="easy-level"> <input type="radio" id="easy-level" name="levelChoose" value="1500" checked> Легкий</label>
            <label for="middle-level"> <input type="radio" id="middle-level" name="levelChoose" value="1000"> Средний</label>
            <label for="hard-level"> <input type="radio" id="hard-level" name="levelChoose" value="400"> Сложный</label>
        </div>
      </div>
</template>

<script>
import {eventBus} from "../main"

export default {
  name: 'LevelBlock',
  data () {
    return {
      msgGame: '',
      seen: false,
    }
  },

  methods: {

    endGame() {
      if (this.$root.arraySoundNum.length === 0) {
        this.seen = true;
        this.msgGame = `Вы проиграли после ${this.$root.level} раундов!`
      }
    }
  },

  mounted() {
    eventBus.$on('msgGame', () => {
      this.endGame();
    })
}
}
</script>