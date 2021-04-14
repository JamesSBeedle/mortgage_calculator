const MortgageDisplay= ({userInfo}) => {

    if (!userInfo) {
        return null
    }

    const mortgage = ((parseInt(userInfo.salary) + parseInt(userInfo.secondSalary) + parseInt(userInfo.deposit) - parseInt(userInfo.outgoings)) * 3)
    
    return(
        <>
        <h1>MortgageDisplay</h1>
        <h1>User Name: </h1>
        <h3>{userInfo.name}</h3>
        <h1>Salary:  </h1>
        <h3>£{userInfo.salary}</h3>
        <h1>Second Salary:  </h1>
        <h3>£{userInfo.secondSalary}</h3>
        <h1>Deposit: </h1>
        <h3>£{userInfo.deposit}</h3>
        <h1>Outgoings: </h1>
        <h3>£{userInfo.outgoings}</h3>
        <h1>The Maximum Mortgage Available is: </h1>
        <h3>£{mortgage}</h3>
        </>
    )

}

export default MortgageDisplay;