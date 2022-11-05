import logo from './logo.svg';
import './App.css';

export default function App() {
    const videoData = [
        {
            name: 'Miss Scarlet',
            present: true,
            rooms: {
                kitchen: false,
                ballroom: false,
                conservatory: false,
                'dining room': false,
                'billiard room': false,
                library: false
            }
        },
        {
            name: 'Rusty',
            present: false,
            rooms: {
                kitchen: false,
                ballroom: false,
                conservatory: false,
                'dining room': false,
                'billiard room': false,
                library: false
            }
        },
        {
            name: 'Colonel Mustard',
            present: true,
            rooms: {
                kitchen: false,
                ballroom: false,
                conservatory: false,
                'dining room': false,
                'billiard room': false,
                library: false
            }
        },
        {
            name: 'Professor Plum',
            present: true,
            rooms: {
                kitchen: false,
                ballroom: false,
                conservatory: false,
                'dining room': false,
                'billiard room': false,
                library: false
            }
        }
    ]

    const filter = () => {
        let tmp = []
        let count = 0
        videoData.map(item => {
            if (item.present === true) {
                count++
                tmp.push(item)
            }
        })
        console.log('Jumlah: ', count)
        console.log('Hasil: ', tmp)
    }

    return (
        <div className="App">
            <button onClick={() => filter()}>Click me</button>
        </div>
    );
}
