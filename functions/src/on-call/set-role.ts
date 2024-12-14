/* eslint-disable object-curly-spacing */
import { onCall } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import { log } from "firebase-functions/logger";
import { ADMIN_ROLES } from "../constants";

export const setRole = onCall(async (req) => {
  log(req.auth?.token.role);
  try {
    if (!ADMIN_ROLES.includes(req.auth?.token.role)) {
      throw new Error("Unauthorized");
    }

    if (!req.data.email) {
      throw new Error("Email is required");
    }

    if (!req.data.role) {
      throw new Error("Role is required");
    }

    const user = await admin.auth().getUserByEmail(req.data.email);

    if (!user.email) {
      throw new Error("User does not have email");
    }

    if (!user.emailVerified) {
      throw new Error("Email is not verified");
    }

    const doc = await admin.firestore().collection("app").doc("roles").get();

    let roles: { [key: string]: { email: string; uid: string }[] } = {};

    if (doc.exists) {
      roles = doc.data() as typeof roles;
    }

    const newUser = {
      email: user.email,
      uid: user.uid,
    };

    if (roles[req.data.role]) {
      if (!roles[req.data.role].find((i) => i.email === user.email)) {
        roles[req.data.role] = [
          ...roles[req.data.role],
          newUser,
        ];
      }
    } else {
      roles[req.data.role] = [newUser];
    }

    await admin.firestore().collection("app").doc("roles").set({
      [req.data.role]: roles[req.data.role],
    });

    await admin.auth().setCustomUserClaims(user.uid, {
      role: req.data.role,
    });

    return {
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: false,
      error: "Unknown error",
    };
  }
});
