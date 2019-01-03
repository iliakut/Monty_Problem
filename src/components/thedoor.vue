<template>
  <div class="door-container">
    <label>
      <!--block clicking on input (it defines on the upper component)-->
      <input style="display: none" type="checkbox" v-model="doorOpen" @click.prevent/>
      <!--.stop тут нужен для того, чтобы предотвратить всплытие и отменить двойное срабатывание onclick-->
      <div @click.stop class="door">
        <div class="front"></div>
        <div class="back"><slot><span>LOSE</span></slot></div>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: "thedoor",
  props: {
    doorsCondition: {
      type: Boolean,
      required: true
    }
  },
  data: function() {
    return {
      doorOpen: false
    };
  },
  watch: {
    doorsCondition: function() {
      this.doorOpen = this.doorsCondition;
    }
  }
};
</script>

<style scoped>
label {
  user-select: none;
}
.door {
  position: absolute;
  transform-style: preserve-3d;
  transition: all 300ms;
  cursor: pointer;
  display: flex;
}
.door-container:hover {
}
.door div {
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.door .back {
  transform: rotateY(180deg);
  background-color: #808080;
}

:checked + .door {
  transform: rotateY(180deg);
}
div {
  height: calc(20vw + 20px);
  width: calc(13vw + 20px);
}
img {
  height: 8vw;
}
</style>
