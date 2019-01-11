import React from 'react';
import BlogPostList from "./BlogPostList";
import {blogPostAdd, blogPostList} from "../actions/actions";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    ...state.blogPostList
});

const mapDispatchToProps = {
    blogPostList,
    blogPostAdd
};

class BlogPostListContainer extends React.Component {
    componentDidMount() {
        setTimeout(this.props.blogPostAdd, 3000);
        setTimeout(this.props.blogPostAdd, 5000);
        setTimeout(this.props.blogPostAdd, 7000);
        this.props.blogPostList();
    }

    render() {
        console.log('render BlogPostListContainer');
        console.log(this.props);
        return (<BlogPostList posts={this.props.posts} />)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);