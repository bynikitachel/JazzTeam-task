import Planet from '../../components/Planet';
import './index.css';

const InfoPage = () => {
    return (
        <>
            <h1>Information about planets of the solar system</h1>
            <div className='container-planets'>
                <Planet />
            </div>
        </>
    );
}

export default InfoPage;