declare module "*test-cases.json" {
  const value: Array<{
      message: string,
      pattern_id: number | null,
      transaction: {
        action: string | null,
        balance: number | null,
        card: string,
        datetime: string,
        type: string,
        value: number,
        subject: string | null
      } | null
    }>

  export = value;
}
