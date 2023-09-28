import { useState, useEffect } from "react";
import Search from "./components/Search/Search";
import getImagesFunc from "./api";
import ImageList from "./components/ImageList/ImageList";

const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");

  const sendSearchReq = async () => {
    const data = await getImagesFunc(search);
    setImages(data);
  };

  useEffect(() => {
    sendSearchReq();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div>
      <Search setSearch={setSearch} sendSearchReq={sendSearchReq} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
