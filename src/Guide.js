import './MainStyles.css';
import YoutubeEmbed from "./YoutubeEmbed";
const Guide = () => {
    return ( 
        <div className="guideMain mainDiv">
            <div className='courseDiv'>
                <h1 className='titleGuide'>How To Wrap Hands for MMA</h1>
                <div className='videoDiv'>
                    <YoutubeEmbed embedId="GAb6xvfUYUs" />
                </div>
                <div className='section'>
                    <h1 className='titleGuide'>How To Wrap Hands for Boxing</h1>
                    <div className='videoDiv'>
                        <YoutubeEmbed embedId="zTK6rSpXjDM" />
                    </div>
                </div>
                <div className='section'>
                    <h1 className='titleGuide'>How To Wrap Hands for Bare Knuckle Boxing</h1>
                    <div className='videoDiv'>
                        <YoutubeEmbed embedId="3rlQ2G6fME8" />
                    </div>
                </div>
                <div className='section'>
                    <h1 className='titleGuide'>How to Cool A Fighter Between Rounds</h1>
                    <div className='videoDiv'>
                        <YoutubeEmbed embedId="WNcdV3ULcpo" />
                    </div>
                </div>
                <div className='section'>
                    <h1 className='titleGuide'>How to Cut Handwraps</h1>
                    <div className='videoDiv'>
                        <YoutubeEmbed embedId="SY0dKjqahHI" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guide;