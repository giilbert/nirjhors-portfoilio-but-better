import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Hide,
  Show,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { GraphQLClient } from "graphql-request";
import { GetStaticProps, NextPage } from "next";
import { Layout } from "../components/layout";
import { Nav } from "../components/nav";
import { DATOCMS_ENDPOINT } from "../consts";
import { IWorkQuery } from "../query";

const QUERY = `
  query Query {
    allProjects {
      name
      stack
      images {
        url
      }
      description
      year
    }
    contact {
      github
      instagram
      twitter
    }
  }
`;

const TableHeadings: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <GridItem>
        <Text opacity="60%" fontSize="1.25rem">
          Year
        </Text>
      </GridItem>
      <GridItem colSpan={2}>
        <Text opacity="60%" fontSize="1.25rem">
          Title
        </Text>
      </GridItem>
      {!isMobile && (
        <GridItem colSpan={4}>
          <Text opacity="60%" fontSize="1.25rem">
            Built With
          </Text>
        </GridItem>
      )}
      <GridItem colSpan={1}>
        <Text opacity="60%" fontSize="1.25rem">
          Links
        </Text>
      </GridItem>
    </>
  );
};

const Work: NextPage<{ query: IWorkQuery }> = ({ query }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Layout>
      <Nav {...query.contact} />
      <Flex flexDir="column" mt="4rem">
        <Heading fontSize={{ base: "3rem", lg: "4rem" }}>All Work</Heading>
        <Text color="accent" fontFamily="Space Mono" noOfLines={1}>
          All of the things I've worked on (pretty much)
        </Text>
      </Flex>
      <Grid
        templateColumns={{ base: "repeat(4, 1fr)", md: "repeat(8, 1fr)" }}
        mt={{ base: "2rem", md: "4rem" }}
      >
        <TableHeadings />
        {query.allProjects.map((project) => (
          <GridItem colSpan={{ base: 4, md: 8 }} mt="1rem">
            <Grid
              bgColor="#0a0a0a"
              h="4rem"
              borderRadius={5}
              templateColumns={{ base: "repeat(4, 1fr)", md: "repeat(8, 1fr)" }}
              alignItems="center"
            >
              <GridItem ml="1rem">
                <Text color="accent" fontFamily="Space Mono">
                  {project.year}
                </Text>
              </GridItem>
              <GridItem colSpan={2}>
                <Text>{project.name}</Text>
              </GridItem>
              {!isMobile && (
                <GridItem colSpan={4}>
                  <Text>{project.stack}</Text>
                </GridItem>
              )}
              <GridItem colSpan={1}>
                <Text>Links</Text>
              </GridItem>
            </Grid>
          </GridItem>
        ))}
      </Grid>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = new GraphQLClient(DATOCMS_ENDPOINT, {
    headers: {
      authorization: `Bearer ${process.env.CMS_TOKEN}`,
    },
  });

  const query = await client.request<IWorkQuery>(QUERY);

  return { props: { query } };
};

export default Work;
