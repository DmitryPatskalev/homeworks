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

test('delete 1', () => {
    const newState = initialState.filter(elem => elem.id)
    expect(newState.length - 1).toBe(5)
})
test('delete 2', () => {
    const newState = initialState.filter(elem => elem.id)
    expect(newState.length - 2).toBe(4)
})
test('delete 3', () => {
    const newState = initialState.filter(elem => elem.id)
    expect(newState.length - 3).toBe(3)
})
test('delete 4', () => {
    const newState = initialState.filter(elem => elem.id)
    expect(newState.length - 4).toBe(2)
})
test('delete 5', () => {
    const newState = initialState.filter(elem => elem.id)
    expect(newState.length - 5).toBe(1)
})
test('delete 6', () => {
    const newState = initialState.filter(elem => elem.id)
    expect(newState.length - 6).toBe(0)
})
