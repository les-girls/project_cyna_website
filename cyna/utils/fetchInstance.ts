export async function fetchInstance(url: string, options: RequestInit = {}, locale : string = "en") {
    const defaultHeaders = {
      "Content-Type": "application/json",
      "Accept-Language": locale, 
    };
  
    const mergedOptions: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...(options.headers || {}),
      },
    };
  
    return fetch(url, mergedOptions);
  }