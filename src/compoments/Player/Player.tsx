// CustomVideoPlayer.tsx
import React, { useRef, useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { ImVolumeMute2 } from "react-icons/im";
import { HiMiniSpeakerWave } from "react-icons/hi2";

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
      <video
        ref={videoRef}
        width="100%"
        className="w-screen pointer-events-none"
        height="auto"
        src={src}
        controls={false}
      ></video>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between m-8">
        <button onClick={handlePlayPause} className="text-white p-2 rounded">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={handleVolume} className="text-white p-2 rounded">
          {isMuted ? <ImVolumeMute2 /> : <HiMiniSpeakerWave />}
        </button>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
