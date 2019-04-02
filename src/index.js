import '@babel/polyfill';
import rootView from "./views";
import { initDataModel } from "./update/dataModel";
import update from "./update";

import "./styles.css";

const rootElement = document.getElementById("app");

function render(obState, update,rootView, rootElement) {
  try {
    let currentState = obState;

    let currentView = rootView(currentState, dispatch);

    rootElement.appendChild(currentView);

    function dispatch(action) {
      if (typeof action === "object") {

        currentState = update(currentState, action);

        console.log("updatedState",currentState )

        let updatedViewByUpdate = rootView(currentState, dispatch);

        rootElement.replaceChild(updatedViewByUpdate, currentView);

        currentView = updatedViewByUpdate;

      } else if (typeof action === "function") {

        action(dispatch);
      }
    }

    dispatch({});
  } catch (error) {
    console.log("error app - dispatch, state, rootElem ", error.message);
  }
}


render(initDataModel, update, rootView, rootElement);
