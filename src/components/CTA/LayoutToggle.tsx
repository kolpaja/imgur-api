import { useAppDispatch, useAppSelector } from "@/app/hook"
import { toggleLayout } from "@/features/layoutSlice"
import { LayoutGrid, LayoutPanelLeft } from "lucide-react"

type Props = {
  isScrolled: boolean
}

const LayoutToggle = ({ isScrolled }: Props) => {
  const dispatch = useAppDispatch()
  const layout = useAppSelector((state) => state.layoutType.layoutType)

  const onFilterChange = (event: any) => {
    const select = event.target
    const option = select.options[select.selectedIndex]

    dispatch(
      toggleLayout({
        layoutType: option.value,
      }),
    )
  }

  return (
    <div className="bg-transparent">
      {!isScrolled ? (
        <>
          <label className="mr-1 text-white" htmlFor="sort">
            Posts Layout
          </label>
          <select
            id="sort"
            name="sort"
            onChange={(e) => onFilterChange(e)}
            defaultValue={layout}
            className="bg-transparent  p-1 uppercase text-gray-400 font-semibold"
          >
            <option value="waterfall">waterfall</option>
            <option value="uniform">uniform</option>
          </select>
        </>
      ) : layout === "waterfall" ? (
        <div title="waterfall">
          <LayoutPanelLeft
            className="hover:cursor-pointer text-zinc-400"
            onClick={() =>
              dispatch(
                toggleLayout({
                  layoutType: "uniform",
                }),
              )
            }
          />
        </div>
      ) : (
        <div title="uniform">
          <LayoutGrid
            className="hover:cursor-pointer text-zinc-400"
            onClick={() =>
              dispatch(
                toggleLayout({
                  layoutType: "waterfall",
                }),
              )
            }
          />
        </div>
      )}
    </div>
  )
}

export default LayoutToggle
