/**
 * 对象中的值中的每一项运行给定函数,如果该函数对每一项都返回 true,则返回 true,否则返回 false
 * @param array 数组
 * @param iteratee 回调
 * @param context 上下文
 */
export declare function every(array: Array<any>, iteratee: Function, context?: any): Array<any>;

export default every