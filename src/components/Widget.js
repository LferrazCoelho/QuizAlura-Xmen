import styled from 'styled-components'

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: rgba(000, 000, 000, 0.75);
  border-radius: 4px;
  overflow: hidden;

  h1,h2,h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`
Widget.Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
`
Widget.Body = styled.div`
  padding: 24px 32px 32px 32px;
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`

export default Widget;