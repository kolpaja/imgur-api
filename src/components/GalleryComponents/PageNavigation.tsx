import { Button } from "@/components/ui/button"

type Props = {
  page: number
  nextPage: () => void
  previousPage: () => void
}

const PageNavigation = ({ page, nextPage, previousPage }: Props) => {
  return (
    <div className="w-full flex justify-center gap-x-4 items-center px-4 py-8">
      <div>
        {page > 0 ? (
          <Button variant={"secondary"} onClick={previousPage}>
            Previous
          </Button>
        ) : null}
      </div>
      <div className="uppercase font-semibold text-white">page: {page + 1}</div>
      <div>
        <Button variant={"secondary"} onClick={nextPage}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default PageNavigation
