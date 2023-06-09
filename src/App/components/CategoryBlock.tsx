export const CategoryBlock = ({title, onClick}: { title: string, onClick: () => void }) => {
    return (
        <div className={'w-60 h-32 rounded-xl border hover:shadow-md duration-300 flex items-center justify-center font-bold'} onClick={() => onClick()}>
            <p>{title}</p>
        </div>
    )
}