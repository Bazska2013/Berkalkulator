import {useEffect, useState} from "react";

const SalaryCalculator = () => {
      const [name, setName] = useState("");
      const [grossSalary, setGrossSalary] = useState(250000);
      const [netSalary, setNetSalary] = useState(0);
      const [SZJA, setSZJA] = useState(0);
      const [frissHazasok, setFrissHazasok] = useState(0);
      const [szemelyi, setSzemelyi] = useState(0);
      const [csaladi, setCsaladi] = useState(0);

      function changeGrossSalary(value) {
            setGrossSalary(value);
            calculateNetSalary();
      }

      function checkBoxes(e) {
            const { name, checked } = e.target;
            switch (name) {
                  case "SZJA":
                        setSZJA(checked ? 1 : 0);
                        break;
                  case "frissHazasok":
                        setFrissHazasok(checked ? 1 : 0);
                        break;
                  case "szemelyi":
                        setSzemelyi(checked ? 1 : 0);
                        break;
                  case "csaladi":
                        setCsaladi(checked ? 1 : 0);
                        break;
                  default:
                        break;
            }
            calculateNetSalary();
      }

      function calculateNetSalary() {
            let TB = grossSalary * 0.185;
            let szja;
            let ado = TB;
            if (grossSalary > 499952 || !SZJA) {
                  szja = grossSalary * 0.15;
            } else {
                  szja = 0;
            }
            ado += szja;
            let szemelyiKedvezmeny;
            if (szemelyi) {
                  if (ado - 77300 < 0) {
                        ado = 0;
                  } else {
                        ado -= 77300;
                  }
            }
            setNetSalary(grossSalary - ado);
      }

      useEffect(() => {
            calculateNetSalary();
      }, [grossSalary, SZJA, frissHazasok, szemelyi, csaladi, calculateNetSalary]);

  return (
      <>
        ------------------------------------------------------
        Salary Calculator
        <p>Családtag neve</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <p>Bruttó bér</p>
        <input type="number" onChange={(e) => changeGrossSalary(e.target.value)} value={grossSalary} />
        <p>Add meg a bruttó béredet!</p>
            <input type="range" min="1" max="10000" onChange={(e) => changeGrossSalary(e.target.value * 100)}/>
        <h2>Kedvezmények</h2>
        <input type="checkbox" name="SZJA" onChange={checkBoxes}/>
        <input type="checkbox" name="frissHazasok" onChange={checkBoxes}/>
        <input type="checkbox" name="szemelyi" onChange={checkBoxes}/>
        <input type="checkbox" name="csaladi" onChange={checkBoxes}/>
        <h1>Számított nettó bér:</h1>
        <p>{netSalary}</p>
        ------------------------------------------------------
      </>
  );
};

export default SalaryCalculator;
