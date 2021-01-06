import React from 'react';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory";
import '@testing-library/jest-dom';

describe('Pruebas en el componente AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = { setCategories }/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = { setCategories }/>);
    })


    test('Debe mostrarse correctamente AddCategory', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    test('Debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value =  'Hola mundo';
        input.simulate('change', { target: { value: value } });
        expect(wrapper.find('p').text().trim()).toBe(value + "");
    });

    test('No debe de postear la informacion en submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} } );
        expect( setCategories ).not.toHaveBeenCalled();
    });
    test('debe llamar el setCategory y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value =  'Hola mundo';
        input.simulate('change', { target: { value: value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} } );
        expect( setCategories ).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value') ).toBe('');
    })
    
    
    
    
})
