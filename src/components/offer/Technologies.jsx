import '../../styles/offer/technologies.css'

const Technologies = () => {

    const required = [
        'JavaScript',
        'TypeScript',
        'SQL',
        'Node.js',
        'React.js',
        'CSS',
        'GNU/Linux'
    ]
    const optional = [
        'Java',
        'Python ',
        'Bootstrap',
        'Electron',
        'PostgreSQL',
        'AWS'
    ]

    return (
        <div className="technologies element">
            <div className="title"> Języki i technologie z których korzystamy </div>
            <div className="subtitle"> Wymagane </div>
            <div className="techs">
                {required.map(tech => (
                    <div className="tech" key={tech}>{tech}</div>
                ))}
            </div>
            <div className="subtitle"> Mile widziane </div>
            <div className="techs">
                {optional.map(tech => (
                    <div className="tech" key={tech}>{tech}</div>
                ))}
            </div>
        </div>
    );
}

export default Technologies;