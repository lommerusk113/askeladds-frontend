export enum AccessLevel {
    full = "Full access",
    minimal = "Minimal access",
    limited = "Limited access",
    basic = "Basic access",
    custom = "Custom access"
}

export type ApiKey = {
    access: AccessLevel
    key: string
}

export type User = {
    id: string,
    email: string,
    keys: ApiKey[]
}