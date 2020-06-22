import React from "react";
import { useState } from "react";
import { Container, Input, Button } from "semantic-ui-react";

const EdgeDeleteControl = (props) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  return (
    <Container>
      <Input
        value={from}
        placeholder="from"
        onChange={(e) => setFrom(e.target.value)}
      ></Input>
      <Input
        value={to}
        placeholder="to"
        onChange={(e) => setTo(e.target.value)}
      ></Input>
      <Button
        disabled={!from || !to}
        color="red"
        onClick={() => {
          try {
            props.onDelete(from, to);
          } catch (e) {
            alert(e.message);
          }
        }}
      >
        Delete
      </Button>
    </Container>
  );
};

export default EdgeDeleteControl;
