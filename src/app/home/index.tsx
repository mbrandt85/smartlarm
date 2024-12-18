import { Title } from '@mantine/core'

export default function Home() {
  return (
    <>
      <title>Hem</title>
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
    </>
  )
}
