import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { config, vapidKey } from "./privateInfo";

const app = initializeApp(config);
const messaging = getMessaging();

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

//토큰값 얻기
export const getTokenFunc = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey: vapidKey,
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};
