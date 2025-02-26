export async function translateText(text: string, source: string, target: string){
    const url = process.env.URL_API_TRANSLATE
    if(!url){
        throw new Error("Internal Server Error")
    }
    const body = JSON.stringify({
        q: text,
        source,
        target,
        format: "text",
    })
    try {
    const translationResponse = await fetch(url, {
        method: "POST",
        headers:{
        //     "x-api-key": "clé d'api"
        "Content-Type": "application/json" 
        },
        body
      });
      const result =  await translationResponse.json()
      return result?.translatedText || text
    } catch (error) {
        return text
    }
}
