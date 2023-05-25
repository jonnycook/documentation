import { Component } from "react";
import { component, styled } from "./component";
import { X, x, XObject } from "./XObject";

const state = X({
  tick: 0
})

XObject.observe(state, 'tick', () => {
  console.log('tick changed', x(state));
})

@component
class Wrapper extends Component<{ children? }> {
  static styles = styled.div`
    font-weight: bold;
  `;

  render(Container?) {
    // @component makes React Components reactive,
    // so this component will automatically update
    // when state.tick is modified
    return (
      <Container className="customClass">
        {this.props.children} ({state.tick})
      </Container>
    );
  }
}

@component
class Example extends Component {
  // @component wraps the render method with a styled a custom
  // Styled Component
  static styles = styled.div`
    color: red;

    /* @component allows React Components to be directly
    * referenced in Styled Component stylesheets */
    ${Wrapper} {
      color: blue;
    }
  `;

  
  render() {
    return (
      <>
        <p>Hello <Wrapper>World</Wrapper></p>
        <button onClick={() => state.tick++}>Tick</button>
      </>
    )
  }
}
