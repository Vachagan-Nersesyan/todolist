import HeaderLastUpdateCompFunc from '../ShowDateComp/HeaderDateCompScp'

function HeaderFuncComponent(props){
    return (
        <div>
            My Todo List
            <div>
                <HeaderLastUpdateCompFunc dateText='Last update 21:41' />
            </div>
        </div>
    )
}


export default HeaderFuncComponent