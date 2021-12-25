import React, { useState, useEffect } from 'react';
import cn from 'classnames'
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Select from 'react-select'
import { useSelector, useDispatch, connect } from 'react-redux';
import { getColor, getBrand, getVisibleItems } from '../src/services/index';


import useGetData from '../src/services/getDataService';


import Header from './components/Header'
import Filter from './components/Filter'
import ProductCard from './components/ProductCard'
import Pagination from './components/Pagination'


const App = (props) => {

    const dispatch = useDispatch();
    const { data } = useGetData();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const filters = useSelector(content => content.filters);
    const cart = useSelector(content => content.cart);

    const listItem = getVisibleItems(data, filters)

    // Brand ve Color filterleri seçilen filtrelerin dışındakiler kaybolmadan gözüksün sayıları sıfır olsun istiyorsak listItem yerine data ile beslenmelidir.
    const colors = getColor(listItem).sort((a, b) => a.value.localeCompare(b.value));
    const brands = getBrand(listItem).sort((a, b) => a.value.localeCompare(b.value));
    //

    const colorsLength = getColor(listItem);
    const brandsLength = getBrand(listItem);

    const [colorSelect, setColorSelect] = useState([]);
    const [brandSelect, setBrandSelect] = useState([]);

    const sortArr = [{ value: 'En Düşük Fiyat', label: 'asc' }, { value: 'En Yüksek Fiyat', label: 'desc' }, { value: 'En Yeniler (A>Z)', label: 'newest' }, { value: 'En Yeniler (Z>A)', label: 'lowest' }]
    const [sort, setSort] = useState('');


    useEffect(() => {
        handleFilter()

    }, [colorSelect, brandSelect, sort]);

    const handleSearch = (e) => {
        if (e.target.value.length === 0) {
            setColorSelect([])
            setBrandSelect([])
            setSort('')
            dispatch({ type: 'FILTER_DATA', brand: [], color: [], sort: '' })
            dispatch({ type: 'SEARCH_BY', search: '' })
        }
        if (e.target.value.length > 2) {
            setColorSelect([])
            setBrandSelect([])
            setSort('')
            dispatch({ type: 'FILTER_DATA', brand: '', color: '', sort: '' })
            dispatch({ type: 'SEARCH_BY', search: e.target.value })
        }
    }

    const handleFilter = () => {
        dispatch({ type: 'FILTER_DATA', brand: brandSelect ? brandSelect : [], color: colorSelect ? colorSelect : [], sort: sort ? sort.label : '' })
    }

    const handleColorSelect = (i) => {
        if (colorSelect.filter(f => f.value === i.value).length > 0) {
            setColorSelect(colorSelect.filter(f => f.value !== i.value))
        } else {
            setColorSelect([...colorSelect, i = { ...i.active = true, ...i }])
        }
    }
    const handleBrandSelect = (i) => {
        if (brandSelect.filter(f => f.value === i.value).length > 0) {
            setBrandSelect(brandSelect.filter(f => f.value !== i.value))
        } else {
            setBrandSelect([...brandSelect, i = { ...i.active = true, ...i }])
        }
    }

    const addToCart = (i) => {
        setTimeout(function () {
            i.lastUpdated = new Date();
            dispatch({ type: 'ADD_TO_CART', count: cart.count + 1, data: i })
        }, 100);
    }


    // Pagination
    const dataLimit = 12
    const [currentPage, setCurrentPage] = useState(1);
    const getPaginatedData = (currentPage, dataLimit) => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return listItem.slice(startIndex, endIndex);
    };
    return (
        <>
            <Header onChange={handleSearch} />
            <Container>
                <Row>
                    <Col className="custom-breadcrumb">
                        <h3>iPhone iOS cep telefonu</h3>
                        {filters.searchBy && <span>Aranan Kelime : <b>{filters.searchBy}</b></span>}
                    </Col>
                    <Col className="text-right text-md-right">
                        <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)}>
                            <DropdownToggle
                                tag={'div'}
                                className={cn("custom-dropdown-btn", sort && 'active')}
                            >
                                Sıralama
                                <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.34375 0L5.34375 5L10.3438 0L0.34375 0Z" fill="#ccc" />
                                </svg>

                            </DropdownToggle>
                            <DropdownMenu right>
                                {sortArr.map((i, key) => <DropdownItem key={key} tag="a"><div className={cn(sort.value === i.value && 'active')} onClick={() => { sort.value === i.value ? setSort('') : setSort(i) }}>
                                    {i.value}
                                </div></DropdownItem>)}
                            </DropdownMenu>
                        </Dropdown>
                    </Col>

                </Row>
                <Row>
                    <Col lg={2}>
                        <Filter title="Renk" onClick={(i) => handleColorSelect(i)} data={colors} lengthData={colorsLength} active={colorSelect} />
                        <Filter title="Sıralama" onClick={(i) => { sort.value === i.value ? setSort('') : setSort(i) }} active={[{ value: sort.value }]} data={sortArr} />
                        <Filter title="Marka" onClick={(i) => handleBrandSelect(i)} lengthData={brandsLength} data={brands} active={brandSelect} />
                    </Col>
                    <Col lg={10}>


                        <Row>

                            {
                                getPaginatedData(currentPage, dataLimit).length > 0 ? getPaginatedData(currentPage, dataLimit)?.map((item, key) =>
                                    <Col key={key} lg={3}><ProductCard title="Marka" notBuy={cart && cart.data?.filter((i) => i.id === item.id).length > 0} data={item} addToCart={() => addToCart(item)} /></Col>
                                ) : 'Kriterlere uygun ürün bulunamadı'
                            }

                        </Row>
                        <Row> {listItem.length > dataLimit && <Pagination data={listItem} page={currentPage} onChange={setCurrentPage} />}</Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default App
