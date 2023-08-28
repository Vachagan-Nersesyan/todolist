

const UserInfoFuncComp = ({userInfoItems}) => {
    
    let style = {
        color : userInfoItems.status ? 'blue' : 'green'
    }


    return (
        <div style={style}>
            {`User Name is ${userInfoItems.name} ,users age is ${userInfoItems.age}`} 
        </div>
    )
}


export default UserInfoFuncComp