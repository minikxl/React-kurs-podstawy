import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "../../context";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";

import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import TwittersView from "../TwittersView/TwittersView";

class Root extends React.Component {
  state = {
    twitter: [
      {
        image:
          "https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg",
        title: "Dan Abramov",
        link: "https://twitter.com/dan_abramov",
      },
      {
        image:
          "https://pbs.twimg.com/profile_images/1257111841508974592/2_rEXazl_400x400.jpg",
        title: "Ryan Florence",
        description:
          "Making React accessible for users and developers at https://reach.tech . Online " +
          "learning, workshops, OSS, and consulting.",
        link: "https://twitter.com/ryanflorence",
      },
    ],
    article: [],
    note: [],
    isModalOpen: false,
  };

  addItem = (ev, newItem) => {
    ev.preventDefault();

    this.setState((prevState) => ({
      //twitter: [...[twitter], newTwitter]
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));

    this.closeModal();
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route path="/" exact component={TwittersView} />
            <Route path="/articles" component={ArticlesView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
