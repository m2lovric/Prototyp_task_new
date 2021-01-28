interface ActionObject {
  type: string,
  payload: string
}

const userReducer = (state: string = '', action: ActionObject) => {
  switch (action.type) {
    case 'AddUser':
      return state = action.payload;
    case 'RemoveUser':
      return state = '';
    default:
      return state
  }
}

export default userReducer;