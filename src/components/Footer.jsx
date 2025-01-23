import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  Divider,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Bar from "../assets/bar.png";

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" py={10}>
      <Container maxW="container.xl">
        <Stack
          spacing={8}
          direction={{ base: "column", md: "row" }}
          justify="space-between"
        >
          <Box>
            <Link to="/" style={{ textDecoration: "none", zIndex: "99999" }}>
              <Flex align="center">
                <img src={Bar} style={{ maxWidth: "1rem" }} alt="Logo" />
                <Text fontSize="2xl" fontWeight="bold">
                  Digital Fue
                </Text>
              </Flex>
            </Link>

            <Text mt={2} fontSize="sm" maxW="400px">
              We are a passionate team dedicated to providing top-notch services
              to our clients. Our mission is to make your experience seamless
              and enjoyable, offering innovative solutions tailored to your
              unique needs.
            </Text>
          </Box>

          <Stack direction="column" spacing={3}>
            <Text fontWeight="bold" fontSize="lg">
              Quick Links
            </Text>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/team">Team</Link>
            <Link href="/contact">Contact</Link>
          </Stack>

          <Stack direction="column" spacing={3}>
            <Text fontWeight="bold" fontSize="lg">
              Follow Us
            </Text>
            <Stack direction="row" spacing={4}>
              <IconButton
                as="a"
                href="#"
                icon={<FaFacebook />}
                aria-label="Facebook"
                size="lg"
                variant="ghost"
                color="white"
                _hover={{
                  transform: "scale(1.2)",
                  color: "blue.400",
                  transition: "all 0.3s ease-in-out",
                }}
              />
              <IconButton
                as="a"
                href="#"
                icon={<FaTwitter />}
                aria-label="Twitter"
                size="lg"
                variant="ghost"
                color="white"
                _hover={{
                  transform: "scale(1.2)",
                  color: "blue.300",
                  transition: "all 0.3s ease-in-out",
                }}
              />
              <IconButton
                as="a"
                href="#"
                icon={<FaLinkedin />}
                aria-label="LinkedIn"
                size="lg"
                variant="ghost"
                color="white"
                _hover={{
                  transform: "scale(1.2)",
                  color: "blue.500",
                  transition: "all 0.3s ease-in-out",
                }}
              />
              <IconButton
                as="a"
                href="#"
                icon={<FaInstagram />}
                aria-label="Instagram"
                size="lg"
                variant="ghost"
                color="white"
                _hover={{
                  transform: "scale(1.2)",
                  color: "pink.400",
                  transition: "all 0.3s ease-in-out",
                }}
              />
            </Stack>
          </Stack>
        </Stack>

        <Divider my={6} borderColor="gray.700" />

        <Text textAlign="center" fontSize="sm">
          © {new Date().getFullYear()} Digital Fue. All Rights Reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
