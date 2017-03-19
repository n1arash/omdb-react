import React,{Component} from 'react';
import Row from './Row'


export default class Movie extends Component {
  constructor(props)
  {
    super(props);

  }


  render(){
    if(this.props.res !== null && this.props.res.Response !== "False"){
      return (<div className="highlight">
        <h1>{this.props.res.Title}</h1>
        <img src={this.props.res.Poster} alt={this.props.res.Title}/>
        <Row>
          <div>
            <h3>Release Date: {this.props.res.Released}</h3>
            <h3>Genre : {this.props.res.Genre}</h3>
            <h3>Wirter : {this.props.res.Writer}</h3>
            <h3>Director : {this.props.res.Director}</h3>
            <p>Actors : {this.props.res.Actors}</p>
            <h5>Awards : {this.props.res.Awards}</h5>

            <h6>Type : {this.props.res.Type}</h6>
            <h6>ImdbID : {this.props.res.imdbID}</h6>

          </div>
        </Row>
      </div>)
    }else{
      return <h1>No Movie Found</h1>
    }
  }


}
