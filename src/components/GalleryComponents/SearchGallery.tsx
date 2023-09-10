import debounce from "lodash.debounce"
import React, { useState, useCallback } from "react"
import { Search, X } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"

const SearchGallery = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get("q") || "")

  const debouncedSearch = debounce((criteria) => {
    setSearch(criteria)
  }, 50)

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    debouncedSearch(e.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (search.trim().length > 0) {
      navigate(`/search?q=${search}`)
    }
  }

  const handleClear = useCallback(() => {
    setSearch("")
    setSearchParams({ q: "" })
  }, [setSearchParams])

  return (
    <form
      className="w-full relative z-[1000]"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        name="search"
        value={search}
        onChange={handleChange}
        className="w-full h-9 px-4 py-2 outline-1 group  text-white bg-zinc-500/20 border border-transparent opacity-80 rounded-sm"
        placeholder="Images, #tags, @users oh my!"
      />

      <button type="submit">
        <Search className="absolute top-2 right-2 z-50 text-white/50 group-focus:text-white group-focus-visible:h-10" />
      </button>

      <button
        type="button"
        className="absolute top-2 right-10 z-50"
        title="clear"
        onClick={handleClear}
      >
        {search.trim().length > 1 ? <X className="h-5 w-5 text-white" /> : null}
      </button>
    </form>
  )
}

export default SearchGallery
