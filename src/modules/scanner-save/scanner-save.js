import Saveitem from './save-item/save-item';
import './scanner-save.css';

const SaveBlok = ({data}) => {
    const elem = data.map(item => {
        const {id, ...anotherProps} = item;
        return (
            <Saveitem 
                key={id}
                {...anotherProps}/> 
        );  
    })
    return (
        <div className="save__block">
            {elem}
        </div>
    );
};

export default SaveBlok;
