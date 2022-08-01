const initialStore = {
  user: null,
  isAuthenticated: false,
  loading: false,
  register_success: false,
};

const authReducer = (state = initialStore, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
        return state;
  }
};
export default authReducer;