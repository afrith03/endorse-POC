import React, { useState } from "react";
import { useCapture } from "react-media-recorder";

const VideoRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);

  const { status, startRecording, stopRecording, mediaBlobUrl } = useCapture({
    video: true,
    onStop: (blobUrl) => {
      // Access the recorded video blob here
      console.log("Recorded blob:", blobUrl);
    },
  });

  const handleStartRecording = () => {
    startRecording();
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    stopRecording();
    setIsRecording(false);
  };

  return (
    <div>
      <video src={mediaBlobUrl} autoPlay muted />
      {!isRecording ? (
        <button onClick={handleStartRecording}>Start Recording</button>
      ) : (
        <button onClick={handleStopRecording}>Stop Recording</button>
      )}
      <div>{status}</div>
    </div>
  );
};

export default VideoRecorder;
