import Title from "./pages/Title.jsx";
import Map from "./pages/Map.jsx";
import ArticleMain from "./pages/ArticleMain.jsx";
import MVPWriteup from "./pages/MVPWriteup.jsx";
import AreteWriteup from "./pages/AreteWriteup.jsx";
import FauraWriteup from "./pages/FauraWriteup.jsx";
import SchmittWriteup from "./pages/SchmittWriteup.jsx";
import CTCWriteup from "./pages/CTCWriteup.jsx";

import { useState } from "react";

const Navigation = () => {
  const [page, setPage] = useState("");
  return (
    <>
      {page === "map" ? (
        <Map setPage={setPage} />
      ) : page === "mvp" ? (
        <MVPWriteup setPage={setPage} />
      ) : page === "arete" ? (
        <AreteWriteup setPage={setPage} />
      ) : page === "faura" ? (
        <FauraWriteup setPage={setPage} />
      ) : page === "schmitt" ? (
        <SchmittWriteup setPage={setPage} />
      ) : page === "ctc" ? (
        <CTCWriteup setPage={setPage} />
      ) : page === "letter" ? (
        <ArticleMain setPage={setPage} />
      ) : (
        <Title setPage={setPage} />
      )}
    </>
  );
};

export default Navigation;
