import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';
import DivBg from '../src/components/DivBg';

// const DivBg = styled.div`
//   background-image: url(${ db.bg });
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `
const DivQuiz = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <DivBg backgroundImage={db.bg}>
      <DivQuiz>
        <Widget>
          <Widget.Header>
            <h1>Quiz  X-Men</h1>
          </Widget.Header>
          <Widget.Body>
            <p>Vc é manjão da galera X? Teste sua maestria com esse Quiz!</p>
          </Widget.Body>
        </Widget>
        <Widget>
          <Widget.Body>
            <h1>Pergunta - 01</h1>
            <p>Qual é o verdadeiro nome do Wolverine?</p>
            <ul>
              <li>A - O das Garras</li>
              <li>B - Prof. Sorriso</li>
              <li>C - Roronoa Zoro</li>
              <li>D - Logan</li>
            </ul>
          </Widget.Body>
        </Widget>
        <Footer />
      </DivQuiz>
      <GitHubCorner projectUrl="https://github.com/LferrazCoelho"/>
    </DivBg>
  );
}
