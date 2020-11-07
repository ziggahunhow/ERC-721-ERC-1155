import React from "react";
import { useState, useEffect } from "react";
import usePageBottom from "../../hooks/usePageBottom";
import { useWallet } from "use-wallet";
import { openSeaBaseUrl } from "../../helpers/utils";
import { useHistory } from "react-router-dom";
import ReactCard from "../../components/Card";
import Loading from "../../components/Loading";
import useGetRequest from "../../hooks/useGetRequest";

export default function List() {
  const history = useHistory();
  const wallet = useWallet();
  const [page, setpage] = useState(0);
  const [items, setitems] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const useGetRequestCallback = (newItems) => {
    setisLoading(true);
    setitems((prevItems) => [...prevItems, ...newItems.assets]);
    setisLoading(false);
  };

  const cardOnClick = (obj) => {
    const { asset_contract, token_id } = obj;
    history.push(
      `/card?contract=${asset_contract.address}&tokenId=${token_id}`
    );
  };

  usePageBottom(() => setpage((prevPage) => prevPage + 1));
  useGetRequest(
    `${openSeaBaseUrl}/assets/?owner=${wallet.account}&offset=${page}&limit=20`,
    useGetRequestCallback,
    [page, wallet.account],
    wallet.account
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100vw",
          alignItems: "center",
        }}
      >
        <span style={{ visibility: "hidden", width: "100px" }} />
        <h2>List</h2>
        <button
          type="button"
          onClick={() => wallet.connect("injected")}
          style={{
            border: "none",
            background: "#DEB992",
            height: "40px",
            borderRadius: "5px",
            width: "100px",
            right: "20px",
            position: "relative",
            cursor: "pointer",
          }}
        >
          Connect
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "600px" }}>
        {items.map((item) => (
          <ReactCard
            key={item.token_id + item.id}
            item={item}
            onClick={() => {}}
            onClick={cardOnClick}
            cardStyle={{ flex: "1 0 31%" }}
          />
        ))}
      </div>
      {isLoading && <Loading />}
      {!wallet.account && <p style={{ color: "white" }}>Please log in</p>}
    </>
  );
}
