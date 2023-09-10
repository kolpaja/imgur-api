import { Button } from "../ui/button"

type Props = {
  isScrolled: boolean
}

const ActionButtons = ({ isScrolled }: Props) => {
  return (
    <div className="flex gap-x-2 min-w-[280px]">
      <Button className="bg-purple-600 hover:bg-purple-500 text-white capitalize">
        Go ad-free
      </Button>
      <Button
        variant={"link"}
        className="text-white hover:bg-transparent font-semibold"
      >
        Sign in
      </Button>

      <Button
        variant={"secondary"}
        className="bg-green-500 font-semibold text-white hover:bg-green-400"
      >
        Sign up
      </Button>
    </div>
  )
}

export default ActionButtons
