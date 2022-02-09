import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  background-color: teal;
  color: white;
  display: flex;
  font-weight: 500;
  height: 30px;
  justify-content: center;
`

const Announcement = () => {
  return (
    <div>
      <Container>A big deal! Free Shipping on Orders Over $9000</Container>
    </div>
  )
}

export default Announcement
