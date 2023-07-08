import VideoRecorder from "./react-media-recorder/VideoRecorder";
import { AudioRecorder } from "./recordrtc/AudioRecorder";
import logo from './video.mp4';

function App() {
  return (
    <div className="App">
     hiiiiiii
     <video src={logo} width={500} controls={true}></video>
     <AudioRecorder/>
<p>recordrtc</p>
<br />
<hr />
{/* <VideoRecorder/> */}
    </div>
  );
}

export default App;


