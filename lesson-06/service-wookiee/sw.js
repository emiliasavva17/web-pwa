console.log("smth");

self.addEventListener("fetch", async (event) => {
  //console.log(event);
  const client = await self.clients.get(event.clientId);
  if (client) {
    // console.log("smth happening");
    client.postMessage("Hopefully it's working");
  }
});

self.addEventListener("fetch", (event) => {
  //console.log();
  let path = event.request.url;
  let extension = path.split("fake.").pop();
  console.log(extension);

  if (extension === "html") {
    event.respondWith(
      new Response("HTML", {
        headers: {
          "Content-type": "text/html",
        },
      })
    );
  } else if (extension === "css") {
    event.respondWith(
      new Response("CSS", {
        headers: {
          "Content-type": "text/css",
        },
      })
    );
  } else if (extension === "json") {
    event.respondWith(
      new Response("Json", {
        headers: {
          "Content-type": "application/json",
        },
      })
    );
  }
});
