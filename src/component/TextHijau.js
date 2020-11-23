import React from "react";

export default function TextHijau(props) {
  if (props.color === "merah") {
    return <h3 className="text-merah">{props.name}</h3>;
  }
  return <h3 className="text-hijau">{props.name}</h3>;
}
