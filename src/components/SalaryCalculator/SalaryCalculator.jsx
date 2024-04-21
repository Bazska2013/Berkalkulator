import {useEffect, useState} from "react";
import {useTaxState} from "../../state/TaxState.jsx";

const SalaryCalculator = () => {
      const {name, grossSalary, netSalary, frissHazasok, csaladi, changeName, changeGrossSalary, checkBoxes, validateMarriage, validMarriage, changeGrossSalaryByPercentage, changeNumOfDependents, numOfDependents, changeNumOfEligibleDependents} = useTaxState();

  return (
      <>
        ------------------------------------------------------
        Salary Calculator
        <p>Családtag neve</p>
        <input type="text" onChange={(e) => changeName(e.target.value)} value={name}/>
        <p>Bruttó bér</p>
        <input type="number" onChange={(e) => changeGrossSalary(e.target.value)} value={grossSalary} />
        <p>Add meg a bruttó béredet!</p>
            <input type="range" min="1" max="10000" onChange={(e) => changeGrossSalary(e.target.value * 100)}/>
          <button onClick={changeGrossSalaryByPercentage(95)}>-5%</button>
          <button onClick={changeGrossSalaryByPercentage(99)}>-1%</button>
          <button onClick={changeGrossSalaryByPercentage(101)}>+1%</button>
          <button onClick={changeGrossSalaryByPercentage(105)}>+5%</button>
        <h2>Kedvezmények</h2>
        <input type="checkbox" name="SZJA" onChange={checkBoxes}/>
          <label htmlFor="SZJA">25 év alattiak SZJA mentessége</label>
        <input type="checkbox" name="frissHazasok" onChange={checkBoxes}/>
            {frissHazasok ? (
                <>
                      <input type="date" name="dateOfWedding" onChange={(e) => validateMarriage(e.target.value)} />
                      {validMarriage ? <p>Jogosult</p> : <p>Nem jogosult</p>}
                </>
            ) : null}
          <label htmlFor="frissHazasok">Friss házasok kedvezménye</label>
        <input type="checkbox" name="szemelyi" onChange={checkBoxes}/>
          <label htmlFor="szemelyi">Személyi adókedvezmény</label>
        <input type="checkbox" name="csaladi" onChange={checkBoxes}/>
            {csaladi ? (
                <>
                    <input type="number" min="1" onChange={(e) => changeNumOfDependents(e.target.value)}/>
                    Eltartott, ebből kedvezményezett
                    <input type="number" min="0" max={numOfDependents} onChange={(e) => changeNumOfEligibleDependents(e.target.value)} />
                </>
            ) : null}
          <label htmlFor="csaladi">Családi kedvezmény</label>
        <h1>Számított nettó bér:</h1>
        <p>{netSalary}</p>
        ------------------------------------------------------
      </>
  );
};

export default SalaryCalculator;
