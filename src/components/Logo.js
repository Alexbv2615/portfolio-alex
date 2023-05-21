import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <title>Logo</title>
  <g>
    <g id="AN" transform="translate(25.000000, 40.000000)">
      <text x="24" y="16" fill="currentColor" fontSize="30" textAnchor="middle">AN</text>
    </g>
    <path
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M 50, 1
              L 10, 45
              
              L 50, 95
              
              L 90, 45 z"
    />
  </g>
</svg>
  );
}

export default Logo;