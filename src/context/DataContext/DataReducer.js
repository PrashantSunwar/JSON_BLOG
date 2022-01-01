export const LOAD_USER_DATA_BEGIN = "LOAD_USER_DATA_BEGIN";
export const LOAD_USER_DATA_SUCCESS = "LOAD_USER_DATA_SUCCESS";

export const LOAD_POST_DATA_BEGIN = "LOAD_POST_DATA_BEGIN";
export const LOAD_POST_DATA_SUCCESS = "LOAD_POST_DATA_SUCCESS";

export const POST_DATA_DELETE_BEGIN = "POST_DATA_DELETE_BEGIN";
export const POST_DATA_DELETE_SUCCESS = "POST_DATA_DELETE_SUCCESS";

export const dataReducer = (state, action) => {
  switch (action.type) {
    case LOAD_USER_DATA_BEGIN:
      return {
        ...state,
        userDataLoading: true,
      };
    case LOAD_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: action.payload.map((item) => {
          const data = {
            userId: item.id,
            name: item.name,
            companyName: item.company.name,
          };
          return data;
        }),
        userDataLoading: false,
      };
    case LOAD_POST_DATA_BEGIN:
      return {
        ...state,
        postDataLoading: true,
      };
    case LOAD_POST_DATA_SUCCESS:
      return {
        ...state,
        postData: action.payload,
        postDataLoading: false,
      };
    case POST_DATA_DELETE_BEGIN:
      return {
        ...state,
        postDeleteLoading: true,
      };
    case POST_DATA_DELETE_SUCCESS:
      return {
        ...state,
        postDeleteLoading: false,
      };
    default:
      return state;
  }
};
