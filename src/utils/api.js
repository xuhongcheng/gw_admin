import {get, post, form, deletes, put} from './request.js' ;//导入axios实例文件中方法
let bsae_api = process.env.BASE_API ? './'+process.env.BASE_API :'..' //获取项目api请求地址
//根据id获取用户信息
let base_api = '/wx'

const api = {
  // 公用图片上传
  uploadPicture (data) {
    return form(base_api + `/addImageManagement`,data)
  },
  // 查询搜索条件地区
  searchOragin () {
    return form(base_api + `/seleGeographicalAreasByAdmin`,'')
  },


  // 首页查询
  outToSyInio () {
    return post(base_api + `/outToSyInio`,'')
  },
  // 预约参观
  addVisitor (data) {
    return post(base_api + `/addVisitor`,data)
  },
  // 项目地区
  seleGeographicalAreasXM () {
    return post(base_api + `/seleGeographicalAreasXM`,'')
  },
  // 项目介绍详情
  seleProjectIntroductionByGaId (data) {
    return post(base_api + `/seleProjectIntroductionByGaId`,data)
  },
  // 我们的故事列表
  seleStoryTableByFY (data) {
    return post(base_api + `/seleStoryTableByFY`,data)
  },
  // 我们的故事详情
  seleStoryTableById (data) {
    return post(base_api + `/seleStoryTableById`,data)
  },
  // 查询全部的招聘信息
  seleFlashviewByQG (data) {
    return post(base_api + `/seleFlashviewByQG`,data)
  },
  // 查询指定地区的招聘信息
  seleFlashviewByDQ (data) {
    return post(base_api + `/seleFlashviewByDQ`,data)
  },
  // 新闻列表
  seleNewstickerFY (data) {
    return post(base_api + `/seleNewstickerFY`,data);
  },
  // 新闻详情,演示
  articleDetail (data) {
    return post(base_api + `/seleNewstickerById`,data)
  },
  // 投资背景详情
  seleLifeInsuranceSY (id) {
    var request_url = base_api
    if(Math.floor(id) === 1){
      request_url += '/seleLifeInsuranceRS' // 珠江人寿
    }else if(Math.floor(id) === 2){
      request_url += '/seleLifeInsuranceSY' // 水印·中国
    }else if(Math.floor(id) === 3){
      request_url += '/seleLifeInsuranceHS' // 合生商业
    }else if(Math.floor(id) === 4){
      request_url += '/seleLifeInsuranceCZ' // 合生创展
    }else if(Math.floor(id) === 5){
      request_url += '/seleLifeInsuranceDC' // 珠江地产
    }
    return post(request_url,'') //resfulapi风格
  },
}
export default api;
