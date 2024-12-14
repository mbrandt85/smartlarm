import * as admin from "firebase-admin";

admin.initializeApp();

// On Call
export { removeRole } from "./on-call/remove-role"
export { setRole } from "./on-call/set-role"

// Triggers
export { superUser } from "./triggers/super-user"