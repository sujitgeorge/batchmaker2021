export const fileUploaded = data => ({
  type: "FILE_UPLOAD",
  data
});
export const setPageTitle = title => ({
  type: "SET_PAGE_TITLE",
  title
});
export const setSearchAccessor = accessor => ({
  type: "UPDATE_FIELD_TO_SEARCH",
  accessor
});
export const scanItem = item => ({
  type: "SCAN_ITEM",
  item
});
export const openSettings = boolean => ({
  type: "OPEN_SETTINGS",
  boolean
});
export const closeSettings = boolean => ({
  type: "CLOSE_SETTINGS",
  boolean
});
export const changeNotificationPosition = position => ({
  type: "CHANGE_NOTIFICATION_LOCATION",
  position
});
export const addNotification = notification => ({
  type: "ADD_NOTIFICATION",
  notification
});
export const removeNotification = notification => ({
  type: "REMOVE_NOTIFICATIONS",
  notification
});
export const updateNotification = notification => ({
  type: "UPDATE_NOTIFICATIONS",
  notification
});
export const changeTheme = theme => ({
  type: "CHANGE_THEME",
  theme
});
export const setCustomColors = theme => ({
  type: "SET_CUSTOM_COLORS",
  theme
});
export const changeNotificationSettings = settings => ({
  type: "UPDATE_NOTIFICATION_SETTINGS",
  settings
});
export const closeEasterEgg = () => ({
  type: "CLOSE_EASTER_EGG"
});
