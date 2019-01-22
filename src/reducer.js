import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form';
import {routerReducer} from "react-router-redux";
import blogPostList from "./reducers/blogPostList";
import blogPost from "./reducers/blogPost";
import commentList from "./reducers/commentList";
import registration from "./reducers/registration";
import auth from "./reducers/auth";
import blogPostForm from "./reducers/blogPostForm";

export default combineReducers({
    blogPostList,
    blogPost,
    commentList,
    auth,
    registration,
    blogPostForm,
    router: routerReducer,
    form: formReducer
});