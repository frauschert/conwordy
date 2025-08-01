# TypeScript Guidelines for Conwordy

## Type Safety Requirements

### Strict Type Checking

- Use `strict: true` in [tsconfig.json](mdc:tsconfig.json)
- Avoid `any` types - use proper type annotations
- Leverage TypeScript's type inference where appropriate
- Use const assertions for literal types

### Type Definitions

- All public APIs must have proper TypeScript types
- Use union types for aliases: `UnitsByCategory['length'] | LengthAlias`
- Leverage conditional types for category-specific logic
- Use template literal types for complex string manipulations

### Generic Types

- Use generics for reusable conversion logic
- Maintain type safety across category boundaries
- Use bounded generics: `<T extends Category>`
- Leverage mapped types for alias resolution

## Code Patterns

### Const Assertions

```typescript
// Use const assertions for alias objects
export const LENGTH_ALIASES = {
  m: 'meter',
  km: 'kilometer',
} as const;
```

### Conditional Types

```typescript
// Use conditional types for category-specific logic
export type ResolveAlias<C extends Category, T> = C extends 'length'
  ? ResolveLengthAlias<T>
  : C extends 'mass'
    ? ResolveMassAlias<T>
    : never;
```

### Type Guards

```typescript
// Use type guards for runtime type checking
function isLengthUnit(unit: string): unit is LengthUnit {
  return unit in LENGTH_CONVERSION_FACTORS;
}
```

## Import/Export Guidelines

### Barrel Exports

- Use [src/index.ts](mdc:src/index.ts) for public API exports
- Export types and functions separately
- Use named exports for better tree-shaking

### Type Imports

```typescript
// Use type imports for types only
import type { Category, UnitsByCategory } from './types';
```

## Error Handling

### Type-Safe Errors

- Create custom error types when needed
- Use branded types for error codes
- Maintain type safety in error scenarios

### Validation

- Use TypeScript's type system for compile-time validation
- Add runtime validation where necessary
- Use assertion functions for runtime type checking

## Testing Types

### Type Testing

- Test that types work as expected
- Use TypeScript's `expectType` for type assertions
- Test edge cases in the type system

### Test Structure

- Follow the pattern in [src/convert.test.ts](mdc:src/convert.test.ts)
- Test both positive and negative cases
- Test type safety in error scenarios
  description:
  globs:
  alwaysApply: false

---
