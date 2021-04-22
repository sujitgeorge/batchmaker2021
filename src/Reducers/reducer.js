import { FieldToSearch } from "./enums";
import { findObjectByKey, getSearchByFieldName } from "../Helpers/utilities";
import { toast } from "react-toastify";
import { uuidv4 } from "../Helpers/utilities";

const defaultState = {
  isEasterEgg: false,
  fileUploaded: false,
  scanned: [],
  importedData: [],
  matches: [],
  diff: [],
  fieldToSearch: FieldToSearch.SerialNumber,
  currentPageTitle: "",
  showSettings: false,
  notificationLocations: [
    { isActive: false, name: toast.POSITION.TOP_LEFT },
    { isActive: false, name: toast.POSITION.TOP_CENTER },
    { isActive: false, name: toast.POSITION.TOP_RIGHT },
    { isActive: false, name: toast.POSITION.BOTTOM_LEFT },
    { isActive: false, name: toast.POSITION.BOTTOM_CENTER },
    { isActive: true, name: toast.POSITION.BOTTOM_RIGHT }
  ],
  notificationLocation: toast.POSITION.BOTTOM_RIGHT,
  notifications: [],
  notificationSettings: {
    autoClose: 1000,
    hideProgressBar: false,
    pauseOnHover: true
  },
  themes: [{ isActive: true, name: "light" }, { isActive: false, name: "dark" }]
};

function store(state = defaultState, action) {
  switch (action.type) {
    case "CLOSE_EASTER_EGG":
      return {
        ...state,
        isEasterEgg: false
      };
    case "UPDATE_NOTIFICATION_SETTINGS":
      return {
        ...state,
        notificationSettings: {
          ...state.notificationSettings,
          ...action.settings
        }
      };
    case "UPDATE_NOTIFICATIONS":
      return {
        ...state,
        notifications: state.notifications.map(x => {
          if (x.id === action.notification.id) {
            return {
              ...x,
              shown: true
            };
          } else {
            return {
              ...x
            };
          }
        })
      };
    case "ADD_NOTIFICATION":
      return {
        ...state,
        notifications: state.notifications.concat({
          type: toast.TYPE.DEFAULT,
          body: action.notification.body,
          shown: false,
          id: uuidv4()
        })
      };
    case "FILE_UPLOAD":
      return {
        ...state,
        fileUploaded: true,
        importedData: action.data,
        notifications: state.notifications.concat({
          type: toast.TYPE.DEFAULT,
          body: `File has been loaded.`,
          shown: false,
          id: uuidv4()
        })
      };
    case "SET_PAGE_TITLE":
      return {
        ...state,
        currentPageTitle: action.title
      };
    case "UPDATE_FIELD_TO_SEARCH":
      return {
        ...state,
        fieldToSearch: action.accessor
      };
    case "SCAN_ITEM":
      const searchBy = getSearchByFieldName(state.fieldToSearch);
      const updates = {
        ...state
      };
      if (action.item[searchBy] === "(@)") {
        updates["isEasterEgg"] = true;
      } else {
        const hasBeenScanned = state.scanned.some(
          e => e[searchBy] === action.item[searchBy]
        );

        if (!hasBeenScanned) {
          let item = findObjectByKey(
            state.importedData,
            searchBy,
            action.item[searchBy]
          );
          updates["scanned"] = state.scanned.concat(action.item);
          if (item != null) {
            updates["matches"] = state.matches.concat(item);
            updates["notifications"] = state.notifications.concat({
              type: toast.TYPE.SUCCESS,
              body: "Match Found",
              shown: false,
              id: uuidv4()
            });
          } else {
            updates["scanned"] = state.scanned.concat(action.item);
            updates["diff"] = state.diff.concat(action.item);
            updates["notifications"] = state.notifications.concat({
              type: toast.TYPE.WARNING,
              body: "Match Not Found",
              shown: false,
              id: uuidv4()
            });
          }
        } else {
          updates["notifications"] = state.notifications.concat({
            type: toast.TYPE.WARNING,
            body: `${action.item[searchBy]} already added to list.`,
            shown: false,
            id: uuidv4()
          });
        }
      }
      return {
        ...updates
      };
    case "OPEN_SETTINGS":
      return { ...state, showSettings: true };
    case "CLOSE_SETTINGS":
      return { ...state, showSettings: false };
    case "CHANGE_NOTIFICATION_LOCATION":
      return {
        ...state,
        notificationLocation: action.position,
        notificationLocations: state.notificationLocations.map(loc => {
          if (loc.name === action.position) {
            return {
              ...loc,
              isActive: true
            };
          } else {
            return {
              ...loc,
              isActive: false
            };
          }
        })
      };
    case "CHANGE_THEME":
      return {
        ...state,
        themes: state.themes.map(theme => {
          if (theme.name === action.theme.name) {
            return {
              ...theme,
              isActive: true
            };
          } else {
            return {
              ...theme,
              isActive: false
            };
          }
        })
      };
    default:
      return state;
  }
}
export default store;
