import { FieldToSearch } from "../Reducers/enums";

export const findObjectByKey = (array, key, value) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i][key].trim().toLowerCase() === value.toLowerCase()) {
      return array[i];
    }
  }
  return null;
};
export const getSearchByFieldName = type => {
  switch (type) {
    case FieldToSearch.SerialNumber:
      return "SN";
    case FieldToSearch.AssetTag:
      return "asset_tag";
  }
};
export const uuidv4 = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};
