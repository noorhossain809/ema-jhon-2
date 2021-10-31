import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
  InputGroup,
} from "react-bootstrap";
import "./Header.css";
import img from "../../images/logo.png";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdChatBubbleOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Container className="middle_header">
        <div className=" d-flex align-items-center gap-5 py-3">
          <Navbar.Brand href="#">
            <img className="branding" src={img} alt="" />
          </Navbar.Brand>
          <InputGroup className="input">
            <FormControl
              className="border border-danger"
              placeholder="Search for..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button className="" variant="danger" id="button-addon2">
              <BsSearch />
            </Button>
          </InputGroup>
        </div>
      </Container>
      <Navbar className="nav-items" variant="dark">
        <Container>
          <Navbar.Brand href="#home">All</Navbar.Brand>
          <Nav className="ms-auto gap-3">
            <Link to="/shop">Shop</Link>
            <Link to="/review">Order review</Link>
            <Link to="/manageInventory">Manage Inventory</Link>
            <FaShoppingCart className="icons m-3" />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
