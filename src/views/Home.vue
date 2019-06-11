<template>
  <div class="main">
    <div class="stylepicker">
      <div>
        <input
          v-model="picked"
          type="radio"
          value="white"
          id="radio-one"
          class="form-radio radio-white"
          checked
        />
        <input
          v-model="picked"
          type="radio"
          value="black"
          id="radio-two"
          class="form-radio radio-black"
        />
      </div>
    </div>
    <div><h1>MONTY HALL PROBLEM</h1></div>
    <div class="flex-container">
      <div><the_doors></the_doors></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import the_doors from "@/components/the_doors.vue";

export default {
  name: "home",
  components: {
    the_doors
  },
  data: function() {
    return {
      picked: "white"
    };
  },
  methods: {
    toggleBodyStyle: function() {
      if (this.picked === "white") {
        document.body.classList.remove("body-black");
        document.body.classList.add("body-white");
      } else {
        document.body.classList.remove("body-white");
        document.body.classList.add("body-black");
      }
    }
  },
  watch: {
    picked: function() {
      this.toggleBodyStyle();
      localStorage.setItem('colorTheme', this.picked);
    }
  },
  beforeCreate() {
    document.body.classList.add("body-white");
  },
  mounted() {
    if (!localStorage.getItem("colorTheme")) {
      this.picked = "white";
    } else this.picked = localStorage.getItem("colorTheme");
  }
};
</script>

<style>
.body-white {
  background-color: #f1f1f1;
  color: #4a4a4a;
}
.body-black {
  background-color: #2f2f2f;
  color: #f1f1f1;
}
.main {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
h1 {
  font-size: calc(100% + 1.5vw);
}
h2 {
  font-size: calc(90% + 0.8vw);
}
p {
  font-size: calc(80% + 0.5vw);
}
span {
  font-size: calc(90% + 0.8vw);
}

h1,
h2,
p,
span {
  font-family: "Open Sans", serif;
  line-height: 1.2em;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: 400;
  font-style: normal;
}
.flex-container {
  display: flex;
  flex-direction: column;
}
.stylepicker {
  position: relative;
  text-align: right;
  left: 1%;
  margin-right: 1vw;
}
.form-radio {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  position: relative;
  color: #808080;
  top: 10px;
  height: calc(10px + 1vw);
  width: calc(10px + 1vw);
  border: 0;
  border-radius: 50px;
  cursor: pointer;
  margin-right: 7px;
  outline: none;
  box-shadow: 0 0 10px #646464;
}
.radio-black {
  background-color: #3b3b3b;
}
.radio-white {
  background-color: #f1f1f1;
}
.radio-black:hover {
  background-color: #474747;
}
.radio-white:hover {
  background-color: #fbfbfb;
}
.form-radio:checked::before {
  position: absolute;
  font: calc(0.4vw + 45%) "Open Sans", sans-serif;
  left: 37%;
  top: 20%;
  content: "\02143";
  transform: rotate(40deg);
}
</style>
