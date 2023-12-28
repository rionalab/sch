import React from "react";

async function Settings() {
  const resp = await fetch("https://dummyjson.com/posts?limit=3");
  const data = await resp.json();

  return (
    <div>
      <h1>Settings</h1>

      {JSON.stringify(data, null, 4)}
    </div>
  );
}

export default Settings;
