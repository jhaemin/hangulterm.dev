import { InfoCircledIcon, QuestionMarkIcon } from '@radix-ui/react-icons'
import {
  Callout,
  Card,
  Flex,
  Grid,
  Heading,
  Link,
  Separator,
  Text,
  Tooltip,
} from '@radix-ui/themes'
import { terms } from './terms'

const sortedTerms = terms.toSorted((a, b) => a.term.localeCompare(b.term))

function App() {
  return (
    <Flex direction="column" align="center" py="9" px="6">
      <Heading size="8">개발 용어 한글 표기법, 발음</Heading>

      <Callout.Root mt="6" color="blue">
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
          외래어 표기법, 공식 문서의 한글 표기법, 영어 사전의 발음 기호,
          제작자의 견해, 영어권 영상/음원 등을 기반으로 합니다.
        </Callout.Text>
      </Callout.Root>

      <Grid width="100%" mt="8" gap="5" className="terms-container">
        {sortedTerms.map(
          ({
            term,
            termURL,
            unopinionated,
            pronunciation,
            hangulNotation,
            korean,
          }) => (
            <Card key={term} size="2" variant="classic">
              <Flex align="center" justify="between">
                <Heading size="4" style={{ fontWeight: 600 }}>
                  {termURL ? (
                    <Link
                      href={termURL}
                      target="_blank"
                      color="gray"
                      highContrast
                    >
                      {term}
                    </Link>
                  ) : (
                    term
                  )}
                  {pronunciation && (
                    <Text size="2" weight="regular" color="gray" ml="2">
                      | {pronunciation} |
                    </Text>
                  )}
                </Heading>
                {unopinionated && (
                  <Tooltip content="Unopinionated">
                    <QuestionMarkIcon />
                  </Tooltip>
                )}
              </Flex>
              <Text as="p" mt="1" color="gray">
                {hangulNotation.label}
                {korean && ` (${korean.term})`}
              </Text>
              {hangulNotation.references && (
                <>
                  <Separator size="4" my="2" />
                  <Flex gap="3">
                    {hangulNotation.references.map(({ label, url }) => (
                      <Link
                        key={url}
                        href={url}
                        target="_blank"
                        size="2"
                        color="blue"
                      >
                        {label}
                      </Link>
                    ))}
                  </Flex>
                </>
              )}
            </Card>
          )
        )}
      </Grid>
    </Flex>
  )
}

export default App
