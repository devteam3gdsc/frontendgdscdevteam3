import { useEffect, useRef } from "react";

function useDoubleRenderLog(componentName: string) {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    if (renderCount.current > 1) {
      console.warn(`${componentName} rendered multiple times in StrictMode!`);
    }
  });
}

export default useDoubleRenderLog;
