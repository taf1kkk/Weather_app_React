import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div>
                {this.props.city &&

                    <div className="block" >
                        <div className='block_first'>
                            <p className="temp">Temperature: {this.props.temp}</p>
                            <h1>Location: {this.props.city},{this.props.country} </h1>
                            <p>Sunrise: {this.props.sunrise}</p>
                            <p>Sunset: {this.props.sunset}</p>

                        </div>

                    </div>

                }
            </div>

        )
    }
}

export default Weather;