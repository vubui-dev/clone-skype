import videoOne from "assets/one.mp4";
import videoTwo from "assets/two.mp4";
import { useConversationContext } from "contexts/useConversationContext";
import React, { useEffect, useRef, useState } from "react";
import {
  MdClose,
  MdMic,
  MdMicOff,
  MdVideocam,
  MdVideocamOff,
  MdVolumeOff,
  MdVolumeUp,
} from "react-icons/md";
import "./ModalCallingConversation.css";

export const ModalCallingConversation = () => {
  const videoRef = useRef();
  const {
    recentCallConversation,
    finishCallConversation,
    toggleCam,
    toggleMic,
    recentConversation,
  } = useConversationContext();
  const { cam, mic, volume, method } = recentCallConversation;

  const [mediaStream, setMediaStream] = useState(null);

  useEffect(() => {
    async function enableStream() {
      try {
        if (navigator.mediaDevices === undefined) {
          navigator.mediaDevices = {};
        }

        if (navigator.mediaDevices.getUserMedia === undefined) {
          navigator.mediaDevices.getUserMedia = function (constraints) {
            var getUserMedia =
              navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

            if (!getUserMedia) {
              return Promise.reject(
                new Error("getUserMedia is not implemented in this browser")
              );
            }
            return new Promise(function (resolve, reject) {
              getUserMedia.call(navigator, constraints, resolve, reject);
            });
          };
        }

        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: { facingMode: "environment", width: 1280, height: 768 },
        });

        setMediaStream(stream);
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.log(err);
      }
    }

    if (!mediaStream) {
      enableStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      };
    }
  }, [mediaStream]);

  return (
    // <div className="calling-modal">
    //   {method === "video-call" ? (
    //     <video
    //       className="video-calling-other"
    //       autoplay="autoplay"
    //       muted="muted"
    //       loop="loop"
    //     >
    //       <source src={videoOne} type="video/mp4" />
    //     </video>
    //   ) : (
    //     <div
    //       className="video-calling-other d-flex flex-column align-items-center justify-content-center"
    //       style={{ background: "#fff" }}
    //     >
    //       <img
    //         className="rounded-circle img-fluid border"
    //         src={recentConversation.otherContact.urlAvatar}
    //         alt=""
    //         width="100px"
    //         height="100px"
    //       />
    //       <p className="mt-3 text-primary">
    //         Voice chat with{" "}
    //         <strong>{recentConversation.otherContact.name}</strong>
    //       </p>
    //       <p>00:00</p>
    //     </div>
    //   )}

    //   {cam && (
    //     <video
    //       className="video-calling-yours"
    //       autoplay="autoplay"
    //       muted="muted"
    //       loop="loop"
    //     >
    //       <source src={videoTwo} type="video/mp4" />
    //     </video>
    //   )}

    //   <div className="calling-control">
    //     <div
    //       className="calling-ctrl-btn bg-danger"
    //       onClick={finishCallConversation}
    //     >
    //       <MdClose />
    //     </div>
    //     <div
    //       className={`calling-ctrl-btn ${cam ? "bg-primary" : "bg-secondary"}`}
    //       onClick={toggleCam}
    //     >
    //       {cam ? <MdVideocam /> : <MdVideocamOff />}
    //     </div>
    //     <div
    //       className={`calling-ctrl-btn ${mic ? "bg-primary" : "bg-secondary"}`}
    //       onClick={toggleMic}
    //     >
    //       {mic ? <MdMic /> : <MdMicOff />}
    //     </div>
    //     <div
    //       className={`calling-ctrl-btn ${
    //         volume ? "bg-primary" : "bg-secondary"
    //       }`}
    //     >
    //       {volume ? <MdVolumeUp /> : <MdVolumeOff />}
    //     </div>
    //   </div>
    // </div>

    <div className="calling-modal">
      {method === "video-call"
        ? mediaStream && (
            <video
              ref={videoRef}
              id="video-chat"
              autoPlay
              playsInline
              style={{ width: "100%", height: "100%" }}
            ></video>
          )
        : null}
    </div>
  );
};
