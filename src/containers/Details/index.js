import React, { useState } from "react";
import useGetRequest from "../../hooks/useGetRequest";
import { useHistory } from "react-router-dom";
import { openSeaBaseUrl } from "../../helpers/utils";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "../../components/Loading";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
  },
  image: {
    width: "80%",
  },
}));

export default function Details() {
  const { search } = window.location;
  const contractAddress = search.slice(
    search.indexOf("=") + 1,
    search.indexOf("&")
  );
  const tokenId = search.slice(search.lastIndexOf("=") + 1, search.length);
  const history = useHistory();
  const [item, setitem] = useState({});
  console.log("item:", item);
  const classes = useStyles();
  const url = `${openSeaBaseUrl}/asset/${contractAddress}/${tokenId}/`;
  useGetRequest(url, setitem);

  return (
    <div>
      {item.id ? (
        <div className={classes.container}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100vw",
              alignItems: "center",
            }}
          >
            <button
              type="button"
              style={{
                background: "none",
                color: "white",
                border: "none",
                width: "100px",
                fontSize: "32px",
                cursor: "pointer",
                position: "relative",
                left: "20px",
              }}
              onClick={() => history.push("/")}
            >
              {"<"}
            </button>
            <p>{item.collection.name}</p>
            <span style={{ visibility: "hidden", width: "100px" }} />
          </div>
          <img src={item.image_url} className={classes.image} />
          <p>{item.name}</p>
          <p style={{ padding: "20px", fontSize: "14px" }}>
            {item.description}
          </p>
          <a
            id="permalink"
            href={item.permalink}
            rel="noopener noreferrer"
            target="_blank"
            style={{ color: "white", position: "sticky", bottom: "30px" }}
          >
            Permalink
          </a>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
