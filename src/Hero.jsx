import React from "react";

export default class Hero extends React.Component {

    render() {
        
        return (
            <main className="hero">
                <form className="meme--text--from">
                    <div className="inputs--contaier">
                        <input
                            type="text"
                            className="top--text--input"
                            placeholder="Top text"
                            name="topText"
                            value={this.props.state.topText}
                            onChange={this.props.handleChange}
                        />
                        <input
                            type="text"
                            className="bottom--text--input"
                            placeholder="Bottom"
                            name="bottomText"
                            value={this.props.state.bottomText}
                            onChange={this.props.handleChange}
                        />

                    </div>
                    <button className="get--img--btn"
                     onClick={this.props.getRandomImage}
                    >Get Image</button>
                </form>
            </main>
        )
    }
}