import EmptyState from "../EmptyState";
import Repositories from "../Repositories";
import UserProfile from "../UserProfile";
import userNotFoundIcon from "../../assets/icons/userNotFound.png";
import Loader from "../Loader";

import * as userResource from '../../resources/user/hooks';

import "./styles.css";

const UserInfo = ({ username }) => { 
    const { isLoading, data: profileInfo } = userResource.useUser(username);

    if (isLoading) {
        return <Loader/>;
    }  

    if (profileInfo.notFound) {
        return <EmptyState iconSrc={userNotFoundIcon} message={'User not found'} />;
    }

    return (
        <div className="main-area">
            <UserProfile profileInfo={profileInfo.user}/>
            <Repositories username={username} publicRepos={profileInfo.user.public_repos} profileInfo={profileInfo.user}/>
       </div>
    );
}


export default UserInfo;