import { createRef, useEffect } from "react";

interface CircularProgressProps {
  value: number;
}

export const CircularProgress = ({value}: CircularProgressProps) => {

  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    if(!ref.current) return;

    ref.current.style.setProperty("--progress", value + "%");
    ref.current.setAttribute("data-value", value.toString());

  }, [value])

  return (
    <div ref={ref} className="progress" data-value={value}></div>
  )
}
