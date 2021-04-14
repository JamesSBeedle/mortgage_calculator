import {useState} from 'react'

const UserForm = ({onFormSubmit}) => {

    const [name, setName] = useState("")
    const [salary, setSalary] = useState(0)
    const [secondSalary, setSecondSalary] = useState(0)
   

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }

    const handleSalaryChange = (evt) => {
        setSalary(evt.target.value);
    }

    const handleSecondSalaryChange = (evt) => {
        setSecondSalary(evt.target.value);
    }

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const nameToSubmit = name.trim();
        const salaryToSubmit = salary;
        const secondSalaryToSubmit = secondSalary;
        
         
        if (!nameToSubmit || !salaryToSubmit) {
            return
        }

        onFormSubmit({
            name: nameToSubmit,
            salary: salaryToSubmit,
            secondSalary: secondSalaryToSubmit
        });

        setName("");
        setSalary(0);
        setSecondSalary(0);
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

            <input
                type="submit"
                value="Submit Salary Information"
            />
        </form>

        </>
    )
}

export default UserForm;