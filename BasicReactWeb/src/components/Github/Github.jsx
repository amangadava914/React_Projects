import { React, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  /* this is the first way of fetching data  from github with the use of useEffect()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/amangadava914")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
*/
  // this is the second way of fetch data with the use of loader and useLoaderData hook
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-400 text-white p-4 text-3xl">
      Github Followers : {data.followers} <br />
      Github Following : {data.following} <br />
      Github Name : {data.name}
      <img
        className="shadow-rose-950 rounded-3xl"
        src={data.avatar_url}
        alt="Github Picture"
        width={250}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/amangadava914");
  return response.json();
};
