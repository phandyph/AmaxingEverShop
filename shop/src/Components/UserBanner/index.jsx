import "./UserBanner.scss";
const UserLayoutBanner = ({ bannerTitle }) => {
  return (
    <div className="bannerContainer">
      {bannerTitle.map((bannerTitle) => {
        return (
          <div key={bannerTitle.id} className="bannerTitle">
            <h1>{bannerTitle.title}</h1>
            <p>{bannerTitle.subTitle}</p>
          </div>
        );
      })}
    </div>
  );
};
export default UserLayoutBanner;
