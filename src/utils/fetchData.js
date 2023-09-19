export const exerciseOptions = {
    method: 'GET',
    headers: {
    //   'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Key': 'b8deb59530mshbe6ea8800e69ee4p124f3cjsn17c4b17eb4fd',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export  const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b8deb59530mshbe6ea8800e69ee4p124f3cjsn17c4b17eb4fd',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
    
    return data;
  };