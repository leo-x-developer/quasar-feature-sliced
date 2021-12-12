export const tweek = (offset:any) => ({
  // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    minHeight: offset ? `calc(100vh - ${offset + 200}px)` : '100vh'
})
