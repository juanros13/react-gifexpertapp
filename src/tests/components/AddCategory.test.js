import React from 'react';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory";
import '@testing-library/jest-dom';

describe('Pruebas en el componente AddCategory', () => {

    const setCategories = () => {};

    test('Debe mostrarse correctamente AddCategory', () => {
        const wrapper = shallow(<AddCategory setCategories = { setCategories }/>);
        expect( wrapper ).toMatchSnapshot();


    })
    
})
