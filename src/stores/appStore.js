import { getCurrentInstance, ref, reactive, onMounted, onUnmounted } from "vue";
import { useStorage } from "@vueuse/core";
import { usePlayer } from "./../composables/player";
const map = [];

export function useAppStore(app_id) {
  const apps = useStorage("apps", { apps: [] });
  const { move } = usePlayer();
  const pause = ref(false);

  const togglePause = () => {
    pause.value = !pause.value;
  };

  const intervalScreenPosition = ref(null);
  const windowDimensions = ref({ x: 0, y: 0, width: 0, height: 0 });
  const playerMoveInterval = ref(null);

  onMounted(() => {
    apps.value.apps.push(app_id);

    playerMoveInterval.value = setInterval(() => {
      if (!pause.value) {
        //move();
      }
    }, 100);

    windowDimensions.value.x = window.screenX;
    windowDimensions.value.y = window.screenY;

    windowDimensions.value = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    intervalScreenPosition.value = setInterval(function () {
      // if (windowDimensions.value.x != window.screenX || windowDimensions.value.y != window.screenY) {
      //   console.log("moved!");
      // } else {
      //   console.log("not moved!");
      // }

      windowDimensions.value.x = window.screenX;
      windowDimensions.value.y = window.screenY;
    }, 10);
  });

  onUnmounted(() => {
    clearInterval(intervalScreenPosition.value);
    clearInterval(playerMoveInterval.value);
  });

  return {
    app_id,
    windowDimensions,
    togglePause,
  };
}
