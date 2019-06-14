import React from 'react';

class Viewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainImage: props.phone.images[0],
    };
  }

  selectImage(imageUrl) {
    this.setState({
      mainImage: imageUrl,
    });
  }

  render() {
    return (
      <div>
        <img
          className="phone"
          alt="Large"
          src={this.state.mainImage}
        />

        <button onClick={this.props.onBack}>
          Back
        </button>

        <button>Add to basket</button>

        <h1>{this.props.phone.name}</h1>
        <p>{this.props.phone.description}</p>

        <ul className="phone-thumbs">
          { this.props.phone.images.map(imageUrl => (
            <li key={imageUrl}>
              <img
                alt="thumbnail"
                src={imageUrl}
                onClick={() => {
                  this.selectImage(imageUrl)
                }}
              />
            </li>
          )) }
        </ul>
      </div>
    );
  }
}

export default Viewer;
