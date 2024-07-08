import { create } from "apisauce";

const api = create({
    baseURL: 'https://newsapi.org/v2',
  })

const apiKey='?country=us&apiKey=24ee20c1748a4d338e3fcd2c95c781f4'

const getTopHeadLine=api.get('/top-headlines'+apiKey)
const getByCategory= (category)=>api.get('/everything?q='+category+"&apikey=4f0fb2df2b4247aabf5f97478a749be4")

export default{
    getTopHeadLine,
    getByCategory
}


// top-headlines?country=us&apiKey=24ee20c1748a4d338e3fcd2c95c781f4