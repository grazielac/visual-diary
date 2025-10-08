import { useEffect, useState } from "react";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    /* you only want to fecth data once, when the component first loads */
    async function fetchData() {
      const response = await fetch("https://week-6-api.vercel.app/api/images");
      const data = await response.json();
      setPhotos(data);
    }
    fetchData();
  }, []); /* dependency array // runs the effect only once after the component's first render*/

  console.log(photos);
  return (
    <div className="m-4">
      <h1 className="mb-15 underline text-center">Photos</h1>
      <ul className="grid grid-cols-4 md:grid-cols-3 gap-4 grid-rows-">
        {photos.map((photo) => (
          /* for each photo, render an img with its src and key to id*/
          <img className="object-cover w-full border rounded-xl" key={photo.id} src={photo.url}></img>
        ))}
      </ul>
    </div>
  );
}
