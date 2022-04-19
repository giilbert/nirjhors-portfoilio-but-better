import { Flex, Box, Heading, Image, Text } from "@chakra-ui/react";

export const About: React.FC = () => {
  return (
    <Flex>
      <Box p={{ base: "1rem 2rem", md: "4rem 8rem" }} w="100%" color="white">
        <Heading fontSize="4.5vmax">Me, Myself & I</Heading>
        <Flex
          w="100%"
          mt="2rem"
          justifyContent="space-between"
          gap="2rem"
          flexDir={{ base: "column-reverse", md: "row" }}
        >
          <Flex flex="0.9" fontSize="1.2rem">
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae earum nostrum expedita, dolorum possimus obcaecati velit
              dignissimos quod voluptates, veniam animi iusto tenetur! Et
              tenetur, asperiores <br></br>
              <br></br>Autem molestias possimus, eaque, quasi sint pariatur
              corrupti distinctio voluptas totam minus omnis error dignissimos
              reiciendis minima rem nam quam! Reprehenderit in delectus amet
              sequi. Incidunt earum aperiam harum et magni ipsa reiciendis nobis
              itaque eius, porro ad autem cupiditate sit, quis quas dicta
              voluptatum unde. Nihil reiciendis molestias est repellat eos
              corporis libero incidunt?
            </Text>
          </Flex>
          <Flex>
            <Image src="me.svg" />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
