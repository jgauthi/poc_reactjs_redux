import React from 'react';
import BlogPostList from "./BlogPostList";
import {blogPostListFetch} from "../actions/actions";
import {connect} from "react-redux";
import {Paginator} from "./Paginator";

const mapStateToProps = state => ({
    ...state.blogPostList
});

const mapDispatchToProps = {
    blogPostListFetch
};

class BlogPostListContainer extends React.Component {
    componentDidMount() {
        this.props.blogPostListFetch();
    }

    render() {
        const {posts, isFetching} = this.props;

        return (
            <div>
                <BlogPostList posts={posts} isFetching={isFetching} />
                <Paginator currentPage={1} pageCount={10}/>
            </div>
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostListContainer);