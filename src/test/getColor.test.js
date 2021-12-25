const data = require('./data.json');
const getColor = require('../services/index').getColor

test('Liste içerisinde renkleri uniq olarak alma', () => {
    var colorExpected = [
        {
            "value": "black",
            "label": "black",
            "length": 2
        },
        {
            "value": "gray",
            "label": "gray",
            "length": 1
        }]
    expect(getColor(data)).toEqual(expect.arrayContaining(colorExpected));
});