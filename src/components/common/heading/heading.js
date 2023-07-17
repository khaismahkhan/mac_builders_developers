import React from "react";

const Heading = (props) => {
  const { text, span = false, nospan = false, color = false } = props;
  return (
    <div>
      <p
        style={{ display: "block", fontWeight: "bold", textAlign: "center" }}
        // className={`block lg:hidden font-semibold text-2xl text-center ${
        //   color && "text-white py-2"
        // }`}
      >
        {text}
      </p>
      <div className="hidden lg:flex justify-center flex-col items-center p-5 relative">
        <p
          className={`text-7xl font-semibold text-center ${
            span ? "customtext" : "customtext2"
          }`}
        >
          {text}
        </p>
        {nospan && (
          <p className="font-semibold text-4xl text-center absolute bottom-2 text-white">
            {text}
          </p>
        )}
        {span && (
          <p className="font-semibold text-4xl text-center absolute bottom-4">
            Why do they
            <span className="text-lightblue"> trust us</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Heading;
