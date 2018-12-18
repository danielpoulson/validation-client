// data-function ver-001 10/06/2017 DP
import sortBy from "lodash/fp/sortBy";
import compose from "lodash/fp/compose";
import filter from "lodash/fp/filter";

const perPage = 15;
const initPage = 1;

export function pagedList(data, page) {
  const _page = page || initPage;
  const offset = (_page - 1) * perPage;
  return data.slice(offset, offset + perPage);
}

export function searchData(data, searchText, sortColumn, columns) {
  const reg1 = new RegExp(`${searchText}.*`, "i");

  function search(item) {
    if (
      item[columns[0]].match(reg1) ||
      item[columns[1]].match(reg1) ||
      item[columns[2]].match(reg1)
    ) {
      return true;
    }
    return false;
  }

  let _sortColumn = sortColumn;

  if (typeof sortColumn === "undefined") {
    _sortColumn = columns[0];
  }

  if (searchText === null) {
    return sortBy(_sortColumn, data);
  }

  const newList = compose(
    sortBy(_sortColumn),
    filter(search)
  )(data);

  return newList;
}

// This should be named removeById
export function removeByIndex(data, index) {
  return data.filter(item => item._id !== index);
}

// This should be named removeByIndex
export function removeByName(data, name) {
  const index = data.indexOf(name);
  return [...data.slice(0, index), ...data.slice(index + 1)];
}

export function getBySourceId(data, id) {
  return data.filter(item => item.SourceId === id);
}

export function sortUtcDates(data, sortField, direction) {
  function compare(a, b) {
    if (direction === "reverse") {
      if (new Date(a[sortField]) > new Date(b[sortField])) return -1;
      if (new Date(a[sortField]) < new Date(b[sortField])) return 1;
    } else {
      if (new Date(a[sortField]) < new Date(b[sortField])) return -1;
      if (new Date(a[sortField]) > new Date(b[sortField])) return 1;
    }
    return 0;
  }

  if (!data) {
    return [];
  } else {
    return data.sort(compare);
  }
}

export function sortArrayObjectByColumn(data, sortField, direction) {
  function compare(a, b) {
    if (direction === "reverse") {
      if (a[sortField] > b[sortField]) return -1;
      if (a[sortField] < b[sortField]) return 1;
    } else {
      if (a[sortField] < b[sortField]) return -1;
      if (a[sortField] > b[sortField]) return 1;
    }
    return 0;
  }

  return data.sort(compare);
}

export function addObjectToArray(arrayOfObject, newObject, field) {
  // Check the the item does not exist in the array
  const indx = objectFoundInArray(arrayOfObject, newObject, field);
  if (indx === -1) {
    arrayOfObject = [...arrayOfObject, newObject];
  } else {
    arrayOfObject = [
      ...arrayOfObject.slice(0, indx),
      // Copy the object before mutating
      Object.assign({}, newObject),
      ...arrayOfObject.slice(indx + 1)
    ];
  }

  return arrayOfObject;
}

export function objectFoundInArray(arrayOfObject, newObject, field) {
  const _val = arrayOfObject.findIndex(a => a[field] === newObject[field]);
  return _val;
}
