import React, { Component } from 'react';
import unsplash from '../api/unsplash'
import Searchbar from './Searchbar';
import ImageList from './ImageList'

class App extends React.Component {
  state = { images: [] };


   onSearchSubmit = async (term) => {
    // console.log(term)
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
      // move this api call in new file
      // headers: {
      //   Authorization: 'Client-ID hTxfm1ryv9CLtlAWTRGDhjfWTKlyDZBErRxXfKbJmb0'
      //   }
    });
      // 1st method to deal with data
    // .then(response => {
    //   console.log(response.data.results)
    // });

    // 2nd way best way
    // console.log(response.data.results);
    this.setState({ images: response.data.results });
  }

  testController = (id)=> {
    const deleteimg = this.state.images.filter(image => image.id !== id)
    this.setState({ images: deleteimg })
    console.log(this.state.images)
  }

  render(){

    const totalResults = (
      <div>
        Found: {this.state.images.length} results
      </div>
    )

    return (
      <div className="ui container" style={{marginTop: '1rem'}}>
        <Searchbar onSubmit={this.onSearchSubmit}  />
          { this.state.images.length > 0 ? totalResults : null }
        <ImageList onchanging={this.testController} images={this.state.images} />
      </div>
    );
  }
}

export default App;
