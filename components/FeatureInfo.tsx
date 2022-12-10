
const FeatureInfo: React.FC<{title: string}> = (props) => {

    return (
        <div className=" z-50 absolute text-white top-28 left-10 info">
            <h1 className="text-4xl font bold">{props.title}</h1>
          </div>
    )

}

export default FeatureInfo