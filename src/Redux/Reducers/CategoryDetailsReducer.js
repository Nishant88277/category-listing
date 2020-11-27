import { CATEGORY_DETAILS, CATEGORY_DETAILS_SUCCESS, CATEGORY_DETAILS_FAILURE } from "../Constants";
  
  const init = {
    data: {}
  };
  
  const GetCategoryReducer = (state = init, action) => {
    switch (action.type) {
      case CATEGORY_DETAILS:
        return { ...state, loading: true };
      case CATEGORY_DETAILS_SUCCESS:
        return { ...state, loading: false, data: action.payload };
      case CATEGORY_DETAILS_FAILURE:
        return { ...state, loading: false, data: action.payload };
      default:
        return state;
    }
  };
  
  export default GetCategoryReducer;
  