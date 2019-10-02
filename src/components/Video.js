import React from 'react';
import ReactPlayer from 'react-player';
import StyleVideoWrapper from './styles/StyledVideoWrapper';
import StyledVideo from './styles/StyledVideo';

const Video = ({ active, autoplay, endCallback, progressCallback }) =>{
    return(
        <StyledVideo>
            <StyleVideoWrapper>
                <ReactPlayer 
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0"}}
                playing={autoplay}
                constrols={true}
                url={active.video}
                onEnded={endCallback}
                onProgress={progressCallback}
                />
            </StyleVideoWrapper>
        </StyledVideo>
    )
}

export default Video;