import MobilePlayerTrack from "./MobilePlayerTrack";

function MobileWindow() {
    return (
        <div className="flex lg:hidden h-[65vh] px-6 my-8">
            <MobilePlayerTrack />
            <MobilePlayerTrack />
            <MobilePlayerTrack />
            <MobilePlayerTrack />
            <MobilePlayerTrack />
        </div>
    );
}

export default MobileWindow;
