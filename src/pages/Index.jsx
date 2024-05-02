// Hacker News UI Clone using Chakra UI and React Icons
import { Box, Container, Heading, List, ListItem, Link, Text, VStack, Icon } from "@chakra-ui/react";
import { FaHackerNews, FaExternalLinkAlt } from "react-icons/fa";

const Index = () => {
  // Sample data mimicking Hacker News posts
  const newsItems = [
    {
      id: 1,
      title: "Introducing the new React framework",
      url: "https://reactjs.org",
      points: 156,
      author: "reactlover",
      comments: 42,
    },
    {
      id: 2,
      title: "Understanding the Event Loop",
      url: "https://nodejs.org",
      points: 99,
      author: "nodefan",
      comments: 37,
    },
    {
      id: 3,
      title: "What's new in ES2021",
      url: "https://ecma-international.org",
      points: 73,
      author: "jsenthusiast",
      comments: 15,
    },
  ];

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl" display="flex" alignItems="center">
            <Icon as={FaHackerNews} mr={2} w={6} h={6} />
            Hacker News
          </Heading>
        </Box>
        <List spacing={3}>
          {newsItems.map((item) => (
            <ListItem key={item.id} p={3} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="lg">
                <Link href={item.url} isExternal color="blue.500">
                  {item.title} <Icon as={FaExternalLinkAlt} mx="2px" />
                </Link>
              </Heading>
              <Text mt={2}>
                {item.points} points by {item.author} | {item.comments} comments
              </Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
