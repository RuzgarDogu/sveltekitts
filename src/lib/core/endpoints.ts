import axios, { type AxiosInstance } from 'axios'
import { APIURL } from '@config'

class Database {
      db:AxiosInstance
      constructor() {
          this.db = axios.create({
            baseURL: APIURL,
            timeout: 10000,
            // headers: {
            //   Authorization : `Bearer ${import.meta.env.ENDPOINT_KEY}`
            // }
          })
      }
      get = async (path:string, params:object={}) => {
        try {
            const response = await this.db.get(path,{
                params: params
              });
            return response.data
          } catch (error) {
            console.log("ERRRRRRR",error)
            throw new Error("Oooops....")
          }
      }
      post = async (path: string, body:object) => {
        try {
          const response = await this.db.post(path,body);
          return response.data
        } catch (error) {
          throw new Error("Oooops....")
        }
      }
      put = async (path: string, body:object) => {
        try {
          const response = await this.db.put(path,body);
          return response.data
        } catch (error) {
          throw new Error("Oooops....")
        }
      }

  }

  const DB = new Database()
  export default DB
  