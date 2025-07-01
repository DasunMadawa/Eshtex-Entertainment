import React from 'react'

export default function Video() {
  return (
    <div className='w-screen aspect-video flex justify-center items-center'>
      {/* Youtube Video */}
      {/* <iframe
        className="w-full md:w-[80%] my-10 md:my-0 aspect-video"
        src="https://www.youtube.com/embed/GA7eCVsddos"
        frameBorder="0"
        allowFullScreen
      /> */}
      <iframe
        className="w-full md:w-[70%] my-10 md:my-0 aspect-video"
        src="https://drive.google.com/file/d/1nwgpwdN2GEZ_qNDh1jMTjuDX22TX9jrC/preview"
        title=""
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      {/* Normal Video */}
      {/* <video className="w-full md:w-[80%] my-10 md:my-0" controls>
        <source src="path/to/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  )
}
