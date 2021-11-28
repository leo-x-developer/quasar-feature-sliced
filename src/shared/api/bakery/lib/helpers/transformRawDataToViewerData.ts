export const transformRawDataToViewerData = (data: any) => {
  if(!data) return null

  const viewer = Object.entries(data).reduce((acc, [key, value]) => {
    if(key === 'username') {
      acc = {
        ...acc,
        name: value
      }
    } else {
      acc = {
        ...acc,
        [key]: value
      }
    }

    return acc
  }, {})

  return {
    ...viewer
  }
}
