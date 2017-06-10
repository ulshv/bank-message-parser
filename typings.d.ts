declare module "*test-cases.json" {
  const value: Array<{
      message: string,
      bank_id: string | null,
      pattern_id: number | null,
      timezone?: number | string | null,
      transaction: {
        balance: number | null,
        card: string,
        currency: string,
        datetime: string,
        description: string | null,
        flow: '+' | '-',
        value: number,
        vendor: string | null
      } | null
    }>

  export = value;
}

declare module "*bank-paths.json" {
  const value: Array<string>
  export = value;
}

declare module "*unsupported.json" {
  const value: string[];
  export = value;
}
