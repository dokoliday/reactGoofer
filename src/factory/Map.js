import React, { Component } from 'react';
import '../App.css';
import Goofer from './Goofer';
import tree from "../baobab.png"
import gooferImg from '../goofer.png'
import faker from 'faker';
import { whereToGo, filterNearPeople } from '../utils/randomeMove'


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

  timeTomove() {
    setInterval(async () => {
      const newArrayGooferdeplaced = this.state.goofers.map(goofer => {
        filterNearPeople(this.state.goofers, whereToGo(goofer, this.props.x, this.props.y));
        let go = goofer.deplacement[Math.floor(Math.random() * (goofer.deplacement.length))];
        console.log(go,'go')
        goofer[go]();
        return goofer;
      });
       this.setState({
         goofers:newArrayGooferdeplaced
       })

    }, this.props.time)
  };


  componentDidMount() {
    this.generateMap();
    this.createGoofer(this.props.nbGoofers);
    this.timeTomove()
  };

  createGoofer(quantite) {
    for (let i = 0; i < quantite; i++) {

      const x = Math.ceil(Math.random() * this.props.x - 1);
      const y = Math.ceil(Math.random() * this.props.y - 1);
      if (this.state.goofers.filter(anyGoofer =>
        (anyGoofer.x === x && anyGoofer.y === y).length === 0)) {
        this.state.goofers.push(new Goofer(faker.name.firstName(), x, y));
      } else {
        return
      }
    }
  };

  render() {
    if (!(this.state.mapGenerale.length > 0)) {
      return (<div>no data</div>)
    } else {
      console.log('tiiiiiiiiiiiiiiiiii', this.state.goofers)
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