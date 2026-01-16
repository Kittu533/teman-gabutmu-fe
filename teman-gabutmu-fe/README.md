# Teman Gabutmu

Platform top-up game terlengkap di Indonesia. Aplikasi web untuk melakukan pembelian diamond, voucher, dan item game dengan mudah dan aman.

## Tech Stack

- Vue 3 + TypeScript
- Vite
- Pinia (State Management)
- Vue Router
- Tailwind CSS
- Lucide Vue Next (Icons)

## Features

- 🏠 **Home** - Menampilkan banner promo, game populer, dan daftar game
- 🎮 **Game Detail** - Halaman top-up dengan pilihan nominal dan metode pembayaran
- 🎁 **Promo** - Daftar promo dengan filter kategori game
- 🏆 **Hadiahku** - Halaman hadiah user
- 📋 **Transaksi** - Riwayat transaksi
- 🔐 **Authentication** - Login/Register dengan badge system

## UI/UX Features

- Responsive design (Mobile, Tablet, Desktop)
- Bottom navigation untuk mobile
- Skeleton loading untuk semua halaman
- Dark theme
- Badge system untuk user (3 level badge)

## Project Setup

```sh
npm install
```

### Development

```sh
npm run dev
```

### Build for Production

```sh
npm run build
```

### Lint

```sh
npm run lint
```

## Project Structure

```
src/
├── assets/          # Images, CSS
├── components/
│   ├── auth/        # LoginModal, UserDropdown
│   ├── game/        # GameDetailSkeleton
│   ├── home/        # HeroBanner, GameCard, PopularSection, etc.
│   ├── layout/      # TheHeader, TheSidebar, TheFooter
│   ├── transaction/ # ConfirmationModal
│   └── ui/          # SkeletonLoader
├── layouts/         # MainLayout
├── router/          # Vue Router config
├── stores/          # Pinia stores (auth)
└── views/           # Page components
```

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
