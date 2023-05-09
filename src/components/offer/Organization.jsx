import '../../styles/offer/organization.css'

const Organization = () => {

    const work = [
        'scrum',
        'waterfall',
        'rozwój kilku projektów jednocześnie',
        'każdy ma wpływ na wybór narzędzi i technologii',
        'każdy ma wpływ na produkt',
        'tworzenie kodu od zera',
        'rozwijanie istniejącego kodu'
    ]
    const team = [
        'scrum master',
        'frontend dev',
        'backend dev'
    ]

    return (
        <div className="organization element">
            <div className="title"> Tak organizujemy naszą pracę </div>
            <div className="table">
                <div className="row">
                    <div className="subtitle">
                        Praca
                    </div>
                    <div className="description">
                        {work.map(one => (
                            <>
                                <p> {one} </p>
                            </>
                        ))}
                    </div>
                </div>
                <div className="row">
                    <div className="subtitle">
                        Skład zespołu
                    </div>
                    <div className="description" >
                        {team.map(one => (
                            <>
                                <p> {one} </p>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Organization;