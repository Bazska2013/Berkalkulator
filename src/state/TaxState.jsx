import {createContext, useContext, useEffect, useState} from "react";

const TaxStateContext = createContext();

function TaxStateProvider({children}) {
    const [name, setName] = useState("");
    const [grossSalary, setGrossSalary] = useState(250000);
    const [netSalary, setNetSalary] = useState(0);
    const [SZJA, setSZJA] = useState(0);
    const [frissHazasok, setFrissHazasok] = useState(false);
    const [szemelyi, setSzemelyi] = useState(0);
    const [csaladi, setCsaladi] = useState(false);
    const [dateOfWedding, setDateOfWedding] = useState("");
    const [validMarriage, setValidMarriage] = useState(false);
    const [numOfDependents, setNumOfDependents] = useState(0);
    const [numOfEligibleDependents, setNumOfEligibleDependents] = useState(0);

    const changeGrossSalary = (value) => {
        setGrossSalary(value);
        calculateNetSalary();
    }

    const checkBoxes = (e) => {
        const { name, checked } = e.target;
        switch (name) {
            case "SZJA":
                setSZJA(checked ? 1 : 0);
                break;
            case "frissHazasok":
                setFrissHazasok(!!checked);
                break;
            case "szemelyi":
                setSzemelyi(checked ? 1 : 0);
                break;
            case "csaladi":
                setCsaladi(!!checked);
                break;
            default:
                break;
        }
        calculateNetSalary();
    }

    const calculateNetSalary = () => {
        let TB = grossSalary * 0.185;
        let szja;
        let ado = TB;
        if (grossSalary > 499952 || !SZJA) {
            szja = grossSalary * 0.15;
        } else {
            szja = 0;
        }
        ado += szja;
        // let szemelyiKedvezmeny;
        if (szemelyi) {
            if (ado - 77300 < 0) {
                ado = 0;
            } else {
                ado -= 77300;
            }
        }
        let juttatasok = 0;
        if (validMarriage && frissHazasok) {
            juttatasok += 5000;
        }
        console.log("Num of eligible dependents: ", numOfEligibleDependents)
        if (numOfEligibleDependents === 1) {
            juttatasok += 10000 * numOfDependents;
        } else if (numOfEligibleDependents === 2) {
            juttatasok += 20000 * numOfDependents;
        } else if (numOfEligibleDependents >= 3) {
            juttatasok += 33000 * numOfDependents;
        }
        console.log(juttatasok);
        setNetSalary(grossSalary - ado + juttatasok);
    }

    const changeName = (value) => {
        setName(value);
    }

    const validateMarriage = (value) => {
        setDateOfWedding(value);
        const date = new Date(value);
        const today = new Date();
        const diff = today - date;
        const years = diff / 1000 / 60 / 60 / 24 / 365;
        const months = Math.floor(years * 12);
        if (years < 2 && months >= 1) {
            setValidMarriage(true);
        } else {
            setValidMarriage(false);
        }
    }

    const changeGrossSalaryByPercentage = (percentage) => {
        return () => {
            setGrossSalary(grossSalary * percentage / 100);
        }
    }

    const changeNumOfDependents = (value) => {
        setNumOfDependents(value);
        console.log(value);
    }

    const changeNumOfEligibleDependents = (value) => {
        setNumOfEligibleDependents(value);
        console.log(value)
    }

    useEffect(() => {
        calculateNetSalary();
    }, [grossSalary, SZJA, frissHazasok, szemelyi, csaladi, calculateNetSalary, validMarriage, checkBoxes, numOfDependents]);

    const context = { name, grossSalary, netSalary, SZJA, frissHazasok, szemelyi, csaladi, changeGrossSalary, checkBoxes, changeName, validateMarriage, validMarriage, changeGrossSalaryByPercentage, changeNumOfDependents, numOfDependents, changeNumOfEligibleDependents };
    return <TaxStateContext.Provider value={context}>{children}</TaxStateContext.Provider>
}

export default TaxStateProvider;

export const useTaxState = () => useContext(TaxStateContext);