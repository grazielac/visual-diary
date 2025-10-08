import { useEffect, useState } from "react";

export default function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => { {/* you only want to fecth data once, when the component first loads */}
    async function fetchData() {
      const response = await fetch("https://week-6-api.vercel.app/api/images");
      const data = await response.json();
      setPhotos(data);
    }
    fetchData();
  }, []); {/* dependency array // runs the effect only once after the component's first render*/}

  return (
    <div>
      <h1>Photos</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>{photo.title}</li>
        ))}
      </ul>
    </div>
  );
}
