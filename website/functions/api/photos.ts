export async function onRequest() {
    const getImages = await fetch("https://jsonplaceholder.typicode.com/photos")
    const response = await getImages.json()
    
    return new Response(JSON.stringify(response),{
      headers: {
           "Content-Type": "application/json"
      }
    })
  }