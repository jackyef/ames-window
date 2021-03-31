interface Props {
  videoId: string;
  startTime?: number;
}

export const YouTubeEmbed = ({ videoId, startTime = 0 }: Props) => {
  return (
    <div>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?start=${startTime}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <style jsx>{`
        div {
          height: 240px;
        }

        @media (min-width: 540px) {
          div {
            height: 320px;
          }
        }

        @media (min-width: 720px) {
          div {
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
};
