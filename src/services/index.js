
export const getColor = (list) => {
    var uniqueColor = [];
    // eslint-disable-next-line
    list.map((product, index) => {
        if (product.color) {
            // eslint-disable-next-line
            if (uniqueColor.map((o) => o.value).indexOf(product.color) === -1) {
                uniqueColor.push({ value: product.color, label: product.color, length: getLength(list, 'color', product.color) });
            }
        }
    })
    return uniqueColor;
}

export const getBrand = (list) => {
    var uniqueBrand = [];
    // eslint-disable-next-line
    list.map((product, index) => {
        if (product.brand) {
            // eslint-disable-next-line
            if (uniqueBrand.map((o) => o.value).indexOf(product.brand) === -1) {
                uniqueBrand.push({ value: product.brand, label: product.brand, length: getLength(list, 'brand', product.brand) });
            }
        }
    })
    return uniqueBrand;
}

export const getLength = (list, key, name) => {
    return list.filter(item => item[key] === name).length;
}

export const getVisibleItems = (data, { color, searchBy, brand, sort }) => {
    const genereteData = data.filter(product => {
        const colors = color.length > 0 ? color.filter(color => color.value === product.color).length > 0 ? true : false : true;
        const brands = brand.length > 0 ? brand.filter(brand => brand.value === product.brand).length > 0 ? true : false : true;
        const searchByName = (product.name.toLowerCase().indexOf(searchBy.toLowerCase()) > -1)
        return colors && searchByName && brands;
    })
    if (sort === "newest") {
        genereteData.sort((a, b) => a.name.localeCompare(b.name)).sort((a, b) => a.createdAt - b.createdAt);
    } else if (sort === "lowest") {
        genereteData.sort((a, b) => b.name.localeCompare(a.name)).sort((a, b) => b.createdAt - a.createdAt);
    }
    else if (sort === "desc") {
        genereteData.sort((a, b) => Number(b.price) - Number(a.price))

    } else if (sort === "asc") {
        genereteData.sort((a, b) => Number(a.price) - Number(b.price))
    }

    return genereteData;
}
