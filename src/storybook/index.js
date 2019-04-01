import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {
  Container,
  LinksContainer,
  LinksGroup,
  LinkWrapper,
  ExtensionContainer,
  Title,
} from './styles';
import logo from './cat.jpeg'
function Splash() {
  return (
    <div>
      <h1>Hello, I'm the splash</h1>
      <img src={logo} width="150" />
    </div>
  );
}

class Storybook extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Container>
            <LinksContainer>
              <LinksGroup>
                <Title>Waiting Screens</Title>
                <LinkWrapper><Link to="/splash">Splash Screen</Link></LinkWrapper>
              </LinksGroup>
            </LinksContainer>
            <ExtensionContainer>
              <Route path="/splash" component={Splash} />
            </ExtensionContainer>
          </Container>
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<Storybook />, document.getElementById('app'));
