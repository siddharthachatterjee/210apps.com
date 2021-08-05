export function sort(array: any[ ], 
    getProperty: ((val: any) => number) = num => num, 
    setProperty: ((variable: any, val: number) => void) = (v, val) => v = val,
    largestToSmallest?: boolean | string,
    spliceSecond?: boolean
): any[ ] {

    let greatest = array[0]
    let sortedArray = []

    array.forEach(() => {
        let least = [ greatest ]
        for (let i in array) {
            if (getProperty(array[i]) <= getProperty(least[0]) && !sortedArray.some(val => getProperty(val) === getProperty(array[i]))) {
                least = array.filter(val => getProperty(val) === getProperty(array[i])) 
            } else if (getProperty(array[i]) >= getProperty(greatest)) {
                setProperty(greatest, getProperty(array[i]))
            } 
        }
        
        if (least.length + sortedArray.length <= array.length) {
            sortedArray.push(...least)
        }
    })
    
    spliceSecond && sortedArray.splice(sortedArray.length - 2, 1)
    return (
        (largestToSmallest === true || largestToSmallest === 'true') ? 
        sortedArray.reverse() : 
        sortedArray
    )
}
