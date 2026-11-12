# P.-KCS-New
# Kurnia Cahya Sejahtera — Website Company Profile

Website elegan & profesional untuk **PT Kurnia Cahya Sejahtera** — layanan security & cleaning service.

## ✨ Fitur
- Desain elegan (navy + gold, font Playfair + Plus Jakarta Sans)
- Responsive (mobile-first)
- Preloader halus
- Animasi reveal saat scroll
- Floating WhatsApp
- SEO meta + JSON-LD (LocalBusiness)
- Sitemap & robots.txt
- Mendukung `prefers-reduced-motion`

## 📂 Struktur

## 🚀 Deploy ke GitHub Pages
1. Buat repo baru: `kurniacahyasejahtera`.
2. Upload semua file.
3. **Settings → Pages → Source: Deploy from a branch**.
4. Branch `main`, folder `/ (root)`, klik **Save**.
5. Tunggu 1–2 menit, website live di `https://USERNAME.github.io/kurniacahyasejahtera/`.

## 🌐 Custom Domain `kurniacahyasejahtera.com`
1. File `CNAME` sudah disertakan — pastikan isinya hanya domain.
2. Di DNS registrar, tambahkan record:
   - `A` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME www` → `USERNAME.github.io`
3. Di GitHub Pages → **Custom domain** → isi `kurniacahyasejahtera.com` → Save.
4. Centang **Enforce HTTPS**.

## 🖼️ Gambar
Saat ini memakai Unsplash sebagai placeholder. Ganti dengan foto asli:
- `assets/hero.jpg` (gedung/kantor)
- `assets/cleaning-team.jpg` (tim cleaning)
- `assets/og-cover.jpg` (1200×630 untuk social share)

Contoh:
```html
<img src="assets/hero.jpg" alt="Kantor Kurnia Cahya Sejahtera" />
