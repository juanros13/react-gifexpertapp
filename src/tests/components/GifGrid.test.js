import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import '@testing-library/jest-dom';
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruenas para el componente <GrifGid />', () => {
    const categoria = 'One punch';
    test('Debe mostrarse correctamente el GrifGrid', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category= { categoria } />);
        
        expect(wrapper).toMatchSnapshot();
        
    });
    test('debe mostrar items cuando se cargan imnaegens con useFetchGifs ', () => {

        const gifs = [
            {
                id: 'abc',
                title: 'Cualquier cosa',
                url: 'http://lcalhost/loquesea.jpg'
            },
            {
                id: 'abc',
                title: 'Cualquier cosa',
                url: 'http://lcalhost/loquesea.jpg'
            }
        ];
        useFetchGifs.mockReturnValue({
          data : gifs,
          loading: false
        });
        const wrapper = shallow(<GifGrid category= { categoria } />);

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length)



    });
    
    
})
