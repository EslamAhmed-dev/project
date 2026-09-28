import styles from "styled-components";
const Container = styles.ul`
color: white;
padding: 10px;
border: 1px solid #000;
 display: flex;
justify-content: space-between;
list-style: none;
`;
const Text = styles.li`
color: red;

`;
function Footer() {
  return (
    <div>
      <Container>
        <Text>eslam</Text>
        <Text>ahmed</Text>
        <Text>tolba</Text>
      </Container>
    </div>
  );
}
export default Footer;
