import React from "react"
import styled, { css } from "styled-components"
import { connectSearchBox } from "react-instantsearch-dom"
import { SearchIcon } from "../../../assets/icons/search"

const SearchBox = connectSearchBox(
  // TODO: Open PR on react-instantsearch-dom or on @types/react-instantsearch-dom
  // to expose its types
  ({ refine, currentRefinement, className, onFocus }: any) => (
    <form className={className}>
      <input
        className="SearchInput"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
      <SearchIcon className="SearchIcon" />
    </form>
  )
)

const open = css`
  width: 10em;
  background: ${({ theme }) => theme.colors.primary};
  cursor: text;
  margin-left: -1.6em;
  padding-left: 1.6em;
`

const closed = css`
  width: 0;
  background: transparent;
  cursor: pointer;
  margin-left: -1em;
  padding-left: 1em;
`

export default styled(SearchBox)<{ hasFocus: boolean; onFocus: () => void }>`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.secondary};

  .SearchInput {
    outline: none;
    border: ${({ hasFocus }) => (hasFocus ? "auto" : "none")};
    font-size: 1em;
    transition: 100ms;
    border-radius: 4px;
    outline: none;
    color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
    ::placeholder {
      color: #888;
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }

  .SearchIcon {
    width: 1em;
    margin: 0.3em;
    pointer-events: none;
  }
`
