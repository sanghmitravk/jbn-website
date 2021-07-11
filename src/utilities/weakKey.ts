const { WeakMap: globalWeakMap } = global
const map = new globalWeakMap()
let componentIndex = 0

export const weakKey = (obj: any): any => {
  let key: any = map.get(obj)
  if (!key) {
    key = `weak-key-${componentIndex++}`
    console.log("obj.length", obj.length)
    obj.length > 0 && map.set(obj, key)
  }
  return key
}
