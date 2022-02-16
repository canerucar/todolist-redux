export const ADD = "ADD";
export const CLEAN = "CLEAN";
export const MARK = "MARK";

export const addToList = (text) => {
  return { type: ADD, payload: text };
};

export const mark = (id) => {
  return { type: MARK, payload: id };
};

export const clean = () => {
  return { type: CLEAN };
};
