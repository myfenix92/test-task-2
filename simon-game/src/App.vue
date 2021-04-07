<template>
  <div id="app">
    <MainBlock/>
    <CircleBlock/>
    <ButtonBlock/>
  </div>
</template>

<script>
import MainBlock from './components/MainBlock.vue'
import ButtonBlock from './components/Button.vue'
import CircleBlock from './components/Circle.vue'

export default {
  name: 'App',
  components: {
    MainBlock,
    CircleBlock,
    ButtonBlock
  }
}
</script>
