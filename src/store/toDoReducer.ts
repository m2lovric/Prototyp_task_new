interface ActionObject {
  type: string,
  payload: object
}

const toDoReducer = (state: Array<Object> = [], action: ActionObject) => {
  switch (action.type) {
    case 'AddTask':
      return state.concat(...state, action.payload);
    case 'RemoveTask':
      return state
    default:
      return state
  }
}

export default toDoReducer;