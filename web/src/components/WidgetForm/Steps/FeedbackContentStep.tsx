import { ArrowArcLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;

}

export function FeedbackContentStep ({feedbackType,
    onFeedbackRestartRequested, onFeedbackSent}: FeedbackContentStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [coment, setComent] =useState('')
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();
        console.log({screenshot, coment})
        
        onFeedbackSent();
    }

    return(
        <>
            <header>

            <button type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
            onClick={onFeedbackRestartRequested}
            >
                <ArrowArcLeft weight="bold" className="w-4 h-4"/>
            </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton/>
            </header>

                <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
                    
                <textarea
                className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-[#053BA6] focus:ring-[#053BA6] focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" 
                placeholder="Conte o que está acontecendo..."

                onChange={event => setComent(event.target.value)}
                />

                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                    screenshot = {screenshot}
                    onScreenshotTook={setScreenshot}
                    />

                    <button 
                    type="submit" 
                    disabled={coment.length=== 0}
                    className="p-2 bg-[#053BA6] rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-[#085A8C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-[#053BA6] transition-colors disabled:opacity-50 disabled:hover:bg-[#053BA6]">
                        Enviar Feedback
                    </button>
                </footer>
                </form>
        </>
    )
}