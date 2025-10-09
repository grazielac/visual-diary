import { useEffect, useState } from "react";
import GalleryItem from "./GalleryItem";

export default function Gallery() {
  /* const [selectedPhoto, setSelectedPhoto] = useState(null); */
  const [photos, setPhotos] = useState([]);

  /* source: chatgpt - Vite requires all frontend env variables to start with VITE_ */
  useEffect(() => {
    /* you only want to fecth data once, when the component first loads */
    async function fetchData() {
      const accessKey = import.meta.env.VITE_UNSPLASH_KEY;
      const response = await fetch("https://api.unsplash.com/photos", {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      });
      const data = await response.json();
      setPhotos(data);
    }
    fetchData();
  }, []); /* dependency array // runs the effect only once after the component's first render*/

  return (
    <div>
      <div className="m-4">
        <h1 className="mb-15 underline text-center cursor-pointer">Photos</h1>
        <div className="relative">
          <ul className="grid grid-cols-4 md:grid-cols-6 gap-4">
            {photos.map((photo) => (
              /* for each photo, render an img with its src and key to id*/
              <div
                className="relative group transition duration-200"
                key={photo.id}
              >
                <img
                  //   onClick={() => setSelectedPhoto(photo)}
                  className="cursor-pointer object-cover w-full rounded-xl transition duration-200 group-hover:shadow-lg"
                  src={photo.urls.small}
                  alt={photo.alt_description}
                ></img>
                {/* deafult: opacity-0 // group-hover: shows when the parents wrapper is hovered*/}
                <button 
                onClick={() => console.log("Save me!")}
                className="mt-2 mr-2 h-12 w-16 bg-amber-200 rounded-2xl cursor-pointer absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100">
                    Save
                </button>    
              </div>
            ))}
          </ul>
          {/* call modal?? GalleryItem??*/}
        </div>
        {/* conditionally render galleryitem */}
        {/*selectedPhoto && (
          <GalleryItem
            photo={selectedPhoto}
            close={() => setSelectedPhoto(null)}
          />
        )*/}
      </div>
    </div>
  );
}
