import "./PreviewVideo.scss";
import Profile from "../../Image/Profile.png";
import Comments from "../../Image/comments.png";
import Heart from "../../Image/heart-like.png";
import Share from "../../Image/share.png";
import { Link } from "react-router-dom";

const PreviewVideo = ({ setStepCount }) => {
  return (
    <div>
      <div
        className="videotag"
        dangerouslySetInnerHTML={{
          __html: `
        <video
          loop
          muted
          autoplay
          playsinline
          src="https://gamewall-pwa.sharechat.com/self-serve/video/mask.mp4"
        />,
      `,
        }}
      ></div>
      <div className="sideIcons" onClick={() => console.log("pack")}>
        <SideImages setStepCount={setStepCount} />
      </div>
      <div className="bottom-text">
        <div className="text-white opacity-[0.6] font-semibold">
          @aayushah711
        </div>
      </div>
      <div className="flex top-text">
        <Link to="/feed">
        Followings
          {/* <div className="following">Following</div> */}
        </Link>
        <div className="ml-4">For you</div>
      </div>
    </div>
  );
};

export default PreviewVideo;

const SideImages = ({ setStepCount }) => {
  return (
    <div className="flex flex-col items-center mr-2">
      <div>
        <img src={Profile} />
      </div>
      <div className="mt-6">
        <img src={Comments} />
      </div>
      <div className="mt-6">
        <img src={Heart} />
      </div>
      <div className="mt-6">
        <img src={Share} />
      </div>
      <div
        className="mt-6 opacity-[0.6] text-black bg-[white] rounded-[50%] p-1"
        onClick={setStepCount}
      >
        Buy
      </div>
    </div>
  );
};
