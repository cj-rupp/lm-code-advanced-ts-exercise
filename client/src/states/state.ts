import { STATES, AnyState } from "./states";

export class State {
	state:AnyState = STATES[0];

	get():AnyState {
		return this.state;
	}

	set(newState:AnyState) {
		this.state = newState;
	}
}
