import {TitleBlock, ColumnsBlock, ImageBlock, TextBlock} from './classes/blocks'
import image from './assets/pic01.png';

const text = `Заниметельные концепции JS`;

export const model = [

    new TextBlock('Конструктор сайтов на JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1rem'
        }
    }),

    new ImageBlock(image, {
        styles: {
            padding: '1rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '80%',
            height: 'auto'
        },
        alt: 'Это описание картинки'
    }),

    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),

    new ColumnsBlock( ['Приложение на чистом JavaScript, без использования билиотек', 'Принципы ООП и SOLID'], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    })
];
