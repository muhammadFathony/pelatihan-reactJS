import React from "react";
import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function Makanan(props) {
  var [count, setCount] = useState(0);

  function minus() {
    setCount(count - 1);
  }

  function tambah() {
    setCount(count + 1);
  }

  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <h3>
            {props.name} - Rp. {props.price}
          </h3>
          <button onClick={minus}>-</button>
          {count}
          <button onClick={tambah}>+</button>
        </CardContent>
      </Card>
    </div>
  );
}
