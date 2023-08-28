import UserInfoFuncComp from './UserInfoComp.js/UserInfoCompScp'

const UserFuncComponent = (props) => {
    
    
    let user = props.usersComp.map((val) => {
        return <UserInfoFuncComp userInfoItems={val} />
    })


    return(

        <div>   
            {user}
        </div>
    )
}


export default UserFuncComponent