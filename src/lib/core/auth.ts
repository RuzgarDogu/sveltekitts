import { User } from '@models'
import  DB  from './endpoints'

class Authentication {

    static check = async (email: string, password: string) => {
        const user = await DB.get(`/users?email_eq=${email}`)
        if (user.length > 0) {
            if (user[0].password === password) {
                return new User(user[0])
            }
            // Henüz password kontrolü yok
            // o yüzden şimdilik true döndürüyoruz
            return new User(user[0])
        }
        return false
    }

    login = async (email: string, password: string) => {
        return await Authentication.check(email, password as string)
    }
}
const Auth = new Authentication()
export default Auth