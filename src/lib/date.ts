// Define time intervals in milliseconds
const minute = 60 * 1000
const hour = 60 * minute
const day = 24 * hour

export const getPostDate = (postDate: Date, now: Date) => {
  // Calculate the time difference in milliseconds, in real world scenario i would not do like this
  //  @ts-ignore
  const timeDifference = now - postDate

  // Calculate the time difference in hours, minutes, and days
  const hoursAgo = Math.floor(timeDifference / hour)
  const minutesAgo = Math.floor((timeDifference % hour) / minute)
  const daysAgo = Math.floor(timeDifference / day)

  // Create a human-readable string based on the time difference
  let timeAgoString = ""

  if (daysAgo > 0) {
    timeAgoString = `${daysAgo}d`
  } else if (hoursAgo > 0) {
    timeAgoString = `${hoursAgo}h`
  } else {
    timeAgoString = `${minutesAgo}m`
  }

  return timeAgoString
}
