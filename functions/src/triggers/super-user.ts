/* eslint-disable object-curly-spacing */
import { user } from "firebase-functions/v1/auth";
import * as admin from "firebase-admin";

const superUsers = [
  "magnusbrandt85@gmail.com",
];

export const superUser = user().onCreate(async (user) => {
  try {
    if (user.email && superUsers.includes(user.email)) {
      await admin.auth().setCustomUserClaims(user.uid, {
        role: "super",
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }
  }

  return;
});
