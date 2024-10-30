

const LinkRedes = ({ red, link }) => {
    return (
        <div className='pr-4 cursor-pointer inline-flex hover:text-violet-900 pt-3 '>
            <a className='bg-violet-300 rounded-sm text-base font-medium px-2 py-1 tracking-tighter no-underline' target="_blank" href={link}>
                {red}
            </a>
        </div>
    );
};

export default LinkRedes;
