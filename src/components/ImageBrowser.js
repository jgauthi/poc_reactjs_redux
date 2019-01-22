import React from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export class ImageBrowser extends React.Component {
    render() {
        const {images, deleteHandler} = this.props;

        return (
            <TransitionGroup component={null}>
            {
                images.map(image => {
                    const onImageDeleteClick = (event) => {
                        event.preventDefault();
                        deleteHandler(image.id);
                    };
                    return (
                        <CSSTransition timeout={1000} classNames="fade" key={image.id}>
                            <div className="col-md-6 col-lg-4">
                                <div className="mt-2 mb-2">
                                    <img src={`http://localhost/mindsymfony4/public/${image.url}`}
                                         className="img-fluid"/>
                                </div>
                                <div className="mb-2">
                                    <button type="button"className="btn btn-outline-danger btn-sm" onClick={onImageDeleteClick}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </CSSTransition>
                    )
                })
            }
            </TransitionGroup>
        )
    }
}