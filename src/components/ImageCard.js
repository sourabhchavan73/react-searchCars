import React, { Component } from 'react'


export default class ImageCard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state={spans : 0 }
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // check the image data
        // console.log(this.imageRef);
        // console.log(this.imageRef.current.clientHeight);
        this.imageRef.current.addEventListener('load', this.spanController);
    }

    spanController = () => {
       const height = this.imageRef.current.clientHeight;
       const spans = Math.ceil(height / 10);
       console.log(spans)
       this.setState({ spans })
    }

    render() {
        const { urls, description} = this.props.image; //desructure
        
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    ref={this.imageRef}
                    src={urls.regular} 
                    alt={description} 
                />
            </div>
        )
    }
}
