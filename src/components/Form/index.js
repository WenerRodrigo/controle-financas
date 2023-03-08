import React, { useState } from "react";
import * as C from "./style"

const Form = () => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setIsExpense] = useState("");

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
    }
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <C.label>Descrição</C.label>
          <C.Input value={desc} onChange={(e) => setDesc(e.terget.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.label>Valor</C.label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
      </C.Container>
    </>
  );
};

export default Form;
