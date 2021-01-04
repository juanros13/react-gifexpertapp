import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con helper getGifs', () => {
    test('Debe traer 10 elementos', async() => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10)
        
    });
    test('Debe traer 10 elementos', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0)
        
    });
    
});
