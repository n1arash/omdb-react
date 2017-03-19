import React, { Component } from 'react';
import Button  from './Components/Button';
import Container from './Components/Container';
import Row from './Components/Row'
import Movie from './Components/Movie'

class App extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleYearChange = this.handleYearChange.bind(this)
    this.state = {
      res : null
    }
  }
  handleTitleChange(){
    this.setState({
      title : this.title.value
    })
  }

  handleYearChange(){
    this.setState({
      year : this.year.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.title !== '' && this.state.year !== ''){
      fetch(`http://www.omdbapi.com/?t=${this.state.title}&y=${this.state.year}`)
      .then(response => {
        response.json().then(res => this.setState({
          res : res
        }))
      })
    }
     console.log(this.state);
  }
  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" ref={node => {this.title = node}} className="form-control" onChange={this.handleTitleChange} />

          </div>
          <div className="form-group">
            <label htmlFor="year">Year</label>
            <input type="number" id="year" className="form-control" ref={node => {this.year = node}} onChange={this.handleYearChange}/>
          </div>
          <Button type="submit" className="btn btn-primary">Search</Button>
        </form>
        <Row>
          <Movie res={this.state.res} />
        </Row>
      </Container>

    );
  }
}

export default App;
