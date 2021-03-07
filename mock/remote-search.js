/*
 * @name: 文件
 * @Author: Gin
 * @Date: 2020-12-23 09:26:08
 * @LastEditors: Gin
 * @LastEditTime: 2021-01-18 13:57:31
 */
const Mock = require('mockjs')

const NameList = []
const count = 100

for (let i = 0; i < count; i++) {
  NameList.push(Mock.mock({
    name: '@first'
  }))
}
NameList.push({ name: 'mock-Pan' })

module.exports = [
  // username search
  {
    url: '/vue-element-admin/search/user',
    type: 'get',
    response: config => {
      const { name } = config.query
      const mockNameList = NameList.filter(item => {
        const lowerCaseName = item.name.toLowerCase()
        return !(name && lowerCaseName.indexOf(name.toLowerCase()) < 0)
      })
      return {
        code: 200,
        data: { items: mockNameList }
      }
    }
  },

  // transaction list
  {
    url: '/vue-element-admin/transaction/list',
    type: 'get',
    response: _ => {
      return {
        code: 200,
        data: {
          total: 20,
          'items|20': [{
            orderNo: '@guid()',
            timestamp: +Mock.Random.date('T'),
            username: '@name()',
            price: '@float(1000, 15000, 0, 2)',
            'status|1': ['success', 'pending']
          }]
        }
      }
    }
  },
  {
    url: '/rcbonestopController/secured/parameters/getSubsidyTypeList',
    type: 'get',
    response: () => {
      return { 'code': 200, 'data': [{ 'id': 1, 'systemName': '创新人才首年生活补贴' }, { 'id': 2, 'systemName': '大学生见实习补贴' }, { 'id': 3, 'systemName': '姑苏重点产业紧缺人才计划' }, { 'id': 4, 'systemName': '乐居工程' }, { 'id': 5, 'systemName': '优秀人才贡献奖' }, { 'id': 6, 'systemName': '高等院校、科研院所引才补贴' }, { 'id': 7, 'systemName': '企业通过人才中介机构招财引智的引才补贴' }], 'msg': '', 'identifier': '' }
    }
  },
  {
    url: '/rcbonestopController/secured/applicationInfo/query',
    type: 'post',
    response: () => {
      return { 'code': 200, 'data': { 'total': 543, 'dataList': [{ 'personName': '陈麟', 'personIdCard': '320103198304301773', 'enterpriseName': '中国银河证券股份有限公司太仓上海东路证券营业部', 'enterpriseScn': null, 'subsidyType': 4, 'subsidyTypeName': '乐居工程', 'amount': null, 'applyStatus': '退回修改', 'grantBatchCount': 8, 'issuedGrantCount': 7, 'assignedSubsidyAmount': 3323, 'assignAmount': null, 'bankCardNumber': '6228888880000888874', 'bankName': '中国银行', 'grantStatus': 1, 'grantStatusName': '未发放', 'contactPeople': '高阳', 'contactMobilePhone': '18120121030', 'grantSubsidyList': [{ 'grantMoney': -100, 'grantDate': '2021-01-15 09:14:42', 'bankCardNumber': '6228888880000888874', 'bankName': '中国银行' }, { 'grantMoney': -9, 'grantDate': '2021-01-14 16:22:34', 'bankCardNumber': '6228888880000888874', 'bankName': '中国银行' }, { 'grantMoney': 200, 'grantDate': '2021-01-14 16:21:10', 'bankCardNumber': '6228888880000888874', 'bankName': '中国银行' }, { 'grantMoney': 222, 'grantDate': '2021-01-14 15:12:49', 'bankCardNumber': '6228888880000888874', 'bankName': '中国银行' }, { 'grantMoney': 888, 'grantDate': '2021-01-14 15:11:55', 'bankCardNumber': '6228888880000888874', 'bankName': '中国银行' }, { 'grantMoney': 123, 'grantDate': '2021-01-14 15:02:41', 'bankCardNumber': '6228888880000888874', 'bankName': '中国银行' }, { 'grantMoney': 1111, 'grantDate': '2021-01-13 19:08:56', 'bankCardNumber': '6228888880000888874', 'bankName': '中国银行' }, { 'grantMoney': 888, 'grantDate': '2021-01-12 14:22:14', 'bankCardNumber': '6228888880000888874', 'bankName': '中国银行' }] }, { 'personName': '金曦', 'personIdCard': '43052519920712615X', 'enterpriseName': '苏州市烟草公司太仓分公司', 'enterpriseScn': null, 'subsidyType': 4, 'subsidyTypeName': '乐居工程', 'amount': null, 'applyStatus': '未提交', 'grantBatchCount': 123, 'issuedGrantCount': null, 'assignedSubsidyAmount': 12345678, 'assignAmount': null, 'bankCardNumber': null, 'bankName': null, 'grantStatus': 1, 'grantStatusName': '未发放', 'contactPeople': '朱雪斐', 'contactMobilePhone': '18013779161', 'grantSubsidyList': [] }, { 'personName': '王浩', 'personIdCard': '430421197410208070', 'enterpriseName': '苏州德能电机股份有限公司', 'enterpriseScn': null, 'subsidyType': 4, 'subsidyTypeName': '乐居工程', 'amount': null, 'applyStatus': '退回修改', 'grantBatchCount': 777, 'issuedGrantCount': null, 'assignedSubsidyAmount': null, 'assignAmount': null, 'bankCardNumber': null, 'bankName': null, 'grantStatus': 1, 'grantStatusName': '未发放', 'contactPeople': '温晓峰', 'contactMobilePhone': '18262090999', 'grantSubsidyList': [] }, { 'personName': '周海', 'personIdCard': '34082519840921131X', 'enterpriseName': '苏州天顺新能源科技有限公司', 'enterpriseScn': null, 'subsidyType': 4, 'subsidyTypeName': '乐居工程', 'amount': null, 'applyStatus': '退回修改', 'grantBatchCount': 11, 'issuedGrantCount': null, 'assignedSubsidyAmount': null, 'assignAmount': null, 'bankCardNumber': null, 'bankName': null, 'grantStatus': 1, 'grantStatusName': '未发放', 'contactPeople': '冯斯玮', 'contactMobilePhone': '15106224115', 'grantSubsidyList': [] }, { 'personName': '宋明莉', 'personIdCard': '210502199407270329', 'enterpriseName': '中美冠科生物技术（太仓）有限公司', 'enterpriseScn': null, 'subsidyType': 4, 'subsidyTypeName': '乐居工程', 'amount': null, 'applyStatus': '退回修改', 'grantBatchCount': null, 'issuedGrantCount': null, 'assignedSubsidyAmount': null, 'assignAmount': null, 'bankCardNumber': null, 'bankName': null, 'grantStatus': 1, 'grantStatusName': '未发放', 'contactPeople': '王小敏', 'contactMobilePhone': '18550301363', 'grantSubsidyList': [] }, { 'personName': '夏申江', 'personIdCard': 'HG178435', 'enterpriseName': '中建材光电装备（太仓）有限公司', 'enterpriseScn': null, 'subsidyType': 4, 'subsidyTypeName': '乐居工程', 'amount': null, 'applyStatus': '未通过县区审核', 'grantBatchCount': null, 'issuedGrantCount': null, 'assignedSubsidyAmount': null, 'assignAmount': null, 'bankCardNumber': null, 'bankName': null, 'grantStatus': 1, 'grantStatusName': '未发放', 'contactPeople': '邱宏', 'contactMobilePhone': '17751659235', 'grantSubsidyList': [] }, { 'personName': '梁立军', 'personIdCard': '120105197603160318', 'enterpriseName': '爱克奇换热技术（太仓）有限公司', 'enterpriseScn': null, 'subsidyType': 4, 'subsidyTypeName': '乐居工程', 'amount': null, 'applyStatus': '未提交', 'grantBatchCount': null, 'issuedGrantCount': null, 'assignedSubsidyAmount': null, 'assignAmount': null, 'bankCardNumber': null, 'bankName': null, 'grantStatus': 1, 'grantStatusName': '未发放', 'contactPeople': '王秋艳', 'contactMobilePhone': '13606240997', 'grantSubsidyList': [] }, { 'personName': '辛钟成', 'personIdCard': '220221195403140072', 'enterpriseName': '苏州广奥医药开发有限公司', 'enterpriseScn': null, 'subsidyType': 4, 'subsidyTypeName': '乐居工程', 'amount': null, 'applyStatus': '退回修改', 'grantBatchCount': null, 'issuedGrantCount': null, 'assignedSubsidyAmount': null, 'assignAmount': null, 'bankCardNumber': null, 'bankName': null, 'grantStatus': 1, 'grantStatusName': '未发放', 'contactPeople': '曹晖', 'contactMobilePhone': '13962623131', 'grantSubsidyList': [] }, { 'personName': '刘聪', 'personIdCard': '370883198812232558', 'enterpriseName': '新大洲本田摩托（苏州）有限公司', 'enterpriseScn': null, 'subsidyType': 4, 'subsidyTypeName': '乐居工程', 'amount': null, 'applyStatus': '通过市级复审', 'grantBatchCount': null, 'issuedGrantCount': null, 'assignedSubsidyAmount': null, 'assignAmount': null, 'bankCardNumber': null, 'bankName': null, 'grantStatus': 1, 'grantStatusName': '未发放', 'contactPeople': '宰义强', 'contactMobilePhone': '15051966822', 'grantSubsidyList': [] }, { 'personName': '盛建民', 'personIdCard': '370204196408170837', 'enterpriseName': '苏州艾提木商务咨询有限公司', 'enterpriseScn': null, 'subsidyType': 4, 'subsidyTypeName': '乐居工程', 'amount': null, 'applyStatus': '通过市级复审', 'grantBatchCount': null, 'issuedGrantCount': null, 'assignedSubsidyAmount': null, 'assignAmount': null, 'bankCardNumber': null, 'bankName': null, 'grantStatus': 1, 'grantStatusName': '未发放', 'contactPeople': '诸凯', 'contactMobilePhone': '13915777795', 'grantSubsidyList': [] }] }, 'msg': '', 'identifier': '' }
    }
  }

]
