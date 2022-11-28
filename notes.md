### React render flow

1. Create a new component version
2. Compare with the previous version
3. If there are changes, it will update what has changed

### When to use "memo"

1. Pure Functional Components
2. Renders too often
3. Re-renders with same props
4. Medium to big size components

### When to use "useMemo"

1. Heavy calculations
2. Referential equality (when passing information to a child component)

### When to use "useCallback"

1. Memorize a function and not a value