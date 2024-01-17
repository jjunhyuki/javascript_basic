import './Button.css';

function Button({ children, onClick, color = 'blue', className = '' }) {
    const classNames = `Button ${color} ${className}`;
    return (
    <button className={classNames} onCLick={onClick} >
        {children}
    </button>
    );
}

export default Button;