import React, { useEffect, useState } from "react";
import { ProductAPI } from "./API/productAPI";
import Datatable from "./Components/Datatable";

export default function Home() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [searchColumns, setSearchColumns] = useState(["name"]);

  const getProduct = async () => {
    const url = `https://face.ox-sys.com/variations?size=1000&page=1`;
    const token = localStorage.getItem("token");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    });

    const res = await response.json();
    setData(res.items);
  };

  function search(rows) {
    return rows.sort().filter((row) =>
      searchColumns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  }

  const columns = data[0] && Object.keys(data[0]);

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <input
          type='text'
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />  
      <table cellPadding={0} cellSpacing={0}>
        <thead>
        <tr>
          <th>name</th>
        </tr>
        </thead>
        <Datatable data={search(data)} />
      </table>
    </div>
  );
}
