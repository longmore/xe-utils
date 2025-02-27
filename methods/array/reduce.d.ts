/**
 * 接收一个函数作为累加器，数组中的每个值（从左到右）开始合并，最终为一个值
 * @param array 数组
 * @param iteratee 回调
 * @param initialValue 默认值
 * @example 
 */
export declare function reduce(array: Array<any>, iteratee?: Function, initialValue?: any): any;

export default reduce