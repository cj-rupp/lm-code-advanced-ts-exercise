export const STATES = ["MENU","SEND_MESSAGE","SHOW_POSTS","SHOW_USERS",
						"BROWSE_POSTS","ADD_USER","UNKNOWN"] as const;

export type AnyState = typeof STATES[number];

/* export const states = {
	MENU: "MENU",

	SEND_MESSAGE: "SEND_MESSAGE",

	SHOW_POSTS: "SHOW_POSTS",
	SHOW_USERS: "SHOW_USERS",
	BROWSE_POSTS: "BROWSE_POSTS",

	ADD_USER: "ADD_USER",

	UNKNOWN: "UNKNOWN",
}; */
