import styled from 'styled-components';

export const Title = styled.h2`
  margin-top: 0;
`

export const Container = styled.div`
  display: block;
  width: 95%;
  margin: 0 auto;
`
export const LinksContainer = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
`;

export const LinksGroup = styled.div`
  padding: 7px 10px;
`;

export const LinkWrapper = styled.div`
  margin: 20px 0;

  a {
    display: block;
    padding: 5px 15px;


    border-radius: 15px;
    box-shadow: 2px 3px 6px 0 rgba(32, 32, 32, 0.2);
    text-align: center;
    text-decoration: none;
    color: #333;

    :hover {
      box-shadow: 1px 2px 2px 0 rgba(32, 32, 32, 0.2);
    }

    :focus {
      color: #fff;
      background-color: #441eff;
      background-image: linear-gradient(42deg, #441eff, #511dff 10%, #611bff 21%, rgba(221, 14, 255, 0.7));
    }
  }



`;

export const ExtensionContainer = styled.div`
  position: relative;
  width: 375px;
  height: 667px;
  box-shadow: 2px 3px 6px 0 rgba(32, 32, 32, 0.2);
`;
