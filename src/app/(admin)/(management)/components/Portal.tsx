"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const elRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = document.createElement("div");
    elRef.current = el;
    document.body.appendChild(el);

    return () => {
      if (elRef.current) {
        document.body.removeChild(elRef.current);
      }
    };
  }, []);

  if (!elRef.current) {
    return null; // Return null to avoid rendering the Portal component
  }

  return createPortal(children, elRef.current);
};

export default Portal;
