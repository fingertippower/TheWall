//这个是主页下面的信箱的常量
export const LETTER_DISPLAY = 'LETTER_DISPLAY';
//主页下面的主页的常量
export const INDEX_DISPLAY = 'INDEX_DISPLAY';
//主页下面的个人中心的常量
export const PERSONAL_DISPLAY = 'PERSONAL_DISPLAY';

export const CONCERN_CLICK='CONCERN_CLICK';

export const FANS_CLICK='FANS_CLICK';
//发送信件页面读取对应日期下的信件
export const LETTER_MSG = 'LETTER_MSG';
//点击事件，点击previous时信件的index值会减少
export const LETTER_INDEX_PREVIOUS = 'LETTER_INDEX_PREVIOUS'
//点击事件，点击next时信件的index值会增加
export const LETTER_INDEX_NEXT = 'LETTER_INDEX_NEXT'
//发送信件页面刚刚创建的时候，将后台的数据中的第一个赋值给页面
export const GET_LETTER_MSG = 'GET_LETTER_MSG'
// 信件页面点击已发送按钮时候的已发送按钮和收件箱样式的变化
export const LETTER_SEND_BUTTON_STYLE = 'LETTER_SEND_BUTTON_STYLE'
//信件页面点击收件箱的时候收件箱按钮和已发送按钮的样式变化
export const LETTER_GET_BUTTON_STYLE = 'LETTER_GET_BUTTON_STYLE'
//主页所有表白信件的获取并且展示
export const GET_INDEX_CONFESSION_LETTER_LIST = 'GET_INDEX_CONFESSION_LETTER_LIST'
//用户点击主页表白信件的喜欢按钮后，其对应的喜欢数值将会加一
export const CONFESSION_LETTER_LIKE = 'CONFESSION_LETTER_LIKE'
//用户店家主页表白信件的不喜欢按钮后，其对应的数值将会加一并且图片样式会改变
export const CONFESSION_LETTER_DISLIKE = 'CONFESSION_LETTER_DISLIKE'
//用户点击主页表白信件下面的收藏按钮之后，用户会收藏此信件并且收藏数值会加一
export const CONFESSION_LETTER_HEART = 'CONFESSION_LETTER_HEART'