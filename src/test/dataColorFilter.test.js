const data = require('./data.json');
const getVisibleItems = require('../services/index').getVisibleItems

test('Listeyi renklere göre filtele', () => {
    var dataExpected = [
        {
            "createdAt": "2021-12-25T07:27:51.315Z",
            "name": "Intelligent Concrete Pants",
            "images": "http://placeimg.com/640/480/technics",
            "price": "920.00",
            "color": "gray",
            "brand": "Apple",
            "id": "2"
        }]
    expect(getVisibleItems(data, { color: [{ value: 'gray' }], searchBy: '', brand: [], sort: '' })).toEqual(expect.arrayContaining(dataExpected));
});