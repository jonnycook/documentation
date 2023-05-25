import { X, x, XObject } from "./XObject";

const state = X({
  tick: 0
})

XObject.observe(state, 'tick', () => {
  console.log('tick changed', x(state));
});

function updateTick() {
  state.tick++;
}

setTimeout(() => {
  updateTick();
}, 1000);
