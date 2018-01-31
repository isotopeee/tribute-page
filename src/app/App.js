import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import Header from './Header';
import Timeline from './Timeline';
import Footer from './Footer';
import $timeline from './$timeline';
import './App.css';
import BaguioImg from './baguio.jpg';
import BeachImg from './beach.jpg';
import GraduationImg from './graduation.jpg';
import NewYearImg from './new-year.jpg';

const data = {
  1: {
    id: 1,
    title: 'Baguio',
    date: 'September 2016',
    description:
      "Together with her family, we went to Baguio to celebrate Rome's birthday. At first, I really thought that the trip is just one of her bullshits but as it turned out, it was the beginning of our #ExploreAndDiscoverGoals. She introduced me to her family and I’ve got the chance to get to know her better as we toured around the great attractions in the city. I won’t forget when she hitched a bicycle with me and she has no idea that I don’t really know how to ride a bike and she was freaking out when we are about to crash.",
    image: BaguioImg,
  },
  2: {
    id: 2,
    title: "Rome's Graduation",
    date: 'October 2016',
    description:
      'Time flies, my best friend is about to graduate and I’m still attending some classes because I love my school that much. Anyways, I get the chance to have my advance graduation pictorial together with Rome and our other friend, Axell. I saw her her do the ‘walling’ pose and some ‘pabebe’ poses. It wasn’t that bad after all. Though some my colleagues and family affiliates were confused that I’m about to graduate that time.',
    image: GraduationImg,
  },
  3: {
    id: 3,
    title: 'Beach Getaway',
    date: 'December 2016',
    description:
      'Another #ExporeAndDiscover moment for us when we’ve got invited to join the company’s team building of our (let’s just say) close friend, Tito Man. I really don’t remember when was the last time I’ve been on a beach so it’s a great experience for me personally. Plus, I’m with Rome and Tito Man so I’ve lived and enjoyed every moment.',
    image: BeachImg,
  },
  4: {
    id: 4,
    title: 'First New Year Together',
    date: 'January 2017',
    description:
      'We’ve celebrated the New Year together for the first time. Although a certified backstabbing, pathetic ass-kisser was around during those times, I’m grateful that we’ve been together. It’s quite rare for me to celebrate holidays with someone other than my family. New year, new life ahead of us.',
    image: NewYearImg,
  },
};

class App extends Component {
  componentDidMount() {
    this.$tributePage = $(this.tributePage);

    $timeline();
    this.$tributePage.timeline(this.tributePage);
  }

  render() {
    return (
      <Fragment>
        <div
          id="tribute-page"
          className="timeline-container"
          ref={tributePage => {
            this.tributePage = tributePage;
          }}
        >
          <Header />
          <Timeline data={data} />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
