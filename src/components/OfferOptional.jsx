import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const OfferOptional = ({ optional }) => {
    return (
        <div className="optionalList">
        	<span className="icon"><CheckCircleOutlineIcon sx={{ fontSize: 25 }} /></span>
        	<span className="text">{optional}</span>
        </div>
    );
};

export default OfferOptional;
