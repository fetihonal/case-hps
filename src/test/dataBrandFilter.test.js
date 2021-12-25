const data = require('./data.json');
const getVisibleItems = require('../services/index').getVisibleItems

test('Listeyi markaya göre filtreleme', () => {
    var dataExpected = [
        {
            "createdAt": "2021-12-25T05:03:46.493Z",
            "name": "Small Steel Fish",
            "images": "http://placeimg.com/640/480/technics",
            "price": "712.00",
            "color": "black",
            "brand": "Samsung",
            "id": "1"
        },
        {
            "createdAt": "2021-12-25T05:03:46.493Z",
            "name": "Small Steel",
            "images": "http://placeimg.com/640/480/technics",
            "price": "12.00",
            "color": "black",
            "brand": "Samsung",
            "id": "1"
        }]
    expect(getVisibleItems(data, { color: [], searchBy: '', brand: [{ value: 'Samsung' }], sort: '' })).toEqual(expect.arrayContaining(dataExpected));
});