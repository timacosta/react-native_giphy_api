import * as requests from './index'


//test api index.js file get route
describe('api index.js', () => {
    it('should return a function', () => {
        expect(typeof requests.getTrendGifs).toBe('function')
    })
})
