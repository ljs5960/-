import './Button.css';

const Button = ({ text, type, onCLick }) => {
    const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

    return (
        <button
            className={['Button', `Button_${btnType}`].join(' ')}
            onClick={onCLick}>
            {text}
        </button>
    )
};
export default Button