function CardWork(props){
    return(
        <div className="flex flex-col justify-center items-center container w-56 shadow-md rounded-sm">
          <img
            src={props.src}
            alt="imgcss"
            width={500}
            height={250}
          />
          <p className="flex items-center justify-center">{props.title}</p>
        </div>
    )
}

export default CardWork