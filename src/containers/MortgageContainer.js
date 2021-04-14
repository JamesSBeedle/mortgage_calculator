import MortgageDisplay from '../components/MortgageDisplay'
import UserForm from '../components/UserForm'
import {useState} from 'react'

const MortgageContainer = () => {

    const [userInformation, setUserInformation] = useState()

    const addUserInfo = (submittedInfo) => {
        setUserInformation(submittedInfo);
    }

    return(
        <>
            <h1>Mortgage Container</h1>
            <UserForm onFormSubmit={addUserInfo}/>
            <MortgageDisplay userInfo={userInformation}/>
        </>
    )
}

export default MortgageContainer; 