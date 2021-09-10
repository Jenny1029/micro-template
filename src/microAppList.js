let microAppList = [
    {
        name: 'subreact', // apppName 需要和子系统wepack配置的library对应
        // container: '#subapp-viewport', // 显示子应用的容器
        entry: process.env.REACT_APP_SUBREACT, // 加载微应用url地址
        activeRule: '/micro/subreact', // 触发路由
        props: {} // 自定义属性
    },
    {
        name: 'subvue',
        entry: process.env.REACT_APP_SUBVUE,
        activeRule: '/micro/subvue',
        props: {}
    },
    {
        name: 'subhtml',
        entry: process.env.REACT_APP_SUBHTML,
        activeRule: '/micro/subhtml',
        props: {}
    }
]
microAppList = microAppList.map((item)=>{
    return Object.assign({container:"#subapp"},item)
})

console.log(microAppList);

export default microAppList