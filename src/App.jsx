
import { useEffect, useState } from "react";
import CardWrapper from "./card-wrapper"
import Card from "./card"

const App = () => {

  const baseURL = "https://jsonplaceholder.typicode.com";

  const [photos, setPhotos] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch(baseURL + "/photos")
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data)
        setLoad(true)
      })
  }, []);


  return (
    <div className="container mx-auto shadow-sm">
      {
        load
          ?
          <CardWrapper>
            {
              photos.length > 0 ? photos.map((item) => {
                return <Card state={item} key={item.id} />
              }) : <h1 className="mx-auto p-4 text-xl ">NOT FOUNT DATA.!!!</h1>
            }
          </CardWrapper>
          :
          <h1 className="mx-auto p-4 text-xl ">LOADING...</h1>
      }
    </div>
  )
}

export default App;