import styled from "@emotion/styled";
import { media } from "../../ui";

export const VideoPlayer = () => {
  return (
    <VideoContainerStyle>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/cxsM6BHICyI?si=3yK2VZEqZYGq_FTL"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </VideoContainerStyle>
  );
};

const VideoContainerStyle = styled.div`
  max-width: 800px;
  width: 100%;
  height: 400px;
  margin: 0 auto;

  ${media.LAPTOP} {
    padding: 26px;
  }
`;
