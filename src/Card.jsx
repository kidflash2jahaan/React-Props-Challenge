export default function Card(props) {
    return (<div className="card">
        <div className="top">
            {/* eslint-disable-next-line react/prop-types */}
            <h2 className="name">{props.name}</h2>
            {/* eslint-disable-next-line react/prop-types */}
            <img className="circle-img" src={props.imgURL} alt="avatar_img"/>
        </div>
        <div className="bottom">
            {/* eslint-disable-next-line react/prop-types */}
            <p className="info">{props.phone}</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p className="info">{props.email}</p>
        </div>
    </div>)
}