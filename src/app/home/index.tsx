import Hero from '@/components/hero'
import { Container, Group, List, rem, Stack, Title } from '@mantine/core'
import { IconCircleCheck } from '@tabler/icons-react'

export default function Home() {
  return (
    <>
      <title>Hem</title>

      <Hero src='/home_hero.png'>
        <Container px='xl' py={rem(80)} size='lg'>
          <Stack align='center' gap='xl'>
            <Stack>
              <Title order={2} fw={700} c='white' ta='center'>
                Världens modernaste och lättanvända larm med videoövervakning
              </Title>

              <Title order={4} c='white' ta='center'>
                App i världsklass - Äg din trygghet
              </Title>

              <Title order={4} c='white' ta='center'>
                Abbonemangsfritt 0kr/månaden
              </Title>

              <Title order={4} c='white' ta='center'>
                Självövervaka - Välj till larmcentral
              </Title>
            </Stack>

            <Group>
              <List
                spacing='xs'
                size='md'
                c='white'
                center
                icon={
                  <IconCircleCheck
                    color='white'
                    style={{ width: rem(24), height: rem(24) }}
                  />
                }
              >
                <List.Item>Brand</List.Item>
                <List.Item>Säkerhet</List.Item>
                <List.Item>Vattenskydd</List.Item>
              </List>

              <List
                spacing='xs'
                size='md'
                c='white'
                center
                icon={
                  <IconCircleCheck
                    color='white'
                    style={{ width: rem(24), height: rem(24) }}
                  />
                }
              >
                <List.Item>Komfort</List.Item>
                <List.Item>Video</List.Item>
                <List.Item>Automation</List.Item>
              </List>
            </Group>
          </Stack>
        </Container>
      </Hero>

      <Container p='xl' size='lg'>
        <Title>Hem</Title>
        {Array(20)
          .fill(0)
          .map((_, x) => (
            <p key={x}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              quos dolore ex ducimus, necessitatibus sint totam aliquam magni,
              facilis vitae nemo labore. Recusandae, totam vitae sit laboriosam
              ipsum nihil quam!
            </p>
          ))}
      </Container>
    </>
  )
}
