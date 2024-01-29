//proxy object
const handler = {
    get: function(target, name) {
        return name === 'name' ? '${target.a} ${target.b}' : target[name]
    }
}

const p = new Proxy({a: 'KUNDAL', b: 'IS AUMUMU ZANGIN'}, handler)
console.log(p,name) //KUNDAL IS AUMUMU ZANGIN
//name 속성 등 특정 속성에 접근 할 떄 그 부분을 가로채서 어떠한 로직을 강제할 수 있는 것이 프록시 객체 입니다.

//프록시 객체를 이용한 옵저버 패턴
function createReactiveObject(target, callback) {
	const proxy = new Proxy(target, {
		set(obj, prop, value) {
			if(value !== obj[prop]) {
				const prev = obj[prop]
				obj[prop] = value
				callback(`${prop}가 [${prev}] >> [${value}]로 변경되었습니다. `)
			}
			return true
		}
	})
	return proxy
}

const a = {
	"형규" : "솔로"
}

const b = createReactiveObject(a, console.log)
b.형규 = "솔로"
b.형규 = "커플"

// 형규가 [솔로] >> [커플]로 변경되었습니다.
// set() 함수를 통해 속성에 대한 접근을 “가로채”서 형규라는 속성이 솔로에서 커플로 되는것을 감시 가능하다.

//Vue.js 3.0 의 옵저버 패턴

function createReactiveObject(
    target: Target, 
    isReadonly: boolean, 
    baseHandlers: ProxyHandler(any), 
    collectionHandlers: ProxyHandler(any), 
    proxyMap: WeakMap<Target, any) 
    {
    if (!isObject(target)) {
        if (DEV) {
            console.warn("value cannot be made reactive: ${String(target)!")
        }
        return target
    }
    if (
    target [ReactiveFlags.RAW] &&
                !(isReadonly && target[ReactiveFlags.IS_REACTIVE])
    ){
    return target
    }
    const existingProxy = proxyMap. get (target)
    if (existingProxy) {
        return existingProxy
    }
    const targetType = getTargetType (target)
    if (targetType === TargetType.INVALID) {
        return target
    }
    const proxy = new Proxy (
    target,
    targetType=== TargetType.COLLECTION ? collectionHandlers:
            baseHandlers
    )
    proxyMap.set(target, proxy)
    return proxy;
};

/*한번 이해해 보자 (코드리뷰) 해보자!!*/