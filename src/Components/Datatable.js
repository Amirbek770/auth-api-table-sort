import React, { useEffect, useState } from "react";

export default function Datatable(props) {
  const {data} = props;
  const [_, forceUpdate] = useState(0)
    const columns = data[0] && Object.keys(data[0]);
    console.log('data keldimi datatablega?', data !== undefined && data.map(item=> item))
    // useEffect(() => {
    //   forceUpdate(v=> v+1)
    // }, [data])
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
              <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    );
  }
