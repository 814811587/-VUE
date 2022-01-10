import axios from 'vue-axios'
// 设置请求头
export const http = axios.create({
    baseURl:''
})
http.login = ({us,pa}) => {
    return http.post('请求参数',{
        us,
        pa,
    })
}