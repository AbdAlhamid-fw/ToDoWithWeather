import { IInternalState } from "./context";

type Action =
  | { type: "LOADING" }
  | { type: "ACTION_LOADING" }
  | { type: "SUCCESS"; payload: { data: any} }
  | { type: "ERROR"; payload: { error: any } };

const reducer = (state: IInternalState, action: Action): IInternalState => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: undefined };
    case "ACTION_LOADING":
      return { ...state, actionLoading: !state.actionLoading };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        actionLoading: false,
        data: action.payload.data,
      };
    case "ERROR":
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
};

export default reducer;
