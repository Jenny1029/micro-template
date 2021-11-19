let microAppList = [
  {
      name: 'subreact', // apppName 需要和子系统wepack配置的library对应
      // container: '#subapp-viewport', 
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
]

// 子应用支持远端调试
// 获取url参数
const params = new URL(window.location.href).searchParams;
params.get('name') && params.get('entry') && params.get('activeRule') && microAppList.push({
  name: params.get('name'),
  entry: params.get('entry'),
  activeRule: params.get('activeRule'),
  props: {}
})

microAppList = microAppList.map((item)=>{
    return Object.assign({
      container:"#subapp" // 显示子应用的容器
    },item)
})

console.log(microAppList);

export default microAppList