interface BotaoProps {
    color?: 'green' | 'blue' | 'gray'
    children: any
    className?: string
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-${props.color}-400 to-${props.color}-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
    
}