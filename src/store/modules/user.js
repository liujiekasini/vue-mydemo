import { Cookie } from 'utils/storage'
import axios from 'src/utils/fetch'
const user = {
    state: {
        isLogin: false,
        user: {
            name: Cookie.get('username') || '',
            avatar: Cookie.get('avatar') || ''
        }
    },
    actions: {
        login ({commit}, params) {
            return new Promise( (resolve, reject) => {
                axios.post('login', params)
                    .then( res => {
                        console.log(res)
                        commit('LOGIN', res.data)
                        resolve(res.data)
                    }).catch( err => {
                        reject(err)
                    })
            })
        },
        esc ({commit}) {
            commit('ESC')
        }
    },
    mutations: {
        LOGIN (state, data) {
            state.user = {
                name: data.username,
                avatar:''
            }
            Cookie.set({
                username: data.username,
                avatar:''
            })
        }
    }
}
export default user
