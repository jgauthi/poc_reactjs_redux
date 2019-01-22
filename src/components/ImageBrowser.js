import React from "react";

export class ImageBrowser extends React.Component {
    render() {
        const {images} = this.props;

        return (
            <div className="row mt-4 mb-4">
                {
                    images.map(image => {
                        return (
                            <div key={image.id} className="col-md-6 col-lg-4">
                                <div className="mt-2 mb-2">
                                    <img className="img-fluid" src={`http://localhost/mindsymfony4/public/${image.url}`} alt="image uploaded"/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}