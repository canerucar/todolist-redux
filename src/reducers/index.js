import { ADD, MARK, CLEAN } from "../actions";
const INITIAL_STATE = {
  list: [
    { id: 1, title: "Alisveris Yap", completed: false },
    { id: 2, title: "Fatura ode", completed: true },
  ],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: Date.now(),
            title: action.payload,
            completed: false,
          },
        ],
      };
    case MARK:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    case CLEAN:
      return {
        list: state.list.filter((item) => item.completed === false),
      };
    default:
      return state;
  }
};
