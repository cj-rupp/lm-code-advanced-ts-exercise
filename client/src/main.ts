import { exit } from "./exit/exit";
import { showMenu } from "./menu/menu";
import { browsePosts } from "./menu/options/browse_posts/browse_posts";
import { sendMessage } from "./menu/options/send_message/send_message";
import { showAllPosts } from "./menu/options/show_all_posts/show_all_posts";
import { showAllUsers } from "./menu/options/show_all_users/show_all_users";
import { State } from "./states/state";
import { STATES, AnyState } from "./states/states";
import { clear, print, printNewLine, prompt } from "./ui/console";

async function begin() {
	clear("yes");
	print("👋 Welcome to our cool blog browser!");
	await prompt("⌨️ Press [ENTER] to continue! 🕶️");
	main();
}

async function main() {
	let state:State = new State();

	while (true) {
		const resultState = await stateTransition(state.get());
		if(resultState) {
			state.set(resultState);
			break; 
		}
		else {
			clear();
			print(`🌋 😱 Uh-oh, we've entered an invalid state: "${state.get()}"`);
			print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
			print("💥 Crashing the program now...  💥", false);
			print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
			printNewLine();
			exit(99);
			break;
		}
	}
}

/*
async function main() {
	let state:State = new State();

	while (true) {
		switch (state.get()) {
			case "MENU":
				const newMenuOption = await showMenu();
				state.set(newMenuOption);
				break;
			case "SEND_MESSAGE":
				const nextState = await sendMessage();
				state.set(nextState);
				break;
			case "SHOW_POSTS":
				clear();
				const posts = await showAllPosts();
				state.set(STATES[0]);
				break;
			case "SHOW_USERS":
				clear();
				const users = await showAllUsers();
				state.set(STATES[0]);
				break;
			case "BROWSE_POSTS":
				clear();
				const post = await browsePosts();
				state.set(STATES[0]);
				break;
			case "ADD_USER":
				clear();
				print("🏗️  This functionality has not been implemented!");
				await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
				state.set(STATES[0]);
				break;
			case "UNKNOWN":
				clear();
				print("😵 We have entered an unknown state.");
				await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
				state.set(STATES[0]);
				break;
*/
			/*
			case "CABBAGE":
				clear();
				print("🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬", false);
				print("🥬      CABBAGE MODE UNLOCKED     🥬", false);
				print("🥬     Why did you want this?     🥬", false);
				print("🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬", false);
				await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
				state.set(STATES[0]);
				break;
			default:
				clear();
				print(`🌋 😱 Uh-oh, we've entered an invalid state: "${state.get()}"`);
				print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
				print("💥 Crashing the program now...  💥", false);
				print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
				printNewLine();
				exit(99);
				break;
			*/
/*
		}
	}
}
*/
/*

I tried to make this an overloaded function, but it wouldn't recognise the function
signatures as correct, only the implementation. So, I just used that.

function stateTransition(currentState:"MENU"): AnyState;

function stateTransition(currentState:"SEND_MESSAGE"): AnyState;

function stateTransition(currentState:"SHOW_POSTS"): "MENU";

function stateTransition(currentState:"SHOW_USERS"): "MENU";

function stateTransition(currentState:"BROWSE_POSTS"): "MENU";

function stateTransition(currentState:"ADD_USERS"): "MENU";

function stateTransition(currentState:"UNKNOWN"): "MENU";
*/

function stateTransition(currentState:AnyState) {
	const surrogateStateList = [...STATES];
	if(surrogateStateList.indexOf(currentState) === 0){
		return showMenu();
	}
	else if(surrogateStateList.indexOf(currentState) === 1){
		return sendMessage();
	}
	else if(surrogateStateList.indexOf(currentState) === 2){
		clear();
		showAllPosts();
		return "MENU";
	}	
	else if(surrogateStateList.indexOf(currentState) === 3){
		clear();
		showAllUsers();
		return "MENU";
	}	
	else if(surrogateStateList.indexOf(currentState) === 4){
		clear();
		browsePosts();
		return "MENU";
	}	
	else if(surrogateStateList.indexOf(currentState) === 5){
		clear();
		print("🏗️  This functionality has not been implemented!");
		prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
		return "MENU";
	}	
	else if(surrogateStateList.indexOf(currentState) === 6){
		clear();
		print("😵 We have entered an unknown state.");
		prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
		return "MENU";
	}
}

begin();
