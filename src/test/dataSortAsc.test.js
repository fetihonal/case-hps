const data = require('./data.json');
const getVisibleItems = require('../services/index').getVisibleItems

test('aasdsc sort işlemi', () => {
    var dataExpected = [
        {
            createdAt: '2021-12-25T05:03:46.493Z',
            name: 'Small Steel',
            images: 'http://placeimg.com/640/480/technics',
            price: '12.00',
            color: 'black',
            brand: 'Samsung',
            id: '1'
        },
        {
            createdAt: '2021-12-25T05:03:46.493Z',
            name: 'Small Steel Fish',
            images: 'http://placeimg.com/640/480/technics',
            price: '712.00',
            color: 'black',
            brand: 'Samsung',
            id: '1'
        },
        {
            createdAt: '2021-12-25T07:27:51.315Z',
            name: 'Intelligent Concrete Pants',
            images: 'http://placeimg.com/640/480/technics',
            price: '920.00',
            color: 'gray',
            brand: 'Apple',
            id: '2'
        }

    ]
    expect(getVisibleItems(data, { color: [], searchBy: '', brand: [], sort: 'asc' })).toEqual(expect.arrayContaining(dataExpected));
});