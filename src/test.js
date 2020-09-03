import React, { useState, useEffect } from "react";

export default function Test() {
  function useLegacyState(initState) {
    const [state, setState] = useState(initState);
    return [state, (newState) => setState({ ...state, ...newState })];
  }

  return "hi";
}
