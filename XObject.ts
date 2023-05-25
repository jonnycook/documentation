import { Component } from "react";
import { X, XObject } from "./XObject";
import { component } from "./component";

const state = X({
  tick: 0
})

XObject.observe(state, 'tick', () => {
  console.log('tick changed', state.tick);
});

function updateTick() {
  state.tick++;
}

setTimeout(() => {
  updateTick();
}, 1000);
