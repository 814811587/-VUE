// // 引入mockjs
// const Mock = require('mockjs');

// // 获取 mock.Random 对象
// const Random = Mock.Random;

// // 列表数据
// const userListAll = function() {
//     let users = [];
//     for (let i = 0; i < 6; i++) {
//         let userObject = {
//             name: '张三',
//             age: 24,
//             sex: '男',
//             phone: '13006677221',
//             email: '1221039@.com',
//             education: '本科'
//         }
//         users.push(userObject)
//     }

//     return {
//         users: users,
//         pageCount: 100,
//         currentPage: 1,
//     }
// }

// //普通搜索 输入姓名或年龄
// const userListByParam = function(){
//     let users = [];
//     for (let i = 0; i < 10; i++) {
//         let userObject = {
//             name: '李四',
//             age: 23,
//             sex: '女',
//             phone: '13006612121',
//             email: '2819283@.com',
//             education: '本科'
//         }
//         users.push(userObject)
//     }

//     return {
//         users: users,
//         pageCount: 55,
//         currentPage: 1,
//     }
// }

// //高级搜索  输入多个参数
// const userListByAdvance = function(obj){
//     //console.log(obj);
//     let users = [];
//     for (let i = 0; i < 10; i++) {
//         let userObject = {
//             name: '王五',
//             age: 23,
//             sex: '女',
//             phone: '13006612121',
//             email: '2819283@.com',
//             education: '本科'
//         }
//         users.push(userObject)
//     }

//     return {
//         users: users,
//         pageCount: 55,
//         currentPage: 1,
//     }
// }

// //添加用户
// const userAdd = function(obj){
//     //console.log(obj);
//     return {
//         result : 1
//     }
// }

// //编辑用户
// const userEdit = function(obj){
//     //console.log(obj);
//     return {
//         result : 1
//     }
// }

// //删除用户
// const userDelete = function(obj){
//     //console.log(obj);
//     return {
//         result : 1
//     }
// }

// //导出用户
// const userExport = function(obj){
//     //console.log(obj);
//     return {
//         result : 1
//     }
// }

// // 每页数发生变化
// const userSizeChange = function(p1) {
//     let params = p1.body;
//     let obj = eval('('+ params +')');
//     let users = [];
//     for (let i = 0; i < obj.pageSize; i++) {
//         let userObject = {
//             name: '张三',
//             age: 24,
//             sex: '男',
//             phone: '15576677221',
//             email: '1221039@.com',
//             education: '本科',
//             //订单
//             no:'GTV76575',
//             weight:'2.58kg',
//             product:'中国上海',
//             date:'2019-03-08',
//             desc:''
//         }
//         users.push(userObject)
//     }

//     return {
//         users: users,
//         pageCount: 100,
//         currentPage: 1,
//     }
// }

// // 列表数据
// const selectPageNum = function() {
//     let users = [];
//     for (let i = 0; i < 10; i++) {
//         let userObject = {
//             name: '王五',
//             age: 24,
//             sex: '男',
//             phone: '13006677221',
//             email: '1221039@.com',
//             education: '本科',

//             no:'GTV76575',
//             weight:'2.58kg',
//             product:'中国上海',
//             date:'2019-03-08',
//             desc:''

//             //no weight  product  desc date GTV76570 2.58kg 中国深圳  生产日期

//         }
//         users.push(userObject)
//     }

//     return {
//         users: users,
//         pageCount: 100,
//         currentPage: 1,
//     }
// }

// //订单列表数据
// const orderList = function(){
//     let order = [];
//     for (let i = 0; i < 6; i++){
//         let orderObject = {
//             name:'张三',
//             no:'GTV76570',
//             phone:'13006617172',
//             price:'123',
//             time:'2019-03-14',
//         }
//         order.push(orderObject);
//     }
//     return {
//         order:order,
//         pageCount: 100,
//         currentPage: 1
//     }
// }

// //删除订单
// const deleteOrder = function(){
//     return {
//         result : 1
//     }
// }

// //导出订单
// const exportOrder = function(obj){
//     //console.log(obj);
//     return {
//         result : 1
//     }
// }

// //编辑订单
// const updateOrder = function(obj){
//     //console.log(obj);
//     return {
//         result : 1
//     }
// }

// //添加订单
// const addOrder = function(obj){
//     //console.log(obj);
//     return {
//         result : 1
//     }
// }

// const getGoodList = function(obj){
//   let good = [];
//   for (let i = 0; i < 3; i++){
//     let goodObject = {
//       goodNo:'G1001',
//       orderNo:'GTV76570',
//       price:'12',
//       count:'2',
//       product:'广州',
//     }
//     good.push(goodObject);
//   }
//   return {
//     good:good,
//     pageCount: 10,
//     currentPage: 1
//   }
// }

// //返回待办列表   假设 数据库只有20或5条数据 但只展示10条数据或5条数据
// const getNeedDealList = function(obj){
//     let list = [];

//     list.push(
//         {
//             pscId:'1001',
//             type:'1', //超期 1  待完成 2  正常 3  
//             title:'关于举办首届中央企业网络安全攻防大赛复赛的相关通知事宜',
//             lastApproveMan:'[P123456] 胡春霖',
//             lastApproveSuggest:'同意',
//             launch_man:'pxmwrya 阮洋',
//             launch_time:'2019-02-12 12:00:00',
//             approveSuggest:'1', //1 同意 2拒绝
//             lastApproveTime:'2019-04-12 12:07:02',
//             iconDown:false,
//             contentidshow:true,
//             determinate:'',
//             next_actor:'',
//             deal_man:[],
//             approveSuggest:'',
//             nexActor:[
//                 {
//                     label:'020_福彩中心验证兑奖信息',
//                     value:'020',
//                     key:'1'
//                 }
//             ],
//             nextApproveMan:[
//                 {
//                     name:'[P112233] 胡显昭',
//                     userId: 'P112233'
//                 },{
//                     name:'[P654321] 赵贤珠',
//                     userId: 'P112233'
//                 },
//             ],flowLog:[
//                 {
//                     act_name:'010_中心人填写兑奖信息',
//                     deal_man:'阮洋',
//                     deal_time:'2019-04-10 8:33:31',
//                     deal_suggest:'发起'
//                 },{
//                     act_name:'020_福彩中心验证兑奖信息',
//                     deal_man:'李思明',
//                     deal_time:'待处理',
//                     deal_suggest:''
//                 }
//             ]
//         },
//         {
//             pscId:'1002',
//             type:'2', //超期 1  待完成 2  正常 3  
//             title:'关于第三届IT精英赛兑奖过程的相关通知事宜',
//             lastApproveMan:'[P223344] 刘少林',
//             lastApproveSuggest:'同意',
//             launch_man:'pxmwrya 阮洋',
//             launch_time:'2019-02-12 12:00:00',
//             approveSuggest:'1', //1 同意 2拒绝
//             lastApproveTime:'2019-04-12 12:07:02',
//             iconDown:true,
//             contentidshow:false,
//             determinate:'',
//             next_actor:'',
//             deal_man:[],
//             approveSuggest:'',
//             nexActor:[
//                 {
//                     label:'030_兑奖认证环节',
//                     value:'030',
//                     key:'1'
//                 }
//             ],
//             nextApproveMan:[
//                 {
//                     name:'[P443322] 李文钊',
//                     userId: 'P443322'
//                 },{
//                     name:'[P098273] 宋先明',
//                     userId: 'P098273'
//                 },
//             ],flowLog:[
//                 {
//                     act_name:'010_中心人填写兑奖信息',
//                     deal_man:'阮洋',
//                     deal_time:'2019-04-10 8:33:31',
//                     deal_suggest:'发起'
//                 },{
//                     act_name:'020_福彩中心验证兑奖信息',
//                     deal_man:'李思明',
//                     deal_time:'2019-04-10 8:33:31',
//                     deal_suggest:'同意'
//                 },{
//                     act_name:'030_发行中心确认发奖',
//                     deal_man:'宋子明',
//                     deal_time:'未处理',
//                     deal_suggest:''
//                 }
//             ]
//         },
//         {
//             pscId:'1003',
//             type:'3', //超期 1  待完成 2  正常 3  
//             title:'关于离职离岗人员面谈流程',
//             lastApproveMan:'[P001100] 何松',
//             lastApproveSuggest:'同意',
//             launch_man:'pxmwrya 阮洋',
//             launch_time:'2019-02-12 12:00:00',
//             approveSuggest:'1', //1 同意 2拒绝
//             lastApproveTime:'2019-04-12 12:07:02',
//             iconDown:true,
//             contentidshow:false,
//             determinate:'',
//             next_actor:'',
//             deal_man:[],
//             approveSuggest:'',
//             nexActor:[
//                 {
//                     label:'030_发奖中心确认发奖',
//                     value:'030',
//                     key:'1'
//                 }
//             ],
//             nextApproveMan:[
//                 {
//                     name:'[P283743] 王晓琪',
//                     userId: 'P283743'
//                 },{
//                     name:'[P237543] 李华尚',
//                     userId: 'P237543'
//                 },
//             ],flowLog:[
//                 {
//                     act_name:'010_填写信息发起流程',
//                     deal_man:'阮洋',
//                     deal_time:'2019-04-10 8:33:31',
//                     deal_suggest:'发起'
//                 },{
//                     act_name:'020_填写面谈记录',
//                     deal_man:'何松',
//                     deal_time:'2019-04-10 8:33:31',
//                     deal_suggest:'同意'
//                 },{
//                     act_name:'030_申请面谈',
//                     deal_man:'张小雨',
//                     deal_time:'未处理',
//                     deal_suggest:''
//                 }
//             ]
//         },
//         {
//             pscId:'1004',
//             type:'3', //超期 1  待完成 2  正常 3  
//             title:'关于春节礼品申报的流程的说明',
//             lastApproveMan:'[P223344] 刘少林',
//             lastApproveSuggest:'同意',
//             launch_man:'pxmwrya 阮洋',
//             launch_time:'2019-02-12 12:00:00',
//             approveSuggest:'1', //1 同意 2拒绝
//             lastApproveTime:'2019-04-13 12:07:02',
//             iconDown:true,
//             contentidshow:false,
//             determinate:'',
//             next_actor:'',
//             deal_man:[],
//             approveSuggest:'',
//             nexActor:[
//                 {
//                     label:'030_纪检人员入库',
//                     value:'030',
//                     key:'1'
//                 }
//             ],
//             nextApproveMan:[
//                 {
//                     name:'[P443322] 李文钊',
//                     userId: 'P443322'
//                 },{
//                     name:'[P098273] 宋先明',
//                     userId: 'P098273'
//                 },
//             ],
//             flowLog:[
//                 {
//                     act_name:'010_填写申请',
//                     deal_man:'阮洋',
//                     deal_time:'2019-04-10 8:33:31',
//                     deal_suggest:'发起'
//                 },{
//                     act_name:'020_纪检人员审批',
//                     deal_man:'李思明',
//                     deal_time:'2019-04-10 8:33:31',
//                     deal_suggest:'同意'
//                 },{
//                     act_name:'030_纪检人员入库',
//                     deal_man:'宋子明',
//                     deal_time:'未处理',
//                     deal_suggest:''
//                 }
//             ]
//         },
//         {
//             pscId:'1005',
//             type:'2', //超期 1  待完成 2  正常 3  
//             title:'关于个人激励文件修改的过程调整',
//             lastApproveMan:'[P223344] 刘少林',
//             lastApproveSuggest:'同意',
//             launch_man:'pxmwrya 阮洋',
//             launch_time:'2019-02-12 12:00:00',
//             approveSuggest:'1', //1 同意 2拒绝
//             lastApproveTime:'2019-04-13 12:07:02',
//             iconDown:true,
//             contentidshow:false,
//             determinate:'',
//             next_actor:'',
//             deal_man:[],
//             approveSuggest:'',
//             nexActor:[
//                 {
//                     label:'020_开发领导审批审批',
//                     value:'020',
//                     key:'1'
//                 }
//             ],
//             nextApproveMan:[
//                 {
//                     name:'[P443322] 李文钊',
//                     userId: 'P443322'
//                 },{
//                     name:'[P098273] 宋先明',
//                     userId: 'P098273'
//                 },
//             ],
//             flowLog:[
//                 {
//                     act_name:'010_激励申请',
//                     deal_man:'阮洋',
//                     deal_time:'2019-04-10 8:33:31',
//                     deal_suggest:'发起'
//                 },{
//                     act_name:'020_开发经理审批',
//                     deal_man:'李思明',
//                     deal_time:'2019-04-10 8:33:31',
//                     deal_suggest:'同意'
//                 },{
//                     act_name:'030_开发经理领导审批',
//                     deal_man:'宋子明',
//                     deal_time:'未处理',
//                     deal_suggest:''
//                 }
//             ]
//         }
//     );
//     let let1 = parseInt(Math.random()*10)%2;
    
//     if( let1 == 0){        
//         return {
//             list :list,
//             count: 5,
//             pageCount:1
    
//         }    
//     }else{
//         //再添加五条
//         for(let i = 0 ; i < 5; i++){
//             list.push({
//                 pscId: (Math.random()).toString(),
//                 type:( i%3 +1).toString() , //超期 1  待完成 2  正常 3  
//                 title:'关于举办首届中央企业网络安全攻防大赛复赛的相关通知事宜'+i,
//                 lastApproveMan:'[P123456] 胡春霖',
//                 lastApproveSuggest:'同意',
//                 launch_man:'pxmwrya 阮洋',
//                 launch_time:'2019-02-12 12:00:00',
//                 approveSuggest:'1', //1 同意 2拒绝
//                 lastApproveTime:'2019-04-12 12:07:02',
//                 iconDown:true,
//                 contentidshow:false,
//                 determinate:'',
//                 next_actor:'',
//                 deal_man:[],
//                 approveSuggest:'',
//                 nexActor:[
//                     {
//                         label:'020_福彩中心验证兑奖信息',
//                         value:'020',
//                         key:'1'
//                     }
//                 ],
//                 nextApproveMan:[
//                     {
//                         name:'[P112233] 胡显昭',
//                         userId: 'P112233'
//                     },{
//                         name:'[P654321] 赵贤珠',
//                         userId: 'P112233'
//                     },
//                 ],flowLog:[
//                     {
//                         act_name:'010_中心人填写兑奖信息',
//                         deal_man:'阮洋',
//                         deal_time:'2019-04-10 8:33:31',
//                         deal_suggest:'发起'
//                     },{
//                         act_name:'020_福彩中心验证兑奖信息',
//                         deal_man:'李思明',
//                         deal_time:'待处理',
//                         deal_suggest:''
//                     }
//                 ]
//             });
//         }
//         return {
//             list :list,
//             count: 20,
//             pageCount:2,
    
//         }
//     }    
    
// }

// const getNeedDealListByCommon = function(obj){

// }

// const getNeedDealListByAdvSearch = function(obj){

// }

// const getNeedDealListBySize = function(obj){
    
// }

// const getNeedDealListByPage = function(obj){
    
// }

// const getNeedDealListByNextPage = function(obj){
    
// }

// const getNeedDealListByPrePage = function(obj){
    
// }

// const FlowList = function(obj){
//     let list = [];
//     let levels = ["一等奖","二等奖","三等奖"];
//     let salary = [100,200,500];
//     let names = ['pxmwrya阮洋','pxmwcc曹操','pxmwlsm李思明'];
//     //兑奖状态 0 已提交 1 退回草稿 
//     //假设13条数据
//     for(let i = 0; i < 13; i++){
//         let object = {
//             flowId:i,
//             level: levels[i%3],
//             salary:salary[i%3],
//             name:names[i%3],
//             talk:'',
//             status:i%2,    
//         };
//         list.push(object);
//     }
//     return list;
// } 

// const getFlowList = function(obj){
//     let let1 = FlowList();
//     let list = [];
//     let i = 0;
//     let1.forEach(element => {
//         if(i < 10){
//             list.push(element);
//             i++;
//         }
        
//     });
//     return {
//         list:list,
//         currentPage:1,
//         total:13,
//         pageSize:10,
//     }
// }

// const getFlowListByCommon = function(obj){
//     let name = JSON.parse(obj.body).name;
//     let array = FlowList();
//     let list = [];
//     let i = 0;
//     array.forEach(element => {
//         if((element.name).indexOf(name) > -1){
//             if(i < 10){
//                 list.push(element);
//                 i++;
//             }else if((element.name).indexOf(name) > -1){
//                 i++;
//             }
//         }
//     });
//     return {
//         list:list,
//         currentPage:1,
//         total:i,
//         pageSize:10,
//     }
// }

// const getFlowListByAdvSearch = function(obj){
//     let name = JSON.parse(obj.body).name;
//     let level = JSON.parse(obj.body).level;
//     let salary = JSON.parse(obj.body).salary;
//     let status = JSON.parse(obj.body).status;
//     let array = FlowList();
//     let list = [];
//     let i = 0;

//     array.forEach(element => {
//         if(((element.name).indexOf(name) || name=='') > -1 && ((element.level) == level || level=='') && ((element.salary) == salary || salary==null) && ((element.status) == status )){
//             if(i < 10){
//                 list.push(element);
//                 i++;
//             }else{
//                 i++;
//             } 
//         }
//     });
//     return {
//         list:list,
//         currentPage:1,
//         total:i,
//         pageSize:10,
//     }

// }

// const getFlowListBySize = function(obj){
//     let size = JSON.parse(obj.body).size;
//     let searchType = JSON.parse(obj.body).searchType;
//     let let1 = [];
//     if(searchType == 2){
//         let1 = getFlowListByAdvSearch().list;
//     }else if(searchType == 1){
//         let1 = getFlowListByCommon().list;
//     }else{
//         let1 = FlowList();
//     }

     
//     let list = [];
//     let i = 0;
//     let1.forEach(element => {
//         if(i < size){
//             list.push(element);
//             i++;
//         }
        
//     });
//     return {
//         list:list,
//         currentPage:1,
//         total:13,
//         pageSize:20,
//     }
// }

// const getFlowListByPage = function(obj){

//     let page = JSON.parse(obj.body).page;
//     let searchType = JSON.parse(obj.body).searchType;
//     let let1 = [];
//     if(searchType == 2){
//         let1 = getFlowListByAdvSearch().list;
//     }else if(searchType == 1){
//         let1 = getFlowListByCommon().list;
//     }else{
//         let1 = FlowList();
//     }

     
//     let list = [];
//     let i = 0;
//     let1.forEach(element => {
//         if(page > 1){
//             if(i >= 10){
//                 list.push(element);
//                 i++;
//             }
//             else{
//                 i++;
//             }
//         }else{
//             if(i < 10){
//                 list.push(element);
//                 i++;
//             }
//         }
        
        
//     });
//     return {
//         list:list,
//         currentPage:page,
//         total:13,
//         pageSize:10,
//     }
// }

// //流程的详细信息
// const getFlowInfoDetails = function(obj){
//     let object = {
//         level:'三等奖',
//         salary:'￥100.000.000',
//         name:'林一飞',
//         phone:'188-6666-5555',
//         status:1,
//         talk:'略',
//         memo:'兑奖即将超期！',
//         //附件数据
//         fileList:[
//             {fileName:'奖励制度文档1',upfileTime:'2019-04-10',fileSize:'10.16'},
//             {fileName:'奖励制度文档2',upfileTime:'2019-04-11',fileSize:'10.26'}
//         ],
//         //流程日志数据
//         flowLog:[
//             {
//                 act_name:'010_中奖人填写兑奖信息',
//                 deal_man:'阮洋',
//                 deal_time:'2019-04-10 8:33:31',
//                 deal_suggest:'发起'
//             },{
//                 act_name:'020_福彩中心验证兑奖信息',
//                 deal_man:'阮洋',
//                 deal_time:'未处理',
//                 deal_suggest:''
//             }
//         ]
//     }

//     return {
//         data:object
//     }



// }

// const BASEURL = "http://localhost:8088/"

// // Mock.mock( url, post/get , 返回的数据)；
// Mock.mock(BASEURL+'user/list', 'post', userListAll);
// Mock.mock(BASEURL+'user/listByParam','post',userListByParam);
// Mock.mock(BASEURL+'user/listByAdvance','post',userListByAdvance);
// Mock.mock(BASEURL+'user/add','post',userAdd);
// Mock.mock(BASEURL+'user/modify','post',userEdit);
// Mock.mock(BASEURL+'user/delete','post',userDelete);
// Mock.mock(BASEURL+'user/exportUser','post',userExport);
// Mock.mock(BASEURL+'user/userSizeChange','post',userSizeChange);
// Mock.mock(BASEURL+'user/selectPageNum','post',selectPageNum);

// /*采购订单*/
// Mock.mock(BASEURL+'order/list',orderList);
// Mock.mock(BASEURL+'order/delete',deleteOrder);
// Mock.mock(BASEURL+'order/exportOrder',exportOrder);
// Mock.mock(BASEURL+'order/updateOrder',updateOrder);
// Mock.mock(BASEURL+'order/addOrder',addOrder);

// Mock.mock(BASEURL+'good/list',getGoodList);


// Mock.mock(BASEURL+'task/list',getNeedDealList);
// Mock.mock(BASEURL+"task/getFlowListByCommon",getNeedDealListByCommon);    
// Mock.mock(BASEURL+"task/getFlowListByAdvSearch",getNeedDealListByAdvSearch);   
// Mock.mock(BASEURL+"getFlowListBySize",getNeedDealListBySize);   
// Mock.mock(BASEURL+"getFlowListByPage",getNeedDealListByPage);
// Mock.mock(BASEURL+"getFlowListByPrePage",getNeedDealListByPage);
// Mock.mock(BASEURL+"getFlowListByNextPage",getNeedDealListByPage);

// Mock.mock(BASEURL+"flow/getFlowList",getFlowList);    
// Mock.mock(BASEURL+"flow/getFlowListByCommon",getFlowListByCommon);    
// Mock.mock(BASEURL+"flow/getFlowListByAdvSearch",getFlowListByAdvSearch);   
// Mock.mock(BASEURL+"flow/getFlowListBySize",getFlowListBySize);   
// Mock.mock(BASEURL+"flow/getFlowListByPage",getFlowListByPage);
// Mock.mock(BASEURL+"flow/getFlowListByPrePage",getFlowListByPage);
// Mock.mock(BASEURL+"flow/getFlowListByNextPage",getFlowListByPage);

// Mock.mock(BASEURL+"flow/getFlowInfoDetails",getFlowInfoDetails);

  