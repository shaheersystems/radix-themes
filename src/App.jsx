import {
  ScrollArea,
  Heading,
  Flex,
  Avatar,
  TextArea,
  Checkbox,
  Box,
  Button,
  Text,
  Table,
  Em,
  Code,
  Tabs,
  Tooltip,
  IconButton,
  Theme,
} from "@radix-ui/themes";
import { useTheme } from "./context/ThemeContext";
function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Theme
      appearance={theme}
      accentColor="iris"
      grayColor="slate"
      radius="full"
      scaling="95%"
    >
      <>
        <div className="max-w-5xl m-auto space-y-5 py-10">
          <IconButton onClick={toggleTheme} radius="full">
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </IconButton>
          <ScrollArea
            type="always"
            scrollbars="vertical"
            style={{ height: 180 }}
          >
            <Box p="2" pr="8">
              <Heading size="4" mb="2" trim="start">
                <Em>Principles of the typographic craft</Em>{" "}
              </Heading>
              <Flex direction="column" gap="4">
                <Text as="p">
                  Three fundamental aspects of typography are legibility,
                  readability, and aesthetics. Although in a non-technical sense
                  “legible” and “readable” are often used synonymously,
                  typographically they are separate but related concepts.
                </Text>

                <Text as="p">
                  Legibility describes how easily individual characters can be
                  distinguished from one another. It is described by Walter
                  Tracy as “the quality of being decipherable and recognisable”.
                  For instance, if a “b” and an “h”, or a “3” and an “8”, are
                  difficult to distinguish at small sizes, this is a problem of
                  legibility.
                </Text>

                <Text as="p">
                  Typographers are concerned with legibility insofar as it is
                  their job to select the correct font to use. Brush Script is
                  an example of a font containing many characters that might be
                  difficult to distinguish. The selection of cases influences
                  the legibility of typography because using only uppercase
                  letters (all-caps) reduces legibility.
                </Text>
              </Flex>
            </Box>
          </ScrollArea>
          <div>
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                  <Table.Cell>danilo@example.com</Table.Cell>
                  <Table.Cell>Developer</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                  <Table.Cell>zahra@example.com</Table.Cell>
                  <Table.Cell>Admin</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                  <Table.Cell>jasper@example.com</Table.Cell>
                  <Table.Cell>Developer</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </div>
          <div>
            <Tabs.Root defaultValue="account">
              <Tabs.List>
                <Tabs.Trigger value="account">Account</Tabs.Trigger>
                <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
                <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
              </Tabs.List>

              <Box px="4" pt="3" pb="2">
                <Tabs.Content value="account">
                  <Text size="2">Make changes to your account.</Text>
                </Tabs.Content>

                <Tabs.Content value="documents">
                  <Text size="2">Access and update your documents.</Text>
                </Tabs.Content>

                <Tabs.Content value="settings">
                  <Text size="2">
                    Edit your profile or update contact information.
                  </Text>
                </Tabs.Content>
              </Box>
            </Tabs.Root>
          </div>
          <div className="space-y-4">
            <TextArea placeholder="Reply to comment…" />
            <Button>Comment</Button>
          </div>
        </div>
      </>
    </Theme>
  );
}

export default App;
