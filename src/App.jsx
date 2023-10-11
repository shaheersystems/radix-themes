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
  Link,
  Separator,
  DropdownMenu,
  TextField,
  RadioGroup,
} from "@radix-ui/themes";
import { CaretDownIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useTheme } from "./context/ThemeContext";
function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Theme
      appearance={"dark"}
      accentColor="green"
      grayColor="slate"
      radius="small"
      scaling="95%"
    >
      <>
        <div className="max-w-3xl py-10 m-auto space-y-5">
          <div className="space-y-4">
            <Heading>Create a new repository</Heading>
            <Text>
              A repository contains all project files, including the revision
              history. Already have a project repository elsewhere?
            </Text>
            <br />
            <Link href="#" className="text-blue-500">
              Import a repository
            </Link>
            <Separator my="3" size="4" />
          </div>
          <div className="space-y-4">
            <Em>Required fields are marked with an asterisk (*).</Em>
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-semibold">
                  Owner *
                </label>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Button variant="soft">
                      Shaheersystems
                      <CaretDownIcon />
                    </Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Item>Add other account</DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="font-semibold">
                  Repository name *
                </label>
                <TextField.Root>
                  <TextField.Input />
                </TextField.Root>
              </div>
            </div>
            <div>
              <Text>
                Great repository names are short and memorable. Need
                inspiration? How about <Link href="#">onion-smasher</Link> ?
              </Text>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">
                Description{" "}
                <span className="text-xs font-medium">(Optional)</span>{" "}
              </label>
              <TextArea placeholder="Brief description"></TextArea>
            </div>
            <Separator my="3" size="4" />
          </div>
          <div>
            <RadioGroup.Root defaultValue="1">
              <Flex gap="2" direction="column">
                <Text as="label" size="2">
                  <Flex gap="2">
                    <RadioGroup.Item value="1" /> Private
                  </Flex>
                </Text>
                <Text as="label" size="2">
                  <Flex gap="2">
                    <RadioGroup.Item value="2" /> Public
                  </Flex>
                </Text>
              </Flex>
            </RadioGroup.Root>
          </div>
          <Separator my="3" size="4" />
          <div>
            <Heading>Initilize this repository with:</Heading>
          </div>
          <div className="flex items-center justify-end">
            <Button className="flex items-center gap-2">
              Create repository
            </Button>
          </div>
        </div>
      </>
    </Theme>
  );
}

export default App;
