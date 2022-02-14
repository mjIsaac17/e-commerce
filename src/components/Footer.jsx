import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Room,
  Twitter,
  YouTube
} from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
  margin: 20px 0;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  align-items: center;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  color: white;
  display: flex;
  height: 40px;
  justify-content: center;
  margin-right: 20px;
  width: 40px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`
const Title = styled.h3`
  margin-bottom: 20px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

const ListItem = styled.li`
  margin-bottom: 10px;
  width: 50%;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`

const ContactItem = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 20px;
`

const Payment = styled.img`
  width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>E-Commerce</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          incidunt excepturi harum ipsa voluptate soluta dolorum hic nihil totam
          enim dolor nisi natus aliquid dignissimos eveniet, nobis, id expedita.
          Perferendis?
        </Desc>
        <SocialContainer>
          <SocialIcon color='3279E8'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E865FF'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='6FE8F9'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='FF1010'>
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Card</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} />
          123 Sunny Path, Desert River 12345
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} />
          +52 646 123 45 67
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: '10px' }} />
          isaac@email.com
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  )
}

export default Footer
