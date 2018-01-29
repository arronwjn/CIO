const ROOT_URL = 'http://cio.ueepub.cn';


export const API_URL = {
    GET_ARTICLE_DETAILS: {
        domain: ROOT_URL,
        apiUrl: '/public/portal/apiarticle/get_article_details',
        author: '王超',
        fetchUrl: ROOT_URL + '/public/portal/apiarticle/get_article_details',
        remark: '文章详情',
        method: 'POST',
        // tableName : 'ez_store',
    },
    GET_ACTITY_DETAILS: {
        domain: ROOT_URL,
        apiUrl: '/public/portal/apiarticle/get_actity_details',
        author: '王超',
        fetchUrl: ROOT_URL + '/public/portal/apiarticle/get_actity_details',
        remark: '活动详情',
        method: 'POST',
    },
    GETTOPICINFO: {
        domain: ROOT_URL,
        apiUrl: '/public/group/group/getTopicInfo',
        author: '王超',
        fetchUrl: ROOT_URL + '/public/group/group/getTopicInfo',
        remark: '话题详情',
        method: 'POST',
    },
    HELP_INFO: {
        domain: ROOT_URL,
        apiUrl: '/public/help/help/help_info',
        author: '王超',
        fetchUrl: ROOT_URL + '/public/help/help/help_info',
        remark: '帮助详情',
        method: 'POST',
    },
}