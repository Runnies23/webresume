import React from "react"
  import { Chrono } from "react-chrono";

  const Timeline = () => {
    const items = [
      {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg"
        }
      }
    },
    {
      title: "7 December 1941",
      cardTitle: "Pearl Harbor",
      media: {
        source: {
          url: "/pearl-harbor.mp4",
          type: "mp4"
        },
        type: "VIDEO",
        name: "Pearl Harbor"
      }
    },
    {
      title: "7 December 1941",
      cardTitle: "Pearl Harbor",
      media: {
        source: {
          url: "https://www.youtube.com/embed/f6cz9gtMTeI",
          type: "mp4"
        },
        type: "VIDEO",
        name: "Pearl Harbor"
      }
    },
   ];
    return (
      <div className="pt-40 flex justify-center">
         <div style={{ width: '1400px' }}>
            <Chrono items={items} slideShow slideItemDuration={4500} slideShowType="reveal" mode="VERTICAL_ALTERNATING"  className='z-40'/>
         </div>
      </div>
    )
  }

export default Timeline;