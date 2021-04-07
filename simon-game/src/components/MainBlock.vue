<template>
  <div class="main-block">
    <h1>Simon Game</h1>
    <div class="game-block">
      <!-- <div class="circle-block">
        <ul>
          <li class="red circle" data-title="1"></li>
          <li class="green circle" data-title="2"></li>
          <li class="yellow circle" data-title="3"></li>
          <li class="blue circle" data-title="4"></li>
        </ul>
      </div> -->
      <div class="options-block">
        <p>Раунд: <span> {{$root.level}} </span></p>
        <!-- <p class="result-game"> {{ msgGame }} </p> -->
        <span>Уровень:</span>
        <div class="level-blocks">
            <label for="easy-level"> <input type="radio" id="easy-level" name="levelChoose" value="easyData" checked> Легкий</label>
            <label for="middle-level"> <input type="radio" id="middle-level" name="levelChoose" value="middleData"> Средний</label>
            <label for="hard-level"> <input type="radio" id="hard-level" name="levelChoose" value="hardData"> Сложный</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainBlock',
  // data() {
  //   return {
  //     countRound: 0,
  //   }
  // },
}
</script>

