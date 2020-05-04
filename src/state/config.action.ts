export enum ConfigActionTypes {
  ConfigUpdate = 'ConfigUpdate',
}

export const ConfigUpdate = (payload) => (dispatch) => dispatch({ type: ConfigActionTypes.ConfigUpdate, payload });
