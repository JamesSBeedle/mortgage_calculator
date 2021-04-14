import {useState} from 'react'
import './Form.css'

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
        <div id="form-container">
            <section class="form-title">
                <h2> Submission Form</h2>
            </section>

            <section >
                <form onSubmit={handleFormSubmit} class="inner-form-container">
                    <section >
                        <label for="name" class="input-label">Name: </label>
                    </section>  
                    <section>   
                        <input 
                            type="text" 
                            placeholder="Mark Burns" 
                            id="name" 
                            value={name} 
                            onChange={handleNameChange}
                            required
                            class="input-box"
                        />
                    </section>
                    <br/>
                    <section>
                        <label for="salary" class="input-label">Salary: </label>
                    </section>
                    <section>
                        <input 
                            type="number" 
                            placeholder="0" 
                            id="salary" 
                            value={salary} 
                            onChange={handleSalaryChange}
                            required
                            class="input-box"
                        />
                    </section>
                    <br/>
                    <section>
                        <label for="secondSalary" class="input-label">Second Salary: </label>
                    </section>
                    <section>
                        <input 
                            type="number" 
                            placeholder="0" 
                            id="secondSalary" 
                            value={secondSalary} 
                            onChange={handleSecondSalaryChange}
                            class="input-box"
                        />
                    </section>
                    <br/>
                    <section>
                        <label for="deposit" class="input-label">Deposit: </label>
                    </section>
                    <section>
                        <input 
                            type="number" 
                            placeholder="0" 
                            id="deposit" 
                            value={deposit} 
                            onChange={handleDepositChange}
                            class="input-box"
                        />
                    </section>
                    <br/>
                    <section>
                        <label for="outgoings" class="input-label">Outgoings: </label>
                    </section>
                    <section>
                        <input 
                            type="number" 
                            placeholder="0" 
                            id="outgoings" 
                            value={outgoings} 
                            onChange={handleOutgoingsChange}
                            class="input-box"
                        />
                    </section>
                    <br/>
                    <section>
                        <input
                            type="submit"
                            value="Submit Salary Information"
                            class="button"
                        />
                    </section>
                </form>
            </section>

        </div>
    )
}

export default UserForm;