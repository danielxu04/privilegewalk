import { EmailShareButton, FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton, 
    WhatsappShareButton, EmailIcon, FacebookIcon, LinkedinIcon, RedditIcon, TwitterIcon, WhatsappIcon } from "react-share";

function Shareable() {

    const shareUrl = "https://privilegewalk-ri8grjz37-danielxu04.vercel.app/";
    const shareText = "Hi! I just took Discourse Agency's virtual Privilege Walk! You should take it too!";
    const shareTitle = "Discourse Agency Privilege Walk";

    return (
        <div className="block p-4 bg-transparent mx-auto">
            <span className="icon">
                <FacebookShareButton 
                    url={shareUrl}
                    quote={shareText}
                >
                    <FacebookIcon borderRadius={15}/>
                </FacebookShareButton>
            </span>
            
            <span className="icon">
                <EmailShareButton 
                    subject={shareTitle}
                    body={shareText}
                    url={shareUrl}
                    separator={"\n\n"}
                >
                    <EmailIcon borderRadius={15}/>
                </EmailShareButton>
            </span>

            <span className="icon">
                <LinkedinShareButton 
                    url={shareUrl}
                    title={shareText}
                >
                    <LinkedinIcon borderRadius={15}/>
                </LinkedinShareButton>
            </span>

            <span className="icon">
                <RedditShareButton
                    url={shareUrl}
                    title={shareText}
                >
                    <RedditIcon borderRadius={15}/>
                </RedditShareButton>
            </span>

            <span className="icon">
                <TwitterShareButton
                    url={shareUrl}
                    title={shareText}
                >
                    <TwitterIcon borderRadius={15}/>
                </TwitterShareButton>
            </span>

            <span className="icon">
                <WhatsappShareButton
                    url={shareUrl}
                    title={shareText}
                    separator={"\n\n"}
                >
                    <WhatsappIcon borderRadius={15}/>
                </WhatsappShareButton>
            </span>
        </div>
    );
}

export default Shareable;