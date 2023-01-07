const Answer = ({onAnswerText}) => {
    return (
        <div className="flex flex-row w-full justify-center mt-5">
            <div 
                className="flex pr-2 w-[10vw] bg-white text-center hover:cursor-pointer hover:scale-110"
                onClick={() => onAnswerText("yes")}
            >
                Yes
            </div>
            <div 
                className="pl-2 flex w-[10vw] bg-white text-center hover:cursor-pointer hover:scale-110"
                onClick={() => onAnswerText("no")}
            >
                No
            </div>
        </div>
    );
}

export default Answer;