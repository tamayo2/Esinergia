

export default function BasicCard({title= 'Juan'}: { title: string}) {

    return(
        <div className='min-w-[200px] min-h-[100px]'>
            Esta es una card básica
            {title}
        </div>
    )
}