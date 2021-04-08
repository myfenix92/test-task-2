<template>
  <button @click="resetGame(); play()">Старт</button>
</template>

<script>
import {eventBus} from "../main"

export default {
  name: 'ButtonBlock',

  methods: {

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  },

    randomNumber() {
      let num = this.getRandomArbitrary(1,5)
      this.$root.step = 0;
      this.$root.arraySoundNum.push(num)
    },

    play() {
      
      this.randomNumber()
      this.$root.level = this.$root.arraySoundNum.length
      let levelTime = Number(Array.from(document.querySelectorAll('input')).find(el => el.checked).value)
     let circle = document.querySelectorAll('.circle');
      for (let i = 0; i < this.$root.arraySoundNum.length; i++) {
        let audio = new Audio(require(`../assets/sounds/${this.$root.arraySoundNum[i]}.mp3`))
        let addClass = this.$root.arraySoundNum[i]
         setTimeout(function timer() {
          audio.play();
          circle[addClass-1].classList.add('highlight')
          }, i * levelTime);
          setTimeout(() => {
          circle.forEach((el) => {
          el.classList.remove('highlight')
        })
          }, (i * levelTime) + this.$root.timeHightlight)
      }
    },

      resetGame() {
    eventBus.$emit('msgGame', false)
    this.$root.arraySoundNum = []
  },
  },

    mounted() {
    eventBus.$on('play', () => {
      this.play();
    })
}
}
</script>