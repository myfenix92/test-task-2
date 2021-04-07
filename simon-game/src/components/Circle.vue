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
import {eventBus} from "../main"
export default {
  name: 'CircleBlock',
  // data() {
  //   return {
  //     countRound: 0,
  //   }
  // },

  methods: {
    checkCircle(event) {
      let circle = document.querySelectorAll('.circle');
       let audio = new Audio(require(`../assets/sounds/${event.target.dataset.title}.mp3`))
        audio.play()
        event.target.classList.add('highlight')
        setTimeout(() => {
          circle.forEach((el) => {
          el.classList.remove('highlight')
        })
          }, 200)
      if (+event.target.dataset.title === this.$root.arraySoundNum[this.$root.step]) {
        this.$root.step++
        if (this.$root.step === this.$root.arraySoundNum.length) {
          this.$root.level++
          setTimeout(() => {
            eventBus.$emit('play')
          }, 500)
        }
      } else {
        this.$root.step = 0
        this.$root.level = 0
        this.$root.arraySoundNum = []
      }
    }
  }
}
</script>