const base = {
    get() {
        return {
            url : "http://localhost:8080/php8f3om/",
            name: "php8f3om",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/php8f3om/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "医院预约挂号系统小程序"
        } 
    }
}
export default base
