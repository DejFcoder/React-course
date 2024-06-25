/* function ProfilePic() {
    const imageUrl = "./src/assets/profile.jpg";
    const handleClick = (e) => e.target.style.display = "none";

    return<img onClick={(e) => handleClick(e)} src={imageUrl}></img>
}

export default ProfilePic; */

function HideImg() {
    const imgUrl = "src/assets/profile.jpg";
    const handleClick = (e) => {e.target.style.display = "none"};

    return <img src={imgUrl} onClick={handleClick} />
}

export default HideImg;