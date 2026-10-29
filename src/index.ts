async function eventHandler(event: FetchEvent): Promise<Response> {
  return new Response("Hello from FastEdge! v0.0.3");
}

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(eventHandler(event));
});
