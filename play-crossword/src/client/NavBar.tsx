import { Nav } from "react-bootstrap"

export const NavBar = () => {
  return (
    <Nav defaultActiveKey="/home" as="ul">
    <Nav.Item as="button">
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
      <Nav.Item as="button">
        <Nav.Link href="/create">Create</Nav.Link>
      </Nav.Item>
      <Nav.Item as="button">
        <Nav.Link href="/upload">Upload</Nav.Link>
      </Nav.Item>
      <Nav.Item as="button">
        <Nav.Link href="/play">Play</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
