import { sendMessageToServer } from "../../../api/send_message_to_server";
import { STATES, AnyState } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

export async function sendMessage():Promise<AnyState> {
	clear();

	const message:string = await prompt("What message shall we send? ");

	printNewLine();
	print(`📨 Sending message "${message}"...`);

	const success = await sendMessageToServer(message);

	if (success === true) print("🥳 Message received successfully!");
	else print("😵 Message NOT received.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return STATES[0];
}