import { useUser } from "./UserContext"
import '../pages/Dashboard.css'
import cmsImg from '../images/books.jpg'

function DashboardIndex(){
    const {user} = useUser();

    return(
        <div>
            <h1 className="cms-header">Welcome! {user ? user.username : 'Loading'}</h1>
            <img src={cmsImg} width="1300px"/>
        </div>
    )
}

export default DashboardIndex;