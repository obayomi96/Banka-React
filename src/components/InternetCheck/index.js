import React from "react";

const InternetCheck = ({ message, style }) => {
  // Create a variable called internetConnection and assign it the value of navigator.online,
  // you can also do it in componentDidMount by using class component
  var internetConnection = navigator.onLine;
  return (
    <div>
      {/* Conditionally render our "p" tag based on internetConnection   variable */}
      {!internetConnection && (
        <p
          style={
            style || {
              backgroundColor: "red",
              color: "#000",
              textAlign: "center"
            }
          }
        >
          {message || "No Internet"}
        </p>
      )}
    </div>
  );
};
export default InternetCheck;
