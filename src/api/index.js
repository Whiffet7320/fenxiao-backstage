import axios from 'axios';
import Vue from 'vue'
import router from '../router.js';
import urls from './url.js';
const vue = new Vue()
let myPost = axios.create({
    baseURL: urls.baseUrl,
    method: 'post',
    timeout: 1000,
})
let myGet = axios.create({
    baseURL: urls.baseUrl,
    method: 'get',
    timeout: 1000,
})
let myDelete = axios.create({
    baseURL: urls.baseUrl,
    method: 'delete',
    timeout: 1000,
})

myDelete.interceptors.request.use(config => {
    if (sessionStorage.getItem("token")) {
        config.headers = {
            'X-Token': sessionStorage.getItem("token"),
            'Access-Control-Allow-Origin': '*',
            "access-control-allow-credentials": "true"
        }
    }
    return config;
}, error => {
    console.log(error);
    return Promise.reject();
})
myPost.interceptors.request.use(config => {
    if (sessionStorage.getItem("token")) {
        config.headers = {
            'X-Token': sessionStorage.getItem("token"),
            'Access-Control-Allow-Origin': '*',
            "access-control-allow-credentials": "true"
        }
    }
    return config;
}, error => {
    console.log(error);
    return Promise.reject();
})
myGet.interceptors.request.use(config => {
    if (sessionStorage.getItem("token")) {
        config.headers = {
            'X-Token': sessionStorage.getItem("token"),
            'Access-Control-Allow-Origin': '*',
            "access-control-allow-credentials": "true"
        }
    }
    return config;
}, error => {
    console.log(error);
    return Promise.reject();
})
myPost.interceptors.response.use(response => {
    // console.log(response)
    if (response.status === 200) {
        return response.data
    }
    // if (response.status === 200 && response.data.code == '200') {
    //     vue.$message({
    //         message: response.data.msg,
    //         type: "success",
    //     });
    //     return response.data;
    // }
    else {
        vue.$message.error(response.data.info);
        Promise.reject();
    }
}, error => {
    //错误跳转
    console.log(error)
    if (error.response.status === 500) {
        console.log(vue)
        if (error.response.data.info != '参数错误') {
            vue.$message.error(error.response.data.info);
        }
    } else if (error.response.status === 401) {
        sessionStorage.setItem("isLogin", false);
        console.log(sessionStorage.getItem("isLogin"));
        router.push({
            path: "/"
        })
        router.go(0)
        return Promise.reject();
    } else if (error.response.status === 404) {
        vue.$alert('页面不存在', '404错误', {
            confirmButtonText: '确定',
        });
        return Promise.reject();
    } else if (error.response.status === 402) {
        vue.$alert('请求次数限制', '402错误', {
            confirmButtonText: '确定',
        });
        return Promise.reject();
    } else {
        if (error.response.data.info != '参数错误') {
            vue.$message.error(error.response.data.info);
        }
    }
})
myGet.interceptors.response.use(response => {
    if (response.status === 200) {
        return response.data
    }
    // if (response.status === 200 && response.data.code == '200') {
    //     vue.$message({
    //         message: response.data.msg,
    //         type: "success",
    //     });
    //     return response.data;
    // }
    else {
        vue.$message.error(response.data.info);
        Promise.reject();
    }
}, error => {
    //错误跳转
    console.log(error);
    if (error.response.status === 500) {
        if (error.response.data.info != '参数错误') {
            vue.$message.error(error.response.data.info);
        }
    } else if (error.response.status === 401) {
        sessionStorage.setItem("isLogin", false);
        console.log(sessionStorage.getItem("isLogin"));
        router.push({
            path: "/"
        })
        router.go(0)
        return Promise.reject();
    } else if (error.response.status === 404) {
        vue.$alert('页面不存在', '404错误', {
            confirmButtonText: '确定',
        });
        return Promise.reject();
    } else if (error.response.status === 402) {
        vue.$alert('请求次数限制', '402错误', {
            confirmButtonText: '确定',
        });
        return Promise.reject();
    } else {
        if (error.response.data.info != '参数错误') {
            vue.$message.error(error.response.data.info);
        }
    }
})

export default {
    login(username, password) {
        return myPost({
            url: urls.login,
            data: {
                username,
                password,
            }
        })
    },
    bannerIndex(page, limit) {
        return myPost({
            url: urls.bannerIndex,
            data: {
                page,
                limit
            }
        })
    },
    bannerUpload(image, title) {
        return myPost({
            url: urls.bannerUpload,
            data: {
                image,
                title
            },
        })
    },
    categoryAdd(pid, title) {
        return myPost({
            url: urls.categoryAdd,
            data: {
                pid,
                title
            },
        })
    },
    categoryIndex(page, limit) {
        return myPost({
            url: urls.categoryIndex,
            data: {
                page,
                limit
            }
        })
    },
    categoryEdit(category_id, pid, title) {
        return myPost({
            url: urls.categoryEdit,
            data: {
                category_id,
                pid,
                title
            },
        })
    },
    categoryDel(category_id) {
        return myPost({
            url: urls.categoryDel,
            data: {
                category_id,
            },
        })
    },
    orderIndex(page, limit, status, search,export1) {
        return myPost({
            url: urls.orderIndex,
            data: {
                page,
                limit,
                status,
                search,
                export:export1
            }
        })
    },
    productUpload_product_pic(image) {
        return myPost({
            url: urls.productUpload_product_pic,
            data: {
                image,
            },
        })
    },
    productAdd_product(obj) {
        return myPost({
            url: urls.productAdd_product,
            data: {
                ...obj,
            },
        })
    },
    productIndex(keyword,category_id,page, limit) {
        return myPost({
            url: urls.productIndex,
            data: {
                keyword,
                category_id,
                page,
                limit,
            }
        })
    },
    productAdd_sku(sku, product_id) {
        return myPost({
            url: urls.productAdd_sku,
            data: {
                sku,
                product_id
            }
        })
    },
    productDel_sku(sku_id) {
        return myPost({
            url: urls.productDel_sku,
            data: {
                sku_id
            }
        })
    },
    productEdit_product(obj) {
        return myPost({
            url: urls.productEdit_product,
            data: {
                ...obj
            }
        })
    },
    productProduct_pic_del(pic_id_arr, product_id) {
        return myPost({
            url: urls.productProduct_pic_del,
            data: {
                pic_id_arr,
                product_id
            }
        })
    },
    productProduct_pic_add(pic_id_arr, product_id) {
        return myPost({
            url: urls.productProduct_pic_add,
            data: {
                pic_id_arr,
                product_id
            }
        })
    },
    commitIndex(page, limit, keyword) {
        return myPost({
            url: urls.commitIndex,
            data: {
                page,
                limit,
                keyword
            }
        })
    },
    productDelete_product(product_id) {
        return myPost({
            url: urls.productDelete_product,
            data: {
                product_id
            }
        })
    },
    otherIndex() {
        return myPost({
            url: urls.otherIndex,
        })
    },
    otherWeb_config_detail() {
        return myGet({
            url: urls.otherWeb_config_detail,
        })
    },
    otherWeb_config_edit(only_tag, name, value) {
        return myPost({
            url: urls.otherWeb_config_edit,
            data: {
                only_tag,
                name,
                value
            }
        })
    },
    couponsIndex(page, limit) {
        return myPost({
            url: urls.couponsIndex,
            data: {
                page,
                limit,
            }
        })
    },
    couponsAdd(obj) {
        return myPost({
            url: urls.couponsAdd,
            data: {
                ...obj
            }
        })
    },
    couponsDel(coupons_id) {
        return myPost({
            url: urls.couponsDel,
            data: {
                coupons_id
            }
        })
    },
    userIndex(keyword, page, limit,export1) {
        return myPost({
            url: urls.userIndex,
            data: {
                keyword,
                page,
                limit,
                export:export1
            }
        })
    },
    userCoupons2user(user_id, coupons_id) {
        return myPost({
            url: urls.userCoupons2user,
            data: {
                user_id,
                coupons_id
            }
        })
    },
    otherAdd_article(title, content, tag) {
        return myPost({
            url: urls.otherAdd_article,
            data: {
                title,
                content,
                tag
            }
        })
    },
    otherArticle_list(tag, page, limit) {
        return myPost({
            url: urls.otherArticle_list,
            data: {
                tag,
                page,
                limit
            }
        })
    },
    otherEdit_article(article_id, title, content, tag) {
        return myPost({
            url: urls.otherEdit_article,
            data: {
                article_id,
                title,
                content,
                tag
            }
        })
    },
    otherDel_article(article_id) {
        return myPost({
            url: urls.otherDel_article,
            data: {
                article_id,
            }
        })
    },
    otherUpload_attach(image) {
        return myPost({
            url: urls.otherUpload_attach,
            data: {
                image,
            }
        })
    },
    orderOrder2express(order_id, express_id, express_number) {
        return myPost({
            url: urls.orderOrder2express,
            data: {
                order_id,
                express_id,
                express_number
            }
        })
    },
    orderExpress_list() {
        return myGet({
            url: urls.orderExpress_list,
        })
    },
    commitDel_commit(commit_id) {
        return myPost({
            url: urls.commitDel_commit,
            data: {
                commit_id
            }
        })
    },
    bannerDel(banner_id) {
        return myPost({
            url: urls.bannerDel,
            data: {
                banner_id
            }
        })
    },
    productGet_desc(product_id){
        return myPost({
            url: urls.productGet_desc,
            data: {
                product_id
            }
        })
    },
    orderWithdraw_list(obj){
        return myPost({
            url: urls.orderWithdraw_list,
            data: {
                ...obj
            }
        })
    },
    otherNearly_thirty_date(){
        return myPost({
            url: urls.otherNearly_thirty_date,
        })
    },
    userUser_children(obj){
        return myPost({
            url: urls.userUser_children,
            data: {
                ...obj
            }
        })
    },
    otherMoney_and_level(){
        return myPost({
            url: urls.otherMoney_and_level,
        })
    },
    orderChange_withdraw_status(obj){
        return myPost({
            url: urls.orderChange_withdraw_status,
            data: {
                ...obj
            }
        })
    },
    orderOrder_by_time(way,export1){
        return myPost({
            url: urls.orderOrder_by_time,
            data: {
                way,
                export:export1
            }
        })
    },
}