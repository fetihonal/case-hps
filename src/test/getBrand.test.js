const data = require('./data.json');
const getBrand = require('../services/index').getBrand

test('Liste içerisinde markaları uniq olarak alma', () => {
    var colorExpected = [
        {
            "value": "Samsung",
            "label": "Samsung",
            "length": 2
        },
        {
            "value": "Samsung",
            "label": "Samsung",
            "length": 2
        },
        {
            "value": "Apple",
            "label": "Apple",
            "length": 1
        }]
    expect(getBrand(data)).toEqual(expect.arrayContaining(colorExpected));
});