import { Button } from "@/components/ui/button"

type Props = {
  page: number
  setPage: (page: number) => void
}

const PageNavigation = ({ page, setPage }: Props) => {
  const handleBack = () => {
    window.scrollTo({ top: 0 })
    setPage(page - 1)
  }

  const handleNext = () => {
    window.scrollTo({ top: 0 })
    setPage(page + 1)
  }

  return (
    <div className="w-full flex justify-between items-center px-4 py-8">
      <div>
        {page > 0 ? (
          <Button variant={"secondary"} onClick={handleBack}>
            Previous
          </Button>
        ) : null}
      </div>
      <div className="uppercase font-semibold">page: {page + 1}</div>
      <div>
        <Button variant={"secondary"} onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default PageNavigation
