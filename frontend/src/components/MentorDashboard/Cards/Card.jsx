
import React from "react";
import "./Cards.css";

export default function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

