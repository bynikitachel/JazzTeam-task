import planetsInfo from '../../JSON/planetsInfo.json';

const Planet = () => {

    const renderPlanets = () => {
        return planetsInfo.planets.map((planet, i) => (
            <div key={i} className='planet'>
                <div className='container-planet'>
                    <div className={`image-planet ${planet.name}`}/>
                </div>
                <div className='description-planet'>
                    {planet.description}
                </div>
            </div>
        ));
    };

    return renderPlanets();
}

export default Planet;