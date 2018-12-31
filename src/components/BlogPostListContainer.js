import React from 'react';
import BlogPostList from "./BlogPostList";

class BlogPostListContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.posts = [
            {
                id: 1,
                title: 'Hello'
            },
            {
                id: 2,
                title: 'Another post'
            }
        ];
    }

    render() {
        return (<div>
            <BlogPostList posts={this.posts}/>
        </div>)
    }
}

export default BlogPostListContainer;