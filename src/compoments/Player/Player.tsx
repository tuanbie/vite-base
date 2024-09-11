// CustomVideoPlayer.tsx
import React, { useRef, useEffect, useState } from "react";

interface CustomVideoPlayerProps {
  src: string; // Đường dẫn tới video
  autoPlay?: boolean; // Trạng thái phát video tự động
  muted?: boolean; // Trạng thái âm lượng
}

const CustomVideoPlayer: React.FC<CustomVideoPlayerProps> = ({ src, autoPlay = true, muted = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);

  // Hàm để phát hoặc dừng video
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Hàm để bật hoặc tắt âm lượng
  const handleVolume = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Đảm bảo video tự động phát và phát lại
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.autoplay = autoPlay;
      video.loop = true;
      video.muted = muted;
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [autoPlay, muted]);

  return (
    <div className="relative">
      <video ref={videoRef} width="100%" height="auto" src={src} controls={false}>
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between m-8">
        <button onClick={handlePlayPause} className="text-white p-2 rounded">
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
            </svg>
          ) : (
            <svg width={24} height={24} viewBox="0 0 0.72 0.72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M.15.63V.09l.42.27z"
                stroke="#000"
                strokeWidth={0.06}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        <button onClick={handleVolume} className="text-white p-2 rounded">
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 1.92 1.92" xmlSpace="preserve">
              <path
                d="M.12.96V.6h.36l.54-.54v1.8l-.54-.54H.12ZM1.26.69l.54.54m-.54 0L1.8.69"
                fill="none"
                stroke="#000"
                strokeWidth={0.06}
                strokeMiterlimit={10}
              />
            </svg>
          ) : (
            <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M11.553 3.064A.75.75 0 0 1 12 3.75v16.5a.75.75 0 0 1-1.255.555L5.46 16H2.75A1.75 1.75 0 0 1 1 14.25v-4.5C1 8.784 1.784 8 2.75 8h2.71l5.285-4.805a.75.75 0 0 1 .808-.13zM10.5 5.445l-4.245 3.86a.75.75 0 0 1-.505.195h-3a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h3a.75.75 0 0 1 .505.195l4.245 3.86z"
              />
              <path d="M18.718 4.222a.75.75 0 0 1 1.06 0c4.296 4.296 4.296 11.26 0 15.556a.75.75 0 0 1-1.06-1.06 9.5 9.5 0 0 0 0-13.436.75.75 0 0 1 0-1.06" />
              <path d="M16.243 7.757a.75.75 0 1 0-1.061 1.061 4.5 4.5 0 0 1 0 6.364.75.75 0 0 0 1.06 1.06 6 6 0 0 0 0-8.485z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
