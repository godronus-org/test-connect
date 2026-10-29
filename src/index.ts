async function eventHandler(event: FetchEvent): Promise<Response> {
  return new Response("Hello from FastEdge! 0.0.1");
}

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(eventHandler(event));
});
