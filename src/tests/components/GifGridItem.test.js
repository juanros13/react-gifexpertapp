import React from 'react';
import { shallow } from 'enzyme'

import  GifGridItem  from '../../components/GifGridItem';


describe('Pruebas en el <GifGridItem />', () => {
    
    const titulo = 'Esto es un titulo';
    const url = 'http://localhost/algo.jpg';
    let wrapper = shallow( <GifGridItem title={ titulo } url = { url } /> );
    
    // beforeEach( () =>  {

    //      wrapper = shallow( <GifGridItem /> );

    // });



    test('debe de mostrar <GifGridItem /> correctamente', () => {
       

        
        expect( wrapper ).toMatchSnapshot();

    });
    test('Debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(titulo);
    });
    test('Debe de tener la imagen al url y alr de los props', () => {
        const img = wrapper.find('img');
        console.log(img.prop('src'));
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( titulo );
    });
    test('El div debe tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        
        // console.log(div.prop('className').split(' ')[2]);
        // expect(div.prop('className').split(' ')[2]).toBe('animate__fadeIn');\
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true); 


        //expect(div.prop('class'))
        
    })
    
    
})
