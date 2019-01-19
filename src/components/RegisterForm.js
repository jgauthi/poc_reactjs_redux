import React from 'react';
import {Field, reduxForm} from "redux-form";
import {renderField} from "../form";
import {connect} from "react-redux";
import {userRegister} from "../actions/actions";

const mapDispatchToProps = {
    userRegister
};

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {termsAccepted: false};
    }

    onSubmit(values) {
        // console.log(...Object.values(values));
        return this.props.userRegister(...Object.values(values))
            .then(() => {
                this.props.reset();
                this.props.history.push('/');
        });
    }

    onTermsAcceptedClick(e) {
        this.setState( prevState => ({ termsAccepted: !prevState.termsAccepted }) );
    }

    render() {
        const {handleSubmit, submitting} = this.props;

        return (
            <div className="card mt-3 mb-6 shadow-sm">
                <div className="card-body">
                    <form method="POST" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field name="username" label="Username:" type="text" component={renderField}/>
                        <Field name="password" label="Password:" type="password" component={renderField}/>
                        <Field name="retypedPassword" label="Re-type password:" type="password" component={renderField}/>
                        <Field name="email" label="E-mail:" type="text" component={renderField}/>
                        <Field name="name" label="Full name:" type="text" component={renderField}/>

                        <div className="form-check form-group">
                            <input className="form-check-input" type="checkbox" id="onTermsAcceptedClick"
                                   value={false}
                                   onClick={this.onTermsAcceptedClick.bind(this)}/>
                            <label className="form-check-label" for="onTermsAcceptedClick">I agree to the terms and conditions</label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-big btn-block"
                                disabled={submitting || !this.state.termsAccepted}>
                            Register
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'reduxForm'
})(connect(null, mapDispatchToProps)(RegisterForm));