import React, { Component } from 'react';
import '../App.css';
import Goofer from './Goofer';
import tree from "../baobab.png"
import gooferImg from '../goofer.png'
import faker from 'faker';
import gooferMove from '../utils/randomeMove'


class Map extends Component {

  state = {
    mapGenerale: [],
    goofers: [],
  };

  generateMap() {
    this.setState({
      mapGenerale: new Array(this.props.x)
        .fill([])
        .map((e, index) => new Array(this.props.y)
          .fill([]))
    })
  };

  moving() {
    setInterval(() => {
      this.gooferMove();
    }, this.props.time)
  };

  gooferMove() {
    return this.setState({ goofers: gooferMove(this.state.goofers, this.props.x, this.props.y) })
  }

  componentDidMount() {
    this.generateMap();
    this.createGoofer(this.props.nbGoofers);
    gooferMove(this.state.goofers, this.props.x, this.props.y);
    // this.moving();
  };

  createGoofer(quantite) {
    for (let i = 0; i < quantite; i++) {
      const x = Math.ceil(Math.random() * this.props.x - 1);
      const y = Math.ceil(Math.random() * this.props.y - 1);
      this.state.goofers.push(new Goofer(faker.name.firstName(), x, y));
    }
  };

  render() {
    if (!(this.state.mapGenerale.length > 0)) {
      return (<div>no data</div>)
    } else {
      return (
        <div className="container">
          <div className="d-flex flex-row" >
            {this.state.mapGenerale
              .map((e, indexX) => {
                return (
                  <div key={indexX} >
                    {e.map((e, indexY) => {
                      if ((indexX + indexY) % 2 !== 0) {
                        if (this.state.goofers.find(goofer => (goofer.x === indexX && goofer.y === indexY))) {
                          return <div className="bleu" key={indexY}>
                            <img src={gooferImg} className="goofer" alt="" />
                            <p>{this.state.goofers.filter(goofer => (goofer.x === indexX && goofer.y === indexY))[0].name}</p>
                          </div>
                        } else {
                          return <div className="bleu" key={indexY}>
                            <img src={tree} className="goofer" alt="" />
                          </div>
                        }
                      } else if ((indexX + indexY) % 2 === 0) {
                        if (this.state.goofers.find(goofer => (goofer.x === indexX && goofer.y === indexY))) {
                          return <div className="rouge" key={indexX} >
                            <img src={gooferImg} className="goofer" alt="" />
                            <p>{this.state.goofers.filter(goofer => (goofer.x === indexX && goofer.y === indexY))[0].name}</p>
                          </div>
                        } else {
                          return <div className="rouge" key={indexX}>
                            <img src={tree} className="goofer" alt="" />
                          </div>
                        }
                      } return null
                    })}
                  </div>
                )
              })}
          </div>
        </div>
      )
    }
  }
}
export default Map;