
function Button({ children, onClick }) {
    return <button onCLick={onClick} >{children}</button>;
}

export default Button;