<template>
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
</template>

<script>
export default {
  name: 'LevelBlock',
}
</script>