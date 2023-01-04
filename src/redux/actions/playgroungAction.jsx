import * as PlaygroundActionType from "../actionType/playgroundactionType";
import PlaygroundApi from "../../services/playground";

export const PlaygroundAction = (params) => async (dispatch) => {
  const res = await PlaygroundApi.Playgroundapi(params);
  dispatch({
    type: PlaygroundActionType.AI_RESPONSE,
    payload: res.data,
  });
  return res.data;
};
