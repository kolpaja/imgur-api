import { useGetUserAvatarQuery } from "@/features/usersApi"
import { Shell, ShieldQuestion } from "lucide-react"
import React from "react"

type Props = {
  username: string
}

const UserAvatar = ({ username }: Props) => {
  const { data, isError, isLoading, error } = useGetUserAvatarQuery(username)

  if (isError)
    return <ShieldQuestion className="h-8 w-8 rounded-full text-rose-500" />

  if (isLoading)
    return (
      <Shell className="h-8 w-8 rounded-full animate-spin text-green-500" />
    )

  // ! TODO https://imgur.com/user cors error
  const { avatar, avatar_name } = data.data

  const leter = avatar_name.split("/")[1][0]

  return (
    <div>
      <img
        src={avatar}
        alt={leter}
        className="h-8 w-8 rounded-full text-white bg-green-500 flex items-center uppercase justify-center text-md font-bold shadow shadow-green-400"
        crossOrigin="anonymous"
      />
    </div>
  )
}

export default UserAvatar
