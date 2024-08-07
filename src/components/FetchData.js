
export const excerciseOptions = {
  method: 'GET',
  headers: {
      'x-rapidapi-key': import.meta.env.VITE_EXCERCISE_DB,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions ={
 method: 'GET',
 headers: {
   'x-rapidapi-key': import.meta.env.VITE_YOUTUBE,
   'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
 }
};

export const fetchData = async (url, options)=>{
 const res = await fetch(url,options)
 const data = await res.json()
 return data
}
