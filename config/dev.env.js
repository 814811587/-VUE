'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ASC_ROOT:'"http://aep-p/pickperson"',
  API_ROOT:'"http://localhost:8088"',
  UPDOWN_ROOT:'"http://localhost:8088/CudFile/cud-file/upfile"',
  //上传获奖名单
  WINEXCEL_ROOT: '"http://localhost:8088/win/cud-win/upExcelFile"',
  PROCPIC_ROOT:'"http://jtv-psc-d:8899/FlowView/FlowView.aspx?ProcInstID="'
})
