# Lagen Shop - Pre-Mobile Optimization Version

This document explains how to access and run the pre-mobile optimization version of the Lagen Shop project.

## What is the Old Version?

The `old/` folder contains the **complete original repository state** from commit `a0be051` (before "implemented mobile responsiveness"). This is the true original state of the project with:

- **Original Navigation Structure**: Different menu items (COLLECTION, ACCESSORIES, LB CIRCLE ∞, LB NEXUS, etc.)
- **PathName Restrictions**: Sub-menus are hidden when you're on the specific page (e.g., shop sub-menu won't show when on /shop page)
- **Desktop-Only Navigation**: No mobile dropdown functionality or responsive navigation
- **Original Styling**: Different font sizes, spacing, and layout
- **Complete Original State**: All components, pages, and configurations as they were before mobile optimization

## Key Differences from Current Version

| Feature | Current Version | Old Version (a0be051) |
|---------|----------------|----------------------|
| Menu Items | Shop, Collections, Lookbook, About, Contact | HOME, Shop, COLLECTION, ACCESSORIES, LB CIRCLE ∞, LB NEXUS, Kids Clothing, Unisex, THE UNKNOWN, Coming Soon |
| Mobile Dropdowns | ✅ Full mobile support with toggle buttons | ❌ Desktop only |
| Sub-menu Visibility | ✅ Always visible on hover | ❌ Hidden on same page |
| Mobile Navigation | ✅ Toggle buttons & arrows | ❌ No mobile controls |
| Font Sizes | Responsive text sizing | Fixed pixel sizes (text-[10px], text-[14px]) |
| ShopNav Layout | Modern responsive design | Simple border layout with overflow-x-auto |

## How to Run the Old Version

### Method 1: Using the Batch Script (Recommended)
Run the provided batch script from the main project directory:
```bash
run-old-version.bat
```

This script will:
1. Navigate to the `old/` folder
2. Start the development server with the original codebase

### Method 2: Manual Navigation
1. Navigate to the `old/` folder:
   ```bash
   cd old
   ```
2. Install dependencies (if needed):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

The old version is a **complete git worktree** containing:
- ✅ **All original files** from commit a0be051
- ✅ **Original package.json** and dependencies
- ✅ **Original component implementations**
- ✅ **Original styling and configurations**
- ✅ **Complete functionality** as it was before mobile optimization

## Technical Details

- **Git Commit**: `a0be051` - "added a tooltip to the product card"
- **Created Using**: `git worktree add old a0be051`
- **Status**: Detached HEAD at commit a0be051
- **Dependencies**: Uses original package.json from that commit

## Notes

- The old version is completely independent and can run alongside the main project
- All original functionality is preserved exactly as it was
- You can make changes to the old version without affecting the main project
- The old version represents the true state before any mobile optimization work

## Navigation Comparison

### Current Version Menu:
- HOME
- Shop (with mega menu)
- Collections (with sub-menu)
- Lookbook
- About
- Contact

### Old Version Menu:
- HOME
- Shop (with mega menu, hidden on /shop page)
- COLLECTION (links to /collections/stella)
- ACCESSORIES
- LB CIRCLE ∞ (links to /rewards)
- LB NEXUS (links to /campaigns)
- Kids Clothing
- Unisex
- THE UNKNOWN
- Coming Soon