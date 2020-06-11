import React from 'react';
import Header from "../src/components/Header/Header.tsx";
import Footer from "../src/components/Footer/Footer.tsx";
import Content from "../src/components/Content/Content.tsx";
import PropTypes from 'prop-types'

class App extends React.Component {

        constructor() {
            super();
        }
        render() {
            return (<div>
                <Header />
                <div className="container-fluid">
                <Content />
                </div>
                <Footer />
            </div>
                
            );
            }

        }
export default App;