import {useState} from 'react'

const UserForm = ({onFormSubmit}) => {

    const [name, setName] = useState("")
    const [salary, setSalary] = useState("")
    const [secondSalary, setSecondSalary] = useState("")
    const [deposit, setDeposit] = useState("")
    const [outgoings, setOutgoings] = useState("")
   

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }

    const handleSalaryChange = (evt) => {
        setSalary(evt.target.value);
    }

    const handleSecondSalaryChange = (evt) => {
        setSecondSalary(evt.target.value);
    }

    const handleDepositChange = (evt) => {
        setDeposit(evt.target.value);
    }

    const handleOutgoingsChange = (evt) => {
        setOutgoings(evt.target.value);
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const nameToSubmit = name.trim();
        const salaryToSubmit = salary;
        const secondSalaryToSubmit = secondSalary;
        const depositToSubmit = deposit;
        const outgoingsToSubmit = outgoings;
        
         
        if (!nameToSubmit || !salaryToSubmit) {
            return
        }

        onFormSubmit({
            name: nameToSubmit,
            salary: salaryToSubmit,
            secondSalary: secondSalaryToSubmit,
            deposit: depositToSubmit,
            outgoings: outgoingsToSubmit
        });

        setName("");
        setSalary("");
        setSecondSalary("");
        setDeposit("");
        setOutgoings("");
    } 

    return(
        <>
        <h2> Form</h2>
        <form onSubmit={handleFormSubmit}>
            <label for="name">Name: </label>
            <input 
                type="text" 
                placeholder="Mark Burns" 
                id="name" 
                value={name} 
                onChange={handleNameChange}
                required
            />
            
            <label for="salary">Salary: </label>
            <input 
                type="number" 
                placeholder="0" 
                id="salary" 
                value={salary} 
                onChange={handleSalaryChange}
                required
            />

            <label for="secondSalary">Second Salary: </label>
            <input 
                type="number" 
                placeholder="0" 
                id="secondSalary" 
                value={secondSalary} 
                onChange={handleSecondSalaryChange}
            />


            <label for="deposit">Deposit: </label>
            <input 
                type="number" 
                placeholder="0" 
                id="deposit" 
                value={deposit} 
                onChange={handleDepositChange}
            />

            <label for="outgoings">Outgoings: </label>
            <input 
                type="number" 
                placeholder="0" 
                id="outgoings" 
                value={outgoings} 
                onChange={handleOutgoingsChange}
            />

            <input
                type="submit"
                value="Submit Salary Information"
            />
        </form>

        </>
    )
}

export default UserForm;