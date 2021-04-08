<template>
  <div id="app">
   <div class="main-block">
      <h1>Simon Game</h1>
        <div class="game-block">
          <CircleBlock/>
          <div class="options-block">
            <LevelBlock/>
          </div>
          <ButtonBlock/>
        </div>
   </div>
  </div>
</template>

<script>
import ButtonBlock from './components/Button.vue';
import CircleBlock from './components/Circle.vue';
import LevelBlock from './components/Level.vue';

export default {
  name: 'App',
  components: {
    CircleBlock,
    ButtonBlock,
    LevelBlock,
  },
};
</script>
