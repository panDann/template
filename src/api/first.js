import {request} from '@/utils/request.js'


// test example
export const test = (param)=>{
    return request(`test/test`,param,/** {method='GET',header:{'':''}}*/ )
}

