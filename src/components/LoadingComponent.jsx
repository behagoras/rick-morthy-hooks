import React from "react";

export default function LoadingComponent({ loading, children }) {
  if (loading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{}}>Loading...</div>
      </div>
    );
  return children;
}
