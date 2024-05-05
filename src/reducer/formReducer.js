export const formReducer = (value, action) => {
  switch (action.type) {
    case "name": {
      return { ...value, name: action.input };
    }
    case "phoneNumber": {
      return { ...value, phoneNumber: action.input };
    }
    case "password": {
      return { ...value, password: action.input };
    }
  }
};
