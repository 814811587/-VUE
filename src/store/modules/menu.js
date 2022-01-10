export default {
    state: {
        navTree: [],//导航菜单树
        subNavTree:[],//子菜单
    },
    getters: {

    },
    mutations: {
        setNavTree(state,navTree){  // 设置导航菜单树
            state.navTree = navTree;
        },
        setSubNavTree(state,subNavTree){  // 设置导航菜单树
            state.subNavTree = subNavTree;
        },
    },
    actions: {

    }
}