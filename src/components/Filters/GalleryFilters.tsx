import { useState } from "react"

import { useAppDispatch, useAppSelector } from "@/app/hook"
import { changeFilters } from "@/features/filterSlice"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Filter } from "lucide-react"

type Props = {
  isScrolled: boolean
}

const GalleryFilters = ({ isScrolled }: Props) => {
  const [isTopSelected, setIsTopSelected] = useState(false)
  const [isUserSelected, setIsUserSelected] = useState(false)

  const dispatch = useAppDispatch()

  const filters = useAppSelector((state) => state.filters)

  function onFilterChange(event: any) {
    const select = event.target
    const option = select.options[select.selectedIndex]

    dispatch(
      changeFilters({
        [select.name]: option.value,
        page: 0,
      }),
    )

    if (select.name === "section") {
      option.value === "user"
        ? setIsUserSelected(true)
        : setIsUserSelected(false)
      option.value === "top" ? setIsTopSelected(true) : setIsTopSelected(false)
    }
  }

  return (
    <div>
      {!isScrolled ? (
        <div className="mr-3 flex flex-col md:flex-row items-start md:items-center gap-x-2">
          <div className="bg-transparent ">
            <label className="mr-1 text-white" htmlFor="section">
              Section
            </label>
            <select
              id="section"
              name="section"
              onChange={(e) => onFilterChange(e)}
              defaultValue={filters.section}
              className="bg-transparent  p-1 uppercase text-gray-400 font-semibold"
            >
              <option className="" value="hot">
                <span className="lowercase px-3">Hot</span>
              </option>
              <option value="top">Top</option>
              <option value="user">User</option>
            </select>
          </div>

          <div className="hidden md:block h-6 w-0.5 bg-zinc-600 rounded-lg " />

          <div className="bg-transparent">
            <label className="mr-1 text-white" htmlFor="sort">
              Sort by
            </label>
            <select
              id="sort"
              name="sort"
              onChange={(e) => onFilterChange(e)}
              defaultValue={filters.sort}
              className="bg-transparent  p-1 uppercase text-gray-400 font-semibold"
            >
              <option value="viral">Viral</option>
              <option value="top">Top</option>
              <option value="time">Time</option>
              {isUserSelected && <option value="rising">Rising</option>}
            </select>
          </div>

          <div className="hidden md:block h-6 w-0.5 bg-zinc-600 rounded-lg " />

          <div className="bg-transparent">
            <label className="mr-1 text-white" htmlFor="section">
              Time range
            </label>
            <select
              id="window"
              name="window"
              onChange={(e) => onFilterChange(e)}
              defaultValue={filters.window}
              className="bg-transparent  p-1 uppercase text-gray-400 font-semibold"
            >
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
              <option value="all">All</option>
            </select>
          </div>
        </div>
      ) : (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div title="filters">
                <Filter className="hover:cursor-pointer text-zinc-400" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom">
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Section</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <select
                      id="section"
                      name="section"
                      onChange={(e) => onFilterChange(e)}
                      defaultValue={filters.section}
                      className="bg-transparent  p-1 uppercase text-gray-400 font-semibold"
                    >
                      <option className="" value="hot">
                        <span className="lowercase px-3">Hot</span>
                      </option>
                      <option value="top">Top</option>
                      <option value="user">User</option>
                    </select>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>

              <DropdownMenuSeparator />

              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Sort by</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <select
                      id="sort"
                      name="sort"
                      onChange={(e) => onFilterChange(e)}
                      defaultValue={filters.sort}
                      className="bg-transparent  p-1 uppercase text-gray-400 font-semibold"
                    >
                      <option value="viral">Viral</option>
                      <option value="top">Top</option>
                      <option value="time">Time</option>
                      {isUserSelected && <option value="rising">Rising</option>}
                    </select>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>

              <DropdownMenuSeparator />

              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Time range</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <select
                      id="window"
                      name="window"
                      onChange={(e) => onFilterChange(e)}
                      defaultValue={filters.window}
                      className="bg-transparent  p-1 uppercase text-gray-400 font-semibold"
                    >
                      <option value="day">Day</option>
                      <option value="week">Week</option>
                      <option value="month">Month</option>
                      <option value="year">Year</option>
                      <option value="all">All</option>
                    </select>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )}
    </div>
  )
}

export default GalleryFilters
