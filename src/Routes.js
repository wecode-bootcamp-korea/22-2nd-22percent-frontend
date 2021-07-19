import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import MyPage from './pages/MyPage/MyPage';
import Main from './pages/Main/Main';
import RealEstate from './pages/RealEstate/RealEstate';
import RealEstateDetail from './pages/RealEstateDetail/RealEstateDetail';
import Apply from './pages/Apply/Apply';
import Footer from './components/Footer/Footer';

import GlobalStyle from '../src/styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';

class Routes extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Router>
            <Nav />
            <Switch>
              <Route exact path="/signin" component={SignIn} />
              <Route eaxct path="/signup" component={SignUp} />
              <Route eaxct path="/mypage" component={MyPage} />
              <Route exact path="/" component={Main} />
              <Route exact path="/deals/real-estate" component={RealEstate} />
              <Route exact path="/deals/:id" component={RealEstateDetail} />
              <Route exact path="/investments/apply" component={Apply} />
            </Switch>
            <Footer />
          </Router>
        </ThemeProvider>
      </>
    );
  }
}

export default Routes;
