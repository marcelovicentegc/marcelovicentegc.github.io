import { Link } from "gatsby"
import { default as React } from "react"
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
} from "react-instantsearch-dom"
import styled, { css } from "styled-components"
import { Index as SearchIndex } from "../types"

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits
  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null
})

const SearchResult = ({ indices, className }: SearchResultProps) => (
  <div className={className}>
    {indices.map((_, i) => (
      <Index key={i} indexName={"marcelo_page"}>
        <HitCount />
        <Hits
          // @ts-ignore
          className="Hits"
          hitComponent={({ hit }) => (
            <div>
              <Link to={hit.slug}>
                <h4>
                  <Highlight attribute="title" hit={hit} tagName="mark" />
                </h4>
              </Link>
              <Snippet attribute="excerpt" hit={hit} tagName="mark" />
            </div>
          )}
        />
      </Index>
    ))}
  </div>
)

const Popover = css`
  max-height: 80vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 100%;
  margin-top: 0.5em;
  width: 80vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  padding: 1em;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.secondary};
`

export default styled(SearchResult)<{ show: boolean }>`
  display: ${props => (props.show ? `block` : `none`)};
  ${Popover}

  .HitCount {
    display: flex;
    justify-content: flex-end;
  }

  .Hits {
    ul {
      list-style: none;
      margin-left: 0;
    }

    li.ais-Hits-item {
      margin-bottom: 1em;

      a {
        color: ${({ theme }) => theme.foreground};

        h4 {
          margin-bottom: 0.2em;
        }
      }
    }
  }

  .ais-PoweredBy {
    display: flex;
    justify-content: flex-end;
    font-size: 80%;

    svg {
      width: 70px;
    }
  }
`

interface SearchResultProps {
  indices: SearchIndex[]
  className?: string
}
