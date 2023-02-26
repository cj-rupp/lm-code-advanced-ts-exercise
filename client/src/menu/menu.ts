import { STATES } from "../states/states";
import { clear, print, printNewLine, prompt } from "../ui/console";

export async function showMenu() {
	clear();
	print("0. Send Server Message", false);
	print("1. Show all posts", false);
	print("2. Show all users", false);
	print("3. Browse posts", false);
	print("4. Add user", false);
	printNewLine();

	const result = await prompt("What shall we do? ");
	return STATES[parseInt(result)+1];
	
/*
	if (result === "0") return STATES[1];
	if (result === "1") return STATES[2];
	if (result === "2") return STATES[3];
	if (result === "3") return STATES[4];
	if (result === "4") return STATES[5];
*/
	return STATES[6];
}
