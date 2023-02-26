export const STATES = ["MENU","SEND_MESSAGE","SHOW_POSTS","SHOW_USERS",
						"BROWSE_POSTS","ADD_USER","UNKNOWN"] as const;

export type AnyState = typeof STATES[number];

