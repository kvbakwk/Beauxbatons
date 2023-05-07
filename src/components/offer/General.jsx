import '../../styles/offer/general.css'

import { LocationOnIcon, TimelapseIcon, MapsHomeWorkIcon, MyLocationIcon, ArticleIcon, TapAndPlayIcon } from '../../Icons'

const General = () => {

    const style = {
        sx: { color: 'var(--iconColor)' }
    }

    const parameters = [
        {
            title: 'Lokalizacja firmy',
            describe: 'ul. Karpia 56/58, Łódź',
            icon: <LocationOnIcon {...style} />
        },
        {
            title: 'Wymiar pracy',
            describe: 'Pełny etat',
            icon: <TimelapseIcon {...style} />
        },
        {
            title: 'Typ pracy',
            describe: 'Zdalna',
            icon: <MapsHomeWorkIcon {...style} />
        },
        {
            title: 'Miejsce pracy',
            describe: 'Polska',
            icon: <MyLocationIcon {...style} />
        },
        {
            title: 'Typ umowy',
            describe: 'O pracę',
            icon: <ArticleIcon {...style} />
        },
        {
            title: 'Typ rekrutacji',
            describe: 'Zdalna',
            icon: <TapAndPlayIcon {...style} />
        }
    ]

    return (
        <div className="general element">
            <div className="header"> Fullstack Developer (JavaScript) </div>
            <div className="parameters">
                {parameters.map(parameter => (
                    <div className="parameter" key={parameter.title}>
                        <div className="icon">
                            {parameter.icon}
                        </div>
                        <div className="text">
                            <div className="title">
                                {parameter.title}
                            </div>
                            <div className="desc">
                                {parameter.describe}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default General;