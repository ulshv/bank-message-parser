declare module "*test-cases.json" {
  const value: Array<{
      message: string,
      pattern_id: number | null,
      transaction: {
        balance: number | null,
        card: string,
        datetime: string,
        description: string | null,
        flow: '+' | '-',
        value: number,
        subject: string | null
      } | null
    }>

  export = value;
}

declare module "*banks.json" {
  const value: Array<string>
  export = value;
}

declare module "*unsupported.json" {
  const value: string[];
  export = value;
}
