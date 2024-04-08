import React from "react";

const DescriptionBox = ({id, style, title, desc}) => {

    return (
        <>
            <div key={id} className="col-sm-5 mb-3 m-2 mb-sm-0 dscbox">
                <div className="card">
                    <div className="card-body" style={style}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DescriptionBox;
