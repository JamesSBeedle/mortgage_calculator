import MortgageDisplay from '../components/MortgageDisplay'
import UserForm from '../components/UserForm'
import {useState} from 'react'
import './MortgageContainer.css'

const MortgageContainer = () => {

    const [userInformation, setUserInformation] = useState()

    const addUserInfo = (submittedInfo) => {
        setUserInformation(submittedInfo);
    }

    return(
        <main id="main-container">
            <section class="container-box">
                <h1 class="header">Burndle Mortages: Mortgage Calculator</h1>
            </section>

            <section class="inner-container">
                <section class="container-box">
                    <UserForm onFormSubmit={addUserInfo}/>
                </section>

                <section class="container-box">
                    <MortgageDisplay userInfo={userInformation}/>
                </section>
            </section>
        </main>
    )
}

export default MortgageContainer; 