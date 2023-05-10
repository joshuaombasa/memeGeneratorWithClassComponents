import React from "react";

export default class Hero extends React.Component {

    render() {
        console.log(this.props.state.randomImg)
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
                     onClick={this.props.state.getRandomImage}
                    >Get Image</button>
                </form>
                <div className="img-display-section">
                    <h1 className="top-txt">{this.props.state.topText}</h1>
                    <h1 className="bottom-txt">{this.props.state.bottomText}</h1>
                    <img src={this.props.state.randomImg}  className="meme-img" />
                </div>
            </main>
        )
    }
}