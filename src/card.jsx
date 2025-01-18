

const index = ({state:{thumbnailUrl, title}}) => {

    console.log(thumbnailUrl);
    console.log(title);
    
    

    return (
        <>
            <div className="w-[300px] h-auto shadow-md hover:shadow-xl rounded-sm">
                <img src={thumbnailUrl} alt="img" />
                <div>
                    <h4 className="px-1 py-2 ">
                       {title}
                    </h4>
                </div>
            </div>
        </>
    )
}

export default index;