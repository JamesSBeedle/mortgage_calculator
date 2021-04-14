import MortgageDisplay from '../components/MortgageDisplay'
import UserForm from '../components/UserForm'
import {useState} from 'react'

const MortgageContainer = () => {

    const [userInformation, setUserInformation] = useState(null)

    const addUserInfo = (submittedInfo) => {
        const updatedInformation = [submittedInfo];
        setUserInformation(updatedInformation);
    }

    return(
        <>
            <h1>Mortgage Container</h1>
            <UserForm onFormSubmit={(submittedInfo) => addUserInfo(submittedInfo)}/>
            <MortgageDisplay/>
        </>
    )
}

export default MortgageContainer; 