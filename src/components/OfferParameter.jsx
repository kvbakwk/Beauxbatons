const OfferParameter = ({ icon, title, desc }) => {
    return (
        <div className="element">
            <div className="icon">
                {icon}
            </div>
            <div className="text">
                <div className="title">
                    {title}
                </div>
                <div className="desc">
                    {desc}
                </div>
            </div>
        </div>
    );
}

export default OfferParameter;