import {AffairType} from '../HW2'

let initialState: AffairType[]

beforeEach(() => {
    initialState = [
        {id: 1, name: 'React', priority: 'high'},
        {id: 2, name: 'anime', priority: 'low'},
        {id: 3, name: 'games', priority: 'low'},
        {id: 4, name: 'work', priority: 'high'},
        {id: 5, name: 'html & css', priority: 'middle'},
        {id: 6, name: 'porn', priority: 'low'},
    ]
})

test('filter by all', () => {
    const newState = initialState.filter(elem => elem.priority)
    expect(newState.length).toBe(6)
})
test('filter by high', () => {
    const newState = initialState.filter(elem => elem.priority === 'high')
    expect(newState.length).toBe(2)
})
test('filter by middle', () => {
    const newState = initialState.filter(elem => elem.priority === 'middle')
    expect(newState.length).toBe(1)
})
test('filter by low', () => {
    const newState = initialState.filter(elem => elem.priority === 'low')
    expect(newState.length).toBe(3)
})
