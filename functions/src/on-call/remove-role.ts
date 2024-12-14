/* eslint-disable object-curly-spacing */
import { onCall } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import { ADMIN_ROLES } from "../constants";

export const removeRole = onCall(async (req) => {
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

    if (!user.emailVerified) {
      throw new Error("Email is not verified");
    }

    const doc = await admin.firestore().collection("app").doc("roles").get();

    let roles: { [key: string]: { email: string; uid: string }[] } = {};

    if (doc.exists) {
      roles = doc.data() as typeof roles;

      if (roles[req.data.role]) {
        roles[req.data.role] = roles[req.data.role]
          .filter((u) => u.uid !== user.uid);
      }
    }

    await admin.firestore().collection("app").doc("roles").set({
      [req.data.role]: roles[req.data.role],
    });

    await admin.auth().setCustomUserClaims(user.uid, {
      role: null,
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
