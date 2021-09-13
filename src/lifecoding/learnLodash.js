
const _ = import('lodash')
const array = [3,5,2,6,8]

const result = array.map(elem => elem * elem)
console.log({result})

const resultLodash = _.map(array, elem => elem * elem)
console.log({resultLodash})