import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <header>
            <section className="container">
                <h1>Feedr</h1>
                <nav>
                    <ul>
                        <li>News Source: <span>Source Name</span>
                        <ul id="sourceMenuMain"></ul>
                        </li>
                    </ul>
                <section id="search">
                    <input type="text" name="name" value=""></input>
                </section>
                </nav>
            </section>
        </header>
        );
    }
}

export default Header;