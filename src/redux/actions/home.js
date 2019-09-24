// 一个页面对应一个action
// 放一些actin-creator 函数返回action
import * as Types from '../action-types';
export const setCurrentLesson=(lesson)=>{
    return {
        type:Types.SET_CURRENT_LESSON,
        lesson
    }
}