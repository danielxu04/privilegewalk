import { EmailShareButton, FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton, 
    WhatsappShareButton, EmailIcon, FacebookIcon, LinkedinIcon, RedditIcon, TwitterIcon, WhatsappIcon } from "react-share";

function Shareable() {

    const shareUrl = "https://privilegewalk-ri8grjz37-danielxu04.vercel.app/";
    const shareText = "Hi! I just took Discourse Agency's virtual Privilege Walk! You should take it too!";
    const shareTitle = "Discourse Agency Privilege Walk";

    return (
        <div className="block p-4 bg-white mx-auto">
            <span className="icon">
                <FacebookShareButton 
                    url={shareUrl}
                    quote={shareText}
                >
                    <FacebookIcon />
                </FacebookShareButton>
            </span>
            
            <span className="icon">
                <EmailShareButton 
                    subject={shareTitle}
                    body={shareText}
                    url={shareUrl}
                    separator={"\n\n"}
                >
                    <EmailIcon />
                </EmailShareButton>
            </span>

            <span className="icon">
                <LinkedinShareButton 
                    url={shareUrl}
                    title={shareText}
                >
                    <LinkedinIcon />
                </LinkedinShareButton>
            </span>

            <span className="icon">
                <RedditShareButton
                    url={shareUrl}
                    title={shareText}
                >
                    <RedditIcon />
                </RedditShareButton>
            </span>

            <span className="icon">
                <TwitterShareButton
                    url={shareUrl}
                    title={shareText}
                >
                    <TwitterIcon />
                </TwitterShareButton>
            </span>

            <span className="icon">
                <WhatsappShareButton
                    url={shareUrl}
                    title={shareText}
                    separator={"\n\n"}
                >
                    <WhatsappIcon />
                </WhatsappShareButton>
            </span>
        </div>
    );
}

export default Shareable;