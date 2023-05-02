export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host' : 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key' : '6bb17e0fa6msh3e4d868fb5a6196p1ddac9jsn9601ab8b0d8c'
        
        //'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA' 

    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '6bb17e0fa6msh3e4d868fb5a6196p1ddac9jsn9601ab8b0d8c',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) =>
    { const response = await fetch(url,options);
      const data = await response.json();

      return data;
    }