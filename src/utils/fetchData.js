export const exerciseOptions  = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '10c14b1a14mshaa549cd7bb345b0p1ed385jsnbe7c579b7067',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  

export const fetchData = async(url, options)=>{
    const response = await fetch(url,options);
    const data =await response.json();
    return data
}