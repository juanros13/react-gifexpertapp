import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'


describe('Pruebas en el hook useFetchGifs', () => {
    test('debe retornar el estado incial', async() => {
        // const {data:images, loading} = useFetchGifs('one punch')

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('one punch'));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        console.log(data, loading);
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    test('Debe retonrar un arreglo de imagenes y loading en false', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('one punch'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        console.log(data, loading);
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
    

})
