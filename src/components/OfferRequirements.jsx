import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const OfferRequirements = ({ requirement }) => {
    return (
        <div className="requirementsList">
        	<span className="icon"><ErrorOutlineIcon sx={{ fontSize: 25 }} /></span>
        	<span className="text">{requirement}</span>
        </div>
    );
};

export default OfferRequirements;