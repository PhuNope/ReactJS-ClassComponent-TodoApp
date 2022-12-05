import React from "react";

function getRamdomColor() {
  var letter = "0123456879ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }

  return color;
}

const Color = (WrappedComponent) => {
  const colorRandom = getRamdomColor();

  return (props) => (
    <div style={{ color: colorRandom }}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default Color;
