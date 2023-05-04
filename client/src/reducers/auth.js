const authReducer = ( state={data : null } , actions) =>{

    switch (actions.type) {
        case 'AUTH':
            localStorage.setItem('Profile' , JSON.stringify( ...actions?.data))  // here ? is used bcoz if the data is availablethe it ll be selected and if ? is not there an error will be thrown ....
            return { ...state , data : actions?.data} 
            
        default:
            return state;
    }
}

export default authReducer