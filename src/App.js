import './App.css';
import ColorPicker from './ColorPicker';

function App() {
    const COLORS = ['#FF5733', '#33FF57', '#5733FF', '#F1C40F', '#D35400', '#000000', "#FFFFFF"];

    return (
        <div className="App">
            <div className='Container'>
                <h1>Color Picker</h1>
                <ColorPicker colors={COLORS} />
            </div>
        </div>
    );
}

export default App;
