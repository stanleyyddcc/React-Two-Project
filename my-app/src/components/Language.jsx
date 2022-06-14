import React from "react";
class Language extends React.Component{
    render() {
        return (
             <div className="language-item">
                <div className="language-name">
                    {this.props.name}
                </div>
                <img src={this.props.image} alt="" className="language-image" />
             </div>
        );
    }
}

export default Language;