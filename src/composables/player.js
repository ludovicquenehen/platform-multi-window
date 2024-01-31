import { ref } from "vue";
import { useStorage } from "@vueuse/core";

export function usePlayer() {
  const position = useStorage("player", { x: 0, y: 5 });

  const reset = () => {
    position.value = { x: 0, y: 5 };
  };

  const move = () => {
    position.value.x += 10;
  };

	const moveRight = () => {
		position.value.x += 10;
	}

	const moveLeft = () => {
		position.value.x -= 10;
	}

	const moveUp = () => {
		position.value.y -= 10;
	}

	const moveDown = () => {
		position.value.y += 10;
	}

  return { position, move, reset, moveUp, moveDown, moveLeft, moveRight };
}
