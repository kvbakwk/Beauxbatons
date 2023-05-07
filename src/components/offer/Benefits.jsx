import '../../styles/offer/benefits.css'

import { HealingIcon, MoreTimeIcon, SchoolIcon, } from '../../Icons.jsx'

const Benefits = () => {

    const style = {
        sx: { color: 'var(--primary)' }
    }

    const benefits = [
        {
            text: 'Prywatna opieka medyczna',
            icon: <HealingIcon {...style} />
        },
        {
            text: 'Elastyczny czas pracy',
            icon: <MoreTimeIcon {...style} />
        },
        {
            text: 'Dofinansowanie do kursów i szkoleń',
            icon: <SchoolIcon {...style} />
        }
    ]

    return (
        <div className="benefits element">
            <div className="title">Benefity</div>
            <div className="tiles">
                {benefits.map(benefit => (
                    <div className="benefit" key={benefit.text}>
                        {benefit.icon}
                        {benefit.text}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Benefits;    