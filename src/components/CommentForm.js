import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from 'react-redux';
import {renderField} from "../form";

class CommentForm extends React.Component {
    render() {
        return (
            <div className="card mb-3 mt-3 shadow-sm">
                <form className="card-body">
                    <Field name="content" label="Type your comment:" type="textarea" component={renderField}/>
                    <button type="submit" className="btn btn-primary btn-big btn-block">
                        Add Comment
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: "reduxForm",
})(connect(null, null)(CommentForm));
