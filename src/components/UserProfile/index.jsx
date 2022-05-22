import followersIcon from "../../assets/icons/followers.png"
import followingIcon from "../../assets/icons/following.png"

import "./styles.css"

const UserProfile = ({ profileInfo }) => {
    if (!profileInfo) {
        return null;
    }

    const { html_url, name, login, followers, following, avatar_url } = profileInfo;
    
    function checkFollow (follow){
        if (follow < 1000) {
            return follow;
        }
        
        if (follow < 1000000) {
            return `${(follow / 1000).toFixed(1).toString()}k` ;
        }   
        return `${(follow / 1000000).toFixed(1).toString()}m` ;
    }
    
    return (
       <div className="user-block">
            <div className="user-image">
                <img className="user-photo" src={avatar_url} alt="profile-img"/>
            </div>
            <div className="user-name">
                <p className="p-name">{name}</p>
            </div>
            <div className="user-nickname">
                <a className="a-nickname" href={html_url} target="_blank" rel="noreferrer">{login}</a>
            </div>
            <div className="subscriptions">
                <img id="follow-img" src={followersIcon} alt="followers-icon"/>
                <p id="follow-text">{checkFollow(followers)} followers</p>
                <img id="follow-img" src={followingIcon} alt="following-icon"/>
                <p id="follow-text">{checkFollow(following)} following</p>
           </div>
        </div>
    );
}

export default UserProfile;