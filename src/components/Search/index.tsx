import algoliasearch from "algoliasearch/lite"
import { createRef, default as React, useState, useMemo } from "react"
import styled from "styled-components"
import { InstantSearch } from "react-instantsearch-dom"
import SearchBox from "./SearchBox"
import SearchResult from "./SearchResult"
import useOnClickOutside from "../../hooks/useOnClickOutside"
import { Index } from "./types"

const SearchRoot = styled.div`
  position: relative;
  margin: 0.6em 0;
`

export default function Search({ indices }: Props) {
  const rootRef = createRef<HTMLDivElement>()
  const [query, setQuery] = useState([])
  const [hasFocus, setFocus] = useState(false)
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID ?? "",
        process.env.GATSBY_ALGOLIA_SEARCH_KEY ?? ""
      ),
    []
  )

  useOnClickOutside(rootRef, () => setFocus(false))

  return (
    <SearchRoot ref={rootRef}>
      <InstantSearch
        indexName={"marcelo_page"}
        searchClient={searchClient}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
        <SearchResult
          show={!!(query && query.length > 0 && hasFocus)}
          indices={indices}
        />
      </InstantSearch>
    </SearchRoot>
  )
}

interface Props {
  indices: Index[]
}
