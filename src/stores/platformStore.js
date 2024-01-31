import { getCurrentInstance, ref, reactive, onMounted } from "vue";

const map = [];

export function usePlatformStore(size = 100) {
  map.value = Array(760)
    .fill("")
    .map(() => Array(158).fill(""));

  return { map };
}
