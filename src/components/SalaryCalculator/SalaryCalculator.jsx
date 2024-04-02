import {useEffect, useState} from "react";
import {useTaxState} from "../../state/TaxState.jsx";

const SalaryCalculator = () => {
      const {name, grossSalary, netSalary, frissHazasok, csaladi, changeName, changeGrossSalary, checkBoxes, validateMarriage, validMarriage} = useTaxState();

  return (
      <>
        ------------------------------------------------------
        Salary Calculator
        <p>Családtag neve</p>
        <input type="text" onChange={(e) => changeName(e.target.value)} />
        <p>Bruttó bér</p>
        <input type="number" onChange={(e) => changeGrossSalary(e.target.value)} value={grossSalary} />
        <p>Add meg a bruttó béredet!</p>
            <input type="range" min="1" max="10000" onChange={(e) => changeGrossSalary(e.target.value * 100)}/>
        <h2>Kedvezmények</h2>
        <input type="checkbox" name="SZJA" onChange={checkBoxes}/>
        <input type="checkbox" name="frissHazasok" onChange={checkBoxes}/>
            {frissHazasok ? (
                <>
                      <input type="date" name="dateOfWedding" onChange={(e) => validateMarriage(e.target.value)} />
                      {validMarriage ? <p>Jogosult</p> : <p>Nem jogosult</p>}
                </>
            ) : null}
        <input type="checkbox" name="szemelyi" onChange={checkBoxes}/>
        <input type="checkbox" name="csaladi" onChange={checkBoxes}/>
            {csaladi ? (
                <>
                      <input type="number" min="1"/>Eltartott, ebből kedvezményezett<input type="number" min="0" />
                </>
            ) : null}
        <h1>Számított nettó bér:</h1>
        <p>{netSalary}</p>
        ------------------------------------------------------
      </>
  );
};

export default SalaryCalculator;
