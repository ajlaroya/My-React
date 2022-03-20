import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '3b6379ba5fmsh07efa41e9e364a4p116c1cjsnf40bb60a19cc'
          }
    })
    return data
}