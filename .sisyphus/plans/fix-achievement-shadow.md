# Fix Achievement Cards Shadow Effect

## Objective
Add the neobrutalist black box shadow hover effect to the Achievement cards, matching the style of other components in the portfolio.

## Background
The portfolio uses neobrutalist design with CSS classes `neo-shadow` and `neo-shadow-hover` that create a black box shadow behind elements. On hover, the shadow grows and the element translates, creating a "lifting" effect. Currently, the Achievement cards use different shadow classes that don't match.

## Tasks

### Task 1: Update Achievement Card Shadow Classes
- [x] **COMPLETED**

**File:** `/home/nakul/devfiles/PROJECTS/portfolio/components/sections/Achievements.tsx`

**Action:** Edit line 63

**Change FROM:**
```tsx
<div className="relative bg-neo-white border-3 border-neo-black overflow-hidden shadow-neo-md hover:shadow-neo-lg transition-all hover:-translate-x-1 hover:-translate-y-1">
```

**Change TO:**
```tsx
<div className="relative bg-neo-white border-3 border-neo-black overflow-hidden neo-shadow neo-shadow-hover">
```

**Rationale:** The `neo-shadow` class provides the base `4px 4px 0px var(--neo-black)` box shadow, and `neo-shadow-hover` adds the hover transition that grows the shadow to `8px 8px 0px` and translates the element by `-4px, -4px` - matching other components like social links in Hero.tsx and timeline cards.

### Task 2: Verify Build
- [x] **COMPLETED**

**Command:** `npm run build`

**Expected:** Build should succeed with no errors related to the Achievements component.

**Result:** ✅ Build succeeded - compiled successfully in 3.8s with no errors

## Success Criteria
- [x] Achievement cards have visible black box shadow behind them
- [x] On hover, the shadow grows and cards appear to lift off the page
- [x] Effect matches other neobrutalist components in the portfolio (Hero social links, Timeline cards, etc.)
