<template>
  <div>
    <h2 v-if="!doorsCondition.includes(true)">Choose the door</h2>
    <h2 v-else>Open current or choose other</h2>
    <!--перехватываем один раз click,
    чтобы дверь не открылась, но сработало выделение-->
    <div class="flex-container">
      <div
        class="shadow"
        @click="updateCondition(0)"
        :class="{
          selected: selectedDoor === 0,
          lose: styleLoseDoor(0),
          win: styleWinDoor(0),
          unselectable: styleUnselectable(0)
        }"
      >
        <thedoor :doorsCondition="doorsCondition[0]">
          <template slot>
            <span v-if="winDoor === 0">WIN</span>
          </template>
        </thedoor>
      </div>
      <div
        class="shadow"
        @click="updateCondition(1)"
        :class="{
          selected: selectedDoor === 1,
          lose: styleLoseDoor(1),
          win: styleWinDoor(1),
          unselectable: styleUnselectable(1)
        }"
      >
        <thedoor :doorsCondition="doorsCondition[1]">
          <template slot>
            <span v-if="winDoor === 1">WIN</span>
          </template>
        </thedoor>
      </div>
      <div
        class="shadow"
        @click="updateCondition(2)"
        :class="{
          selected: selectedDoor === 2,
          lose: styleLoseDoor(2),
          win: styleWinDoor(2),
          unselectable: styleUnselectable(2)
        }"
      >
        <thedoor :doorsCondition="doorsCondition[2]">
          <template slot>
            <span v-if="winDoor === 2">WIN</span>
          </template>
        </thedoor>
      </div>
    </div>
    <div>
      <p>Total games: {{ totalGames }}</p>
    </div>
    <div>
      <p>Wins: {{ wins }}</p>
    </div>
    <div>
      <p>Loses: {{ loses }}</p>
    </div>
    <button type="button" @click="resetGame">RESET</button>
  </div>
</template>

<script>
export default {
  name: "the_doors",
  components: {
    thedoor: () => import("@/components/thedoor.vue"),
  },
  data: function() {
    return {
      winDoor: 0,
      selectedDoor: 4,
      doorsCondition: [false, false, false],
      losedDoor: 4,
      totalGames: 0,
      wins: 0,
      loses: 0
    };
  },
  methods: {
    styleUnselectable: function(door) {
      if (this.doorsCondition[door] === true) return true;
    },
    styleLoseDoor: function(door) {
      if (this.losedDoor === door) {
        return true;
      }
    },
    styleWinDoor: function(door) {
      if (
        this.selectedDoor === door &&
        this.doorsCondition[door] === true &&
        this.selectedDoor === this.winDoor
      ) {
        return true;
      }
    },
    generateWinDoor: function() {
      this.winDoor = this.randomInteger(0, 2);
    },
    randomInteger: function(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      rand = Math.floor(rand);
      return rand;
    },
    computerStep: function() {
      if (this.selectedDoor !== 4 && !this.doorsCondition.includes(true)) {
        let randomDoor = this.randomInteger(0, 2);
        while (
          this.selectedDoor === randomDoor ||
          this.winDoor === randomDoor
        ) {
          randomDoor = this.randomInteger(0, 2);
        }
        this.doorsCondition[randomDoor] = true;
      }
    },
    updateDoors: function(door) {
      this.selectedDoor = door;
      // one of doors is open
      if (this.doorsCondition.includes(true)) {
        //update current door
        this.doorsCondition.splice(door, 1, true);
        // if not wins - open all doors
        if (door !== this.winDoor) {
          setTimeout(() => {
            this.doorsCondition = [true, true, true];
          }, 300);
          this.losedDoor = this.doorsCondition.indexOf(false);
        }
      }
    },
    updateStatistic: function(door) {
      if (
        this.losedDoor === 0 ||
        this.losedDoor === 1 ||
        this.losedDoor === 2
      ) {
        this.loses++;
        this.totalGames++;
      }
      if (
        this.selectedDoor === door &&
        this.doorsCondition[door] === true &&
        this.selectedDoor === this.winDoor
      ) {
        this.wins++;
        this.totalGames++;
      }
    },
    updateCondition: function(door) {
      this.updateDoors(door);
      this.updateStatistic(door);
      if (this.doorsCondition.includes(true)) {
        this.restartGame();
      }
    },
    restartGame: function() {
      setTimeout(() => {
        this.doorsCondition = [false, false, false];
        this.selectedDoor = 4;
        this.losedDoor = 4;
        setTimeout(() => {
          this.generateWinDoor();
        }, 300);
      }, 1500);
    },
    resetGame: function() {
      this.wins = 0;
      this.loses = 0;
      this.totalGames = 0;
      this.doorsCondition = [false, false, false];
      this.selectedDoor = 4;
      this.losedDoor = 4;
      this.generateWinDoor();
    }
  },
  watch: {
    selectedDoor: function() {
      this.computerStep();
    }
  },
  created: function() {
    this.generateWinDoor();
  }
};
</script>

<style scoped>
.flex-container {
  display: flex; /*отображает контейнер как строчный элемент*/
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
button {
  margin: 1.6%;
}
.shadow {
  box-shadow: 0.2vw 0.2vw 5vw #000000;
}
.selected {
  box-shadow: 0.2vw 0.2vw 5vw #926d00; /* Параметры тени */
}
.lose {
  box-shadow: 0.2vw 0.2vw 5vw #450c0c; /* Параметры тени */
}
.win {
  box-shadow: 0.2vw 0.2vw 5vw #0f4b00; /* Параметры тени */
}
.unselectable {
  pointer-events: none;
}
button {
  height: 3vw;
  width: 7vw;
  -webkit-transition-duration: 0.2s; /* Safari */
  background-color: #3a3937;
  font-size: 1vw;
  color: #cecece;
  transition-duration: 0.2s;
  border: none;
  font-family: "Open Sans", serif;
}
button:hover {
  border: none;
  background-color: #000000;
  color: #c8c8c8;
  cursor: pointer;
}
</style>
