import '../../styles/offer/information.css'

import { CodeIcon } from '../../Icons'

const Information = () => {

    const data = {
        title: 'O firmie',
        icon: <CodeIcon sx={{ fontSize: '5rem' }} />,
        description: 'Jesteśmy GoodieCodes. U nas możesz pracować nad różnymi projektami w zależności od Twoich potrzeb, doświadczenia oraz potrzeb naszych. Na naszej stronie możesz zobaczyć zrealizowane przez nas projekty.Rzeczy, nad którymi pracujemy to: aplikacje desktopowe, webowe i mobilne, programy, skrypty, pluginy czy boty.'
    }

    return (
        <div className="information element">
            <div className="banner">
                {data.icon}
                <span>{data.title}</span>
            </div>
            <div className="text">
                <p> {data.description} </p>
            </div>
        </div>
    );
}

export default Information;