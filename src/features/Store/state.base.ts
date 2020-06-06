
export const mapAction = <T>(type: string) => (payload: T) => (dispatch) => dispatch({ type, payload });
