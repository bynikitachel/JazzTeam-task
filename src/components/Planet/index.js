import planetsInfo from '../../JSON/planetsInfo.json'

const Planet = () => {
    const renderPlanets = () => {
        return planetsInfo.planets.map(({ name, description }, i) => (
            <div key={i} className="planet">
                <div className="container-planet">
                    <div className={`image-planet ${name}`} />
                </div>
                <div className="description-planet">{description}</div>
            </div>
        ))
    }

    return renderPlanets()
}

export default Planet
