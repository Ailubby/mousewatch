import { wxRequest } from '@/utils/wxRequest';

const domain = 'http://localhost:5000'

//查询商品详情信息
const getAccountDetail = (params) => wxRequest(params, apiMall + '/api/v1/account');