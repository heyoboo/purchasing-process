import React from "react";


const Steps = () => {

    return (
        <div
            className="steps flex between"
            style={{
                display: "flex",
                justifyContent: "between",
                width: "50vw",
                textAlign: "center"
            }}
        >
            <div className="step-l"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    textAlign: "center",
                    width: "130px",
                    padding: "0 20px"
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        lineHeight: "40px",
                        fontSize: "1.2rem",
                        width: "40px",
                        height: "40px",
                        borderRadius: "100%",
                        background: "#2596be",
                        color: "white"
                    }}
                >
                    1
                </div>
                <div>My Data</div>
            </div>
            <hr className="step-m dashed"
                style={{
                    borderTop: "1px dashed grey",
                    width: `calc(100% - 100px)`
                }}
            />
            <div className="step-r"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    textAlign: "center",
                    width: "130px",
                    padding: "0 20px"
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        lineHeight: "40px",
                        fontSize: "1.2rem",
                        width: "40px",
                        height: "40px",
                        borderRadius: "100%",
                        background: "#2596be",
                        color: "white"
                    }}
                >
                    2
                </div>
                <div>Payment</div>
            </div>
        </div>

    );
};

export default Steps;
