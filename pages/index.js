import fetch from "isomorphic-unfetch";

const Index = props => (
  <div className="image">
    <quote>{props.quote}</quote>
    <style jsx global>{`
      #__next {
        display: flex;
        align-items: center;
        height: 100vh;
      }
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        background-color: #432117;
        background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      }
      .image {
        background: url("static/photo.jpg") top center no-repeat #88724a;
        background-size: cover;
        background-blend-mode: multiply;
        height: auto;
        max-height: 540px;
        max-width: 960px;
        min-height: 100vw;
        min-width: 100vw;
        padding: 30vh 2% 1vh;
        width: 100%;
      }
      quote {
        color: #a69384;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: calc(20px + (52 - 20) * (100vw - 320px) / (1680 - 320));
      }
    `}</style>
  </div>
);

Index.getInitialProps = async function() {
  const resp = await fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
  const data = await resp.json();

  return {
    quote: data
  };
};

export default Index;
