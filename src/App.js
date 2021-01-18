import React from "react";
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages, LANGUAGES } from "./const/languages";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: "list", langs: [] }
  }

  componentDidMount() {
    console.log("App.js:componentDidMount");
    this.fetchLanguages();
  }

  async fetchLanguages() {
    const langs = await getLanguages();
    this.setState({langs});
  }

  addLang(lang) {
    this.setState({
      tab: "list",
      langs: [...this.state.langs, lang]
    });
  }
  render() {
    const { tab, langs } = this.state;
    return (
      <div>
        <header>
          <ul>
            <li onClick={() => this.setState({tab: "list"})}>リストです</li>
            <li onClick={() => this.setState({tab: "form"})}>フォームです</li>
          </ul>
        </header>
        {
          this.state.tab === "list" ? <List langs={langs} /> : <Form onAddLang={(lang) => this.addLang(lang)} />
        }
      </div>
    )
  }
}

export default App;
