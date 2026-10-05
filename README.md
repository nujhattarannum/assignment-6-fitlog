# 🏋️‍♂️️ FitLog — Workout Library & Daily Gym Companion

FitLog is a dark-themed, no-nonsense gym companion designed to help users explore workout libraries, log daily lift targets, and keep track of training metrics seamlessly.

---

## 📖 Short Description

FitLog lets users browse a full library of exercise routines categorized by muscle groups, view in-depth details and step-by-step instructions for each lift, and organize workouts into a daily 5-lift plan or saved list. It features dynamic stat calculations, route-specific suspense loaders, URL-synced tab navigation, and responsive layouts across mobile, tablet, and desktop screens.

---

## 🛠️ Technologies Used

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS & DaisyUI
- **State Management:** React Context API (`WorkoutProvider`)
- **Icons & Notifications:** React Icons & `react-toastify`
- **Deployment:** Vercel

---

## ✨ Key Features

1. **Exercise Library & Detailed Specs:**
   Browse twelve lifts with stats on duration, calorie burn, rating, equipment, and step-by-step instructions.

2. **Daily Plan & 5-Lift Cap:**
   Add workouts to "Today's Plan" with a dynamic 5-lift cap check and duplicate prevention toast alerts.

3. **Live Metrics Summary:**
   Real-time statistics calculation updating total exercises, combined duration (minutes), and cumulative calories burned as items are modified.

4. **Dynamic Sorting & Filtering:**
   Re-sort workouts instantly within Today's Plan or Saved views by **Duration** (default), **Calories**, or **Rating**.

5. **URL-Synced Tabs & Route Boundaries:**
   Synchronized tab switching between Today's Plan and Saved lists using URL query parameters (`?tab=today` / `?tab=saved`) alongside route-specific loading indicators.