<script setup>
import { onMounted, computed } from "vue";
import { useAppStore } from "./stores/appStore";
import { usePlatformStore } from "./stores/platformStore";
import { usePlayer } from "./composables/player";
import { isInWindow } from "./utils";

const { app_id, windowDimensions, togglePause } = useAppStore(Math.floor(Math.random() * 99999));

const plaftormStore = usePlatformStore();
const map = computed(() => plaftormStore.map.value);
const { position, reset, move, moveUp, moveDown, moveLeft, moveRight } = usePlayer();
const positionX = computed(() => `${position.value.x - windowDimensions.value.x || 0}px`);
const positionY = computed(() => `${position.value.y - windowDimensions.value.y || 0}px`);
const playerIsInWindow = computed(() => isInWindow(position.value, windowDimensions.value));
onMounted(() => {
  window.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      reset();
    }
    if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
      togglePause();
      e.preventDefault();
    }
    console.log(String.fromCharCode(e.keyCode));

    if (e.key === "8") {
      moveUp();
      e.preventDefault();
    }
    if (e.key === "2") {
      moveDown();
      e.preventDefault();
    }
    if (e.key == "4") {
      moveLeft();
      e.preventDefault();
    }
    if (e.key == "6") {
      moveRight();
      e.preventDefault();
    }
  });
});
</script>

<template>
  <div class="app_id">{{ app_id }}</div>
  <div class="platform-container">
    <!-- <div>
      <div v-for="grounds in map" class="platform-line">
        <div v-for="ground in grounds" class="platform-cell"></div>
      </div>
    </div> -->
    <div v-if="playerIsInWindow" class="player"></div>
  </div>
</template>

<style scoped>
.app_id {
  position: absolute;
  top: 0;
  left: 0;
  background: blue;
  z-index: 10;
  color: black;
  font-weight: 700;
}
.platform-container {
  position: relative;
}

.platform-line {
  height: 10vh;
  width: 100vw;
  display: flex;
  box-shadow: inset 0px 50px 32px -9px #000000;
  background: transparent;
  z-index: 1;
}

.platform-cell {
  width: 10%;
  z-index: 0;
  box-shadow: inset 0px -50px 32px -9px #ff0000;
}

.player {
  position: absolute;
  top: v-bind("positionY");
  left: v-bind("positionX");
  height: 10px;
  width: 10px;
  background: greenyellow;
}
</style>
