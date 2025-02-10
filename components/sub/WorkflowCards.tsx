import Image from "next/image";
import React from "react";

interface Props {
  src?: string;
  videoSrc?: string;
  title: string;
  description: string;
}

const WorkflowCard = ({ src, videoSrc, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      {videoSrc ? (
        <video
          src={videoSrc}
          className="w-full h-auto"
          controls
          autoPlay
          loop
          muted
        />
      ) : (
        src && (
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain"
          />
        )
      )}

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default WorkflowCard;
