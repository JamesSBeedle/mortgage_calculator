const MortgageDisplay= ({userInfo}) => {

    if (!userInfo) {
        return null
    }

    const mortgage = (parseInt(userInfo.salary) + parseInt(userInfo.secondSalary)) * 3
    
    return(
        <>
        <h1>MortgageDisplay</h1>
        <h1>User Name: {userInfo.name}</h1>
        <h1>Salary: {userInfo.salary} </h1>
        <h1>Second Salary: {userInfo.secondSalary} </h1>
        <h1>The Maximum Mortgage Available is: {mortgage}</h1>
        </>
    )

}

export default MortgageDisplay;