function SearchBox({searchValue, setSearchValue}) {
  return (
    <div>
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="title..." />
    </div>
  )
}

export default SearchBox