/**
 * 清空对象; defs如果不传（清空所有属性）、如果传对象（清空并继承)、如果传值(给所有赋值)
 * @param obj 对象
 * @param defs 默认值
 * @param assigns 值
 */
export declare function clear(obj: object | Array<any>, defs?: object, assigns?: object): object;

export default clear