import React from 'react';
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";
import '@testing-library/jest-dom';


describe('Puebas con el componente <GifExpertApp />', () => {
    test('Debe mostrar correctamente el GifExpertApp', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    });
    test('debe de mostrar una lista de categorias', () => {
        const categories = ['one punch', 'attack on titan'];
        const wrapper = shallow(<GifExpertApp defaultCategories = { categories }/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);


    });
    
    
    
})
