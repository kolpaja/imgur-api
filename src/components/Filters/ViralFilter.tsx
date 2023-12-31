import { useCallback } from "react"

import { useAppDispatch, useAppSelector } from "@/app/hook"
import { changeFilters } from "@/features/filterSlice"
import { cn } from "@/lib/utils"

const ViralFilter = ({ isScrolled }: { isScrolled: boolean }) => {
  const dispatch = useAppDispatch()

  const filters = useAppSelector((state) => state.filters)

  const handleShowViral = useCallback(() => {
    dispatch(changeFilters({ ...filters, showViral: !filters.showViral }))
  }, [dispatch, filters])

  return (
    <div
      className={cn(
        "flex items-center px-2 py-1 text-lg uppercase  text-white font-semibold",
        isScrolled ? "ml-8 flex-row-reverse " : "flex-row",
      )}
    >
      <input
        type="checkbox"
        className="mx-2 w-6 h-6 rounded-md text-white hover:cursor-pointer"
        checked={filters.showViral}
        onChange={handleShowViral}
      />
      Show Viral
    </div>
  )
}

export default ViralFilter
