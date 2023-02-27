import { STATES, AnyState } from "../states/states";
import { clear, print, printNewLine, prompt } from "../ui/console";

export async function showMenu() {
	clear();
	print("0. Send Server Message", false);
	print("1. Show all posts", false);
	print("2. Show all users", false);
	print("3. Browse posts", false);
	print("4. Add user", false);
	printNewLine();

	const selection:string = await prompt("What shall we do? ");
	const selectionNumber = parseInt(selection);
	if(selectionNumber >= 0 && selectionNumber < (STATES.length-2)){
		const result:AnyState = STATES[selectionNumber+1]
		return result;
	}
	else {
		return STATES[6];
	}
}
