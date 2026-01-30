import {
  AppShell,
  Burger,
  Group,
  Title,
  NavLink,
  ActionIcon,
  useMantineColorScheme,
  Container,
  Button,
  Grid,
  Divider,
  Avatar,
  Tabs,
  Card,
  Badge,
  Stack,
  Text,
  TextInput,
  Box,
  Modal,
  Image,
} from '@mantine/core';
import {
  IconSun,
  IconMoon,
  IconSearch,
  IconUser,
  IconSettings,
  IconWorld,
  IconSchool,
  IconCalendar,
  IconExternalLink,
  IconBrandGithubFilled,
  IconBrandPinterestFilled,
  IconBrandMantine,
} from '@tabler/icons-react';
import { useState } from 'react';

import firewatchImg from './assets/Firewatch.png';
import ralseiImg from './assets/ralsei.jpeg';

// 1. Simple CSS Animation for the Tabs
const fadeAnimation = `
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-tab {
    animation: fade-in-up 0.3s ease-out forwards;
  }
`;

function App() {
  const [creditsOpened, setCreditsOpened] = useState(false);
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <>
      {/* Inject animation styles */}
      <style>{fadeAnimation}</style>

      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 250,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header
          withBorder={true}
          style={{
            // 2. Blur Effect Implementation
            backgroundColor: colorScheme === 'dark' ? 'rgba(36, 36, 36, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)', // Safari support
            transition: 'background-color 0.3s ease',
          }}
        >
          <Group h="100%" px="md" justify="space-between">
            <Group>
              <Burger
                opened={opened}
                onClick={() => setOpened(!opened)}
                hiddenFrom="sm"
              />
              <Group gap="xs">
                {/* 3. Changed "T" Avatar to Moon Icon as requested previously */}
                <Avatar radius="sm" color="dark.5" variant="filled"><IconMoon size={18}/></Avatar>
                <Title order={3}>Nightlightmisc</Title>
              </Group>
            </Group>

            <Group>
              <TextInput
                placeholder="Search"
                leftSection={<IconSearch size={16} />}
                radius="xl"
                variant="filled"
                visibleFrom="xs"
              />
              <ActionIcon variant="default" radius="xl" size="lg" onClick={() => toggleColorScheme()}>
                {colorScheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
              </ActionIcon>
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar p="md" withBorder={true}>
          <Stack gap="xs">
            <Text c="dimmed" size="xs" fw={700} tt="uppercase" mb="xs">Menu</Text>
            <NavLink label="Profile" leftSection={<IconUser size={20} />} variant="subtle" active/>
            <NavLink label="Settings" leftSection={<IconSettings size={20} />} variant="subtle" />
          </Stack>
        </AppShell.Navbar>

        <AppShell.Main>
          <Container size="lg">
            {/* Breadcrumbs */}
            <Group mb="lg" align="center">
              <Text size="lg" c="dimmed">Profile /</Text>
              <Text size="xl" fw={600}>Nightlightmisc</Text>
            </Group>

            {/* Banner */}
            <Card padding={0} radius="lg" mb={50} style={{ overflow: 'visible' }}>
                <img
                    src={firewatchImg}
                    alt="Banner"
                    style={{
                    width: '100%',
                    height: 280,
                    objectFit: 'cover',
                    borderRadius: 'var(--mantine-radius-lg)',
                    }}
                />
            </Card>

            {/* Tabs */}
            {/* 4. Kept user's preference for variant="default" */}
            <Tabs defaultValue="about" variant="default" radius="sm">
              <Tabs.List mb="lg">
                <Tabs.Tab value="about">About Me</Tabs.Tab>
                <Tabs.Tab value="devlogs">Development Logs</Tabs.Tab>
                <Tabs.Tab value="socials">Socials</Tabs.Tab>
                <Tabs.Tab value="credits">Credits</Tabs.Tab>
              </Tabs.List>

              <Grid gutter="xl">
                {/* LEFT CONTENT */}
                <Grid.Col span={{ base: 12, md: 8 }}>
                    
                  {/* 5. Added className="animate-tab" to Panels for animation */}
                  <Tabs.Panel value="about">
                    <Box className="animate-tab">
                        <Stack gap="md">
                        <Card radius="md" p="lg" withBorder>
                            <Group align="flex-start" gap="xl" wrap="nowrap">
                              {/* TEXT */}
                              <div style={{ flex: 1 }}>
                                <Title order={3} mb="sm">
                                  About Me
                                </Title>

                                <Text c="dimmed">
                                  I'm a passionate creative developer and designer with over 5 years of
                                  experience building digital products that users love. I believe in the
                                  power of good design and clean code to solve real problems.
                                  <br /><br />
                                  When I'm not coding, you'll find me exploring new design trends,
                                  contributing to open-source projects, or sharing my knowledge through
                                  writing and speaking at conferences.
                                </Text>
                              </div>

                              {/* IMAGE */}
                              <Image
                                src={ralseiImg}
                                alt="Ralsei"
                                w={160}
                                radius="md"
                                fit="cover"
                              />
                            </Group>
                          </Card>
                        </Stack>
                    </Box>
                  </Tabs.Panel>
                  
                  <Tabs.Panel value="devlogs">
                    <Box className="animate-tab">
                        <Stack gap="md">
                        <Card radius="md" withBorder={true} p="lg">
                            <Title order={4} mb="md">Development Logs</Title>
                            <Text size="sm" c="dimmed" style={{ whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                            I'm a passionate creative developer and designer with over 5 years of
                            experience building digital products that users love. I believe in the
                            power of good design and clean code to solve real problems.
                            <br /><br />
                            When I'm not coding, you'll find me exploring new design trends,
                            contributing to open-source projects, or sharing my knowledge through
                            writing and speaking at conferences.
                            </Text>
                        </Card>
                        </Stack>
                    </Box>
                  </Tabs.Panel>

                  <Tabs.Panel value="socials">
                    <Box className="animate-tab">
                        <Card radius="md" withBorder={true} p="lg">
                        <Text c="dimmed">Portfolio items would go here...</Text>
                        </Card>
                    </Box>
                  </Tabs.Panel>
                  
                  <Tabs.Panel value="credits">

                      <Box className="animate-tab">
                        <Card radius="md" withBorder={true} p="lg">
                          <Button
                            fullWidth
                            color="dark"
                            variant="filled"
                            onClick={() => setCreditsOpened(true)}
                            styles={{
                              root: {
                                transition: 'all 0.2s ease',
                              },
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.25)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            View Credits
                          </Button>

                          {/* Credits Modal */}
                          <Modal
                            opened={creditsOpened}
                            onClose={() => setCreditsOpened(false)}
                            title="Credits & References"
                            centered
                            radius="md"
                          >
                            <Stack gap="sm">
                              <Text size="sm">
                                This project uses external inspirations and UI libraries as references
                                for design and development.
                              </Text>

                              <Button
                                component="a"
                                href="https://pin.it/5Qjm7K4ZQ"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="light"
                                fullWidth
                                leftSection={<IconBrandPinterestFilled size={18}/>}
                              >
                                Pinterest Reference 1
                              </Button>

                              <Button
                                component="a"
                                href="https://pin.it/2veZrq4ni"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="light"
                                fullWidth
                                leftSection={<IconBrandPinterestFilled size={18}/>}
                              >
                                Pinterest Reference 2
                              </Button>

                              <Button
                                component="a"
                                href="https://mantine.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="light"
                                fullWidth
                                leftSection={<IconBrandMantine size={18}/>}
                              >
                                Mantine UI
                              </Button>

                              <Divider my="sm" />

                              <Text size="xs" c="dimmed">
                                Thanks to Gemini and ChatGPT for modifying the code. Perhaps I use this
                                correctly.
                              </Text>
                            </Stack>
                          </Modal>
                        </Card>
                      </Box>

                  </Tabs.Panel>
                </Grid.Col>

                {/* RIGHT PANEL */}
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Card radius="md" withBorder={true} p="xl">
                    <Title order={3} mb="xs">
                      Nightlightmisc
                    </Title>

                    <Text size="sm" c="dimmed" mb="lg" lh={1.5}>
                      From cozy cafes to casual meet-ups, this community is united by the love for coffee,
                      creating a warm atmosphere.
                    </Text>

                    <Group mb="xl">
                      <Badge
                        variant="light"
                        color="gray"
                        leftSection={<IconWorld size={12} />}
                        radius="sm"
                      >
                        Public
                      </Badge>
                      <Badge
                        variant="light"
                        color="green"
                        leftSection={<IconCalendar size={12} />}
                        radius="sm"
                      >
                        Created Apr 2025
                      </Badge>
                    </Group>

                    <Group justify="space-between" gap={10}>
                      <Avatar src={ralseiImg} radius="xl" size="sm" />
                      <Text size="sm" fw={500}>Nightlightmisc</Text>
                      <Badge size="sm" variant="transparent" c="blue.5" ml={"auto"}>(Server Owner)</Badge>
                    </Group>

                    <Divider my="lg" />

                    <Group justify="space-between" mb="xs">
                      <Group gap={5}>
                        <IconSchool size={18} color="gray" />
                        <Text c="dimmed">Current status</Text>
                      </Group>
                      <Text fw={600}>Good</Text>
                    </Group>

                    <Group grow mt="xl">
                      {/* 6. Fix: Removed bg="dark.5" */}
                      {/* Using variant="default" ensures they are white/gray in light mode and dark in dark mode */}
                      <Button variant="default" radius="md" style={{ border: 'none' }} leftSection={<IconBrandGithubFilled size={18}/>} rightSection={<IconExternalLink size={18}/>}>
                        View project on GitHub
                      </Button>
                    </Group>
                  </Card>
                </Grid.Col>
              </Grid>
            </Tabs>
          </Container>
        </AppShell.Main>
      </AppShell>
    </>
  );
}

export default App;